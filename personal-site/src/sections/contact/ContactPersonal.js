import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";
import styled, { keyframes } from "styled-components";
import AnimationContainer from "components/animation-container";
import ContactPersonalForm from "./parts/ContactPersonalForm.js";
import EmailIcon from "../../../content/images/icons/email.png";
import PhoneIcon from "../../../content/images/icons/phone.png";
import AddressIcon from "../../../content/images/icons/adress.png";
import { Helmet } from "react-helmet";

class ContactPersonal extends React.Component {
  componentDidMount = () => {
    window.addEventListener("load", () => {
      document.getElementsByClassName(
        "calendly-inline-widget"
      )[0].style.height = "630px";
    });
  };

  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #000;
      padding: 100px 0;
    `;

    const FormRow = styled(Row)`
      background-color: #111;
    `;

    const ContactCol = styled(Col)`
      min-height: 600px;
      max-height: 600px;
      padding: 0;
      display: flex;
      align-items: center;
    `;

    const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `;

    const Gradient = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      clip-path: polygon(
        0% 100%,
        10px 100%,
        10px 10px,
        calc(100% - 10px) 10px,
        calc(100% - 10px) calc(100% - 10px),
        10px calc(100% - 10px),
        10px 100%,
        100% 100%,
        100% 0%,
        0% 0%
      );
      background: linear-gradient(
        120deg,
        #04e5e5,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
      background-size: 300% 300%;
      animation: ${gradientAnimation} 5s ease-in-out infinite;
    `;

    const Map = styled.iframe`
      border: none;
      height: 100%;
      width: 100%;
    `;

    const IconRow = styled(Row)`
      margin-top: 150px;
    `;

    const IconCol = styled(Col)`
      @media (max-width: 500px) {
        margin-bottom: 140px;
      }
    `;

    const IconContainer = styled.div`
      width: 150px;
      height: 150px;
      margin: auto;
      padding: 35px;
      text-align: center;
      position: relative;
      bottom: 75px;
      background: linear-gradient(
        120deg,
        #04e5e5,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
      );
      background-size: 300% 300%;
      animation: ${gradientAnimation} 5s ease-in-out infinite;
      border-radius: 150px;
      transition: 0.5s;
    `;

    const InfoPart = styled.div`
      min-height: 250px;
      background-color: #111;
      border: 2px solid #444;
    `;
    const Icon = styled.img`
      height: 70px;
      width: 70px;
      object-fit: contain;
    `;

    const InfoTitle = styled.h4`
      font-size: 35px;
      color: #fff;
      font-family: Teko;
      text-align: center;
    `;

    const Info = styled.div`
      position: relative;
      bottom: 30px;
    `;

    const InfoLinkContainer = styled.div`
      text-align: center;
    `;

    const InfoLink = styled.a`
      color: #04e5e5;
      transition: 0.5s;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    `;

    const Separator = styled.div`
      height: 5px;
      width: 50px;
      background-color: #04e5e5;
      margin-bottom: 30px;
      margin-left: 6px;
    `;

    const Heading = styled.h2`
      font-size: 70px;
      font-family: Teko;
      color: #fff;
    `;

    return (
      <Section id="contact">
        <Container>
          <AnimationContainer animation="fadeIn">
            <Helmet>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
              ></script>
            </Helmet>
            <Heading>Get In Touch</Heading>
            <Separator />
            <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/itisshahwar?background_color=4d5055&text_color=ffffff"
              style={{ "min-width": "320px", height: "630px;" }}
            ></div>
          </AnimationContainer>
          <IconRow>
            <IconCol md={6}>
              <AnimationContainer animation="fadeIn" delay={500}>
                <InfoPart>
                  <IconContainer>
                    <Icon src={EmailIcon} alt="email" />
                  </IconContainer>
                  <Info>
                    <InfoTitle>Email</InfoTitle>
                    <InfoLinkContainer>
                      <InfoLink href="mailto:email@yoursite.com">
                        itisshahwar@gmail.com
                      </InfoLink>
                    </InfoLinkContainer>
                  </Info>
                </InfoPart>
              </AnimationContainer>
            </IconCol>
            <IconCol md={6}>
              <AnimationContainer animation="fadeIn" delay={1000}>
                <InfoPart>
                  <IconContainer>
                    <Icon src={PhoneIcon} alt="phone" />
                  </IconContainer>
                  <Info>
                    <InfoTitle>Phone</InfoTitle>
                    <InfoLinkContainer>
                      <InfoLink href="tel:+(123)123-1234">
                        (+92) 331-1334033
                      </InfoLink>
                    </InfoLinkContainer>
                  </Info>
                </InfoPart>
              </AnimationContainer>
            </IconCol>
          </IconRow>
        </Container>
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        emailIcon: file(relativePath: { eq: "icons/email2.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mapIcon: file(relativePath: { eq: "icons/map.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        phoneIcon: file(relativePath: { eq: "icons/phone.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    `}
    render={({ emailIcon, mapIcon, phoneIcon }) => (
      <ContactPersonal
        emailIcon={emailIcon}
        mapIcon={mapIcon}
        phoneIcon={phoneIcon}
        {...props}
      />
    )}
  />
);

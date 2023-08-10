import React from "react";
import styled from "styled-components";
import RibbonGIF from "../../../assets/WelcomePage/Ribbon.mp4";
import Button from "../../buttons/Button";

import { useTranslation } from "react-i18next";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  background-color: #000000;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxxl};

  letter-spacing: 0.08em;
  color: #d5ff10;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  position: relative;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60%;
  min-height: 50vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  text-align: center;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontxl};
  line-height: ${(props) => props.theme.fontlg};
  text-align: start;
  text-align: center;

  width: 800px;

  &:before {
    content: " ";
    z-index: -10;
    position: absolute;
    margin-right: 7%;
    margin-top: 15%;
    margin-left: 3%;
    margin-bottom: 15%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, #4988ec 0%, #fff73f 100%);
    filter: blur(70px);
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  &::after {
    content: "";
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Ribbon = styled.span`
  width: 100%;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const WhiteList = () => {
  const { t } = useTranslation();
  return (
    <Section id="whitelist">
      <Title>WhiteList</Title>
      <Container>
        <Info>
          What does the white list give?
          <br />
          <br />
          It allows you to be the first to buy your panda. And also if you get
          on the whitelist, there will be a discount on the panda. In order to
          get whitelisted you just need to fill the form below and wait for the
          results.
          <br />
          <br />
          Good luck, maybe you are the one who can get your panda first!
        </Info>
        <Ribbon>
          <video src={RibbonGIF} type="video/mp4" autoPlay muted loop />
        </Ribbon>
        <BtnContainer>
          <Button
            text={"get Whitelist"}
            link={"https://forms.gle/26kM7PudwhBJTQYS6"}
            type="button"
          />
        </BtnContainer>
      </Container>
    </Section>
  );
};

export default WhiteList;

import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Button from "../../buttons/Button";

import { useTranslation } from "react-i18next";
import { Web3Button } from "@web3modal/react";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }

  @media (max-width: 30em) {
    z-index: 100;

    width: 70%;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: #ffffff;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-top: -35%;
    z-index: 100;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #ffffff;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  align-self: flex-start;

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

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: #ffffff;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

const Story = () => {
  const { t, i18n, ready } = useTranslation();

  return (
    <Section>
      <Container>
        <Box>
          {" "}
          <Carousel />{" "}
        </Box>
        <Box>
          <Title>STORY ABOUT FINE PANDAS</Title>
          <SubText>
            The story began in a dark bamboo forest. Thousands of years ago, the
            panda dynasty was born. It exists even in our time, and its main
            goal is to protect the world from the dark force.
          </SubText>
          <SubTextLight>
            It is you who can help the pandas to overcome the darkness. You can
            bring peace to the world.
          </SubTextLight>
          <ButtonContainer>
            <Button
              text={"JOIN OUR TWITTER"}
              link={"https://twitter.com/PandasFine"}
              type="button"
            />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default Story;

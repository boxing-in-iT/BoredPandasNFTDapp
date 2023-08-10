import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../../buttons/Button";

import { useTranslation } from "react-i18next";
import { Web3Button } from "@web3modal/react";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  width: 80%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  text-transform: uppercase;

  color: #ffffff;

  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;

    letter-spacing: 0.08em;

    -webkit-text-stroke: 2px #d5ff10;
    color: transparent;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
  }

  @media (max-width: 30em) {
    span {
      -webkit-text-stroke: 0.5px #d5ff10;
    }
  }
`;

const Subtitle = styled.h3`
  color: #ffffff;
  opacity: 0.6;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    align-self: center;
  }

  @media (max-width: 48em) {
    align-self: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>
        Welcome to
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span>Fine Pandas!</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span>Family!</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>
        The Fine Pandas Collection features 8888 unique pandas.
        <br />
        <br />
        Each priced at 35$ for the Public Mint and 25$ for WhiteList users.
        <br />
        <br />
        Get your hands on one of these limited-edition digital collectibles
        today!
      </Subtitle>
      <ButtonContainer>
        <Button
          text={"EXPLORE"}
          link={"https://opensea.io/explore-collections"}
          type="button"
        />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;

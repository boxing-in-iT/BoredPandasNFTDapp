import React from "react";
import styled from "styled-components";
import LotteryTicket from "../../../assets/Lottery/LotteryTicket.svg";
import LotteryMobile1 from "../../../assets/Lottery/LotteryMobile1.svg";
import LotteryMobile2 from "../../../assets/Lottery/LotteryMobile2.svg";

import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxl};

  letter-spacing: 0.08em;
  color: #ffffff;

  span {
    color: #d5ff10;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  position: relative;
  width: 80%;
  min-height: 80vh;
  margin: 0 auto;

  img {
    display: flex;
    width: 100%;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    display: flex;

    img {
      display: flex;
    }

    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      margin-top: 5%;
    }
  }
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
  font-size: ${(props) => props.theme.fontlg};
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

const Lottery = () => {
  const { t } = useTranslation();
  return (
    <Section id="lottery">
      <Title>Lottery cush</Title>
      <Container>
        <Info>
          We present you an innovation in the world of NFT. This is a lottery,
          the prize of which will be collected during the sale of our
          collection. This is a special mechanism created to ensure that our
          collection is not like ordinary NFT projects where people do not make
          money. In our case, most of you will be able to earn money on our
          collection by purchasing a panda.
          <br />
          <br />
          How many good things you can do by purchasing a panda. You can help to
          fight darkness and bring peace to the world, and you can also earn
          extra money for yourself.
        </Info>
        <img className="mobile" src={LotteryMobile1} alt="LotteryMobile" />
        <img className="mobile" src={LotteryMobile2} alt="LotteryMobile" />
        <img className="desktop" src={LotteryTicket} alt="LotteryTicket" />
      </Container>
    </Section>
  );
};

export default Lottery;

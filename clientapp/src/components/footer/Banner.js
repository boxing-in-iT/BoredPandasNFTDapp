import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Footer/VRPanda.png";
import img2 from "../../assets/Footer/CrownPanda.png";
import img3 from "../../assets/Footer/GuyPanda.png";
import img4 from "../../assets/Footer/LegPanda.png";
import img5 from "../../assets/Footer/Mafia.png";
import img6 from "../../assets/Footer/SpaceMan.png";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid #d5ff10;
  border-bottom: 2px solid #d5ff10;

  background-color: #494947;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.25;

  img {
    widht: 15rem;
    height: 15rem;
  }

  @media (max-width: 48em) {
    img {
      widht: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: #d5ff10;
  padding: 1.5rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    padding: 2rem 0;
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const Btn = styled.button`
  display: inline-block;
  background-color: #d5ff10;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    color: #d5ff10;
    transform: scale(0.9);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const JoinNow = ({ text, link }) => {
  return (
    <Btn>
      <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </Link>
    </Btn>
  );
};

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="Fine Pandas" />
        <img src={img2} alt="Fine Pandas" />
        <img src={img3} alt="Fine Pandas" />
        <img src={img4} alt="Fine Pandas" />
        <img src={img5} alt="Fine Pandas" />
        <img src={img6} alt="Fine Pandas" />
      </ImgContainer>
      <Title>
        Join the <br /> Fine Pandas{" "}
      </Title>
      <BtnContainer>
        <JoinNow
          text="Join now"
          link={"https://forms.gle/26kM7PudwhBJTQYS6"}
          type="button"
        />
      </BtnContainer>
    </Section>
  );
};

export default Banner;

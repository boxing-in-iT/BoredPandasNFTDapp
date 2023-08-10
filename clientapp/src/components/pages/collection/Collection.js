import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../../assets/NFTS/azov.png";
import img3 from "../../../assets/NFTS/girl.png";
import img5 from "../../../assets/NFTS/maidan.png";
import img6 from "../../../assets/NFTS/robot.png";
import img8 from "../../../assets/NFTS/soldier.png";
import img9 from "../../../assets/NFTS/soul.png";

import img11 from "../../../assets/Collection/img1.png";
import img12 from "../../../assets/Collection/img2.png";
import img13 from "../../../assets/Collection/img3.png";
import img14 from "../../../assets/Collection/img4.png";
import img20 from "../../../assets/Collection/img10.png";

import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxxl};

  text-transform: uppercase;

  color: #d5ff10;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Row = styled.div`
  width: 90vw;
  white-space: nowrap;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 98%;
    height: 70%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 2px solid #d5ff10;

    @media (max-width: 48em) {
      width: 98%;
      height: 70%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border: 2px solid #d5ff10;
    }

    @media (max-width: 30em) {
      width: 100%;
      height: 60%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border: 2px solid #d5ff10;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: #000000;
  border: 2px solid #d5ff10;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: #ffffff;
    font-weight: 600;
  }
`;

const NftItem = ({ img, number = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="NFT" />
      <Details>
        <div>
          <span>Fine Panda</span> <br />
          <h1>#{number}</h1>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Collection = () => {
  const { t } = useTranslation();

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="collection">
      <Title>Collection overview</Title>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={1232} passRef={Row1Ref} alt="NFT" />
        <NftItem img={img8} number={5223} passRef={Row1Ref} alt="NFT" />
        <NftItem img={img3} number={6457} passRef={Row1Ref} alt="NFT" />
        <NftItem img={img6} number={435} passRef={Row1Ref} alt="NFT" />
        <NftItem img={img5} number={3} passRef={Row1Ref} alt="NFT" />
        <NftItem img={img9} number={23} passRef={Row1Ref} alt="NFT" />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img11} number={235} passRef={Row2Ref} alt="NFT" />
        <NftItem img={img12} number={456} passRef={Row2Ref} alt="NFT" />
        <NftItem img={img13} number={567} passRef={Row2Ref} alt="NFT" />
        <NftItem img={img14} number={6785} passRef={Row2Ref} alt="NFT" />
        <NftItem img={img20} number={8888} passRef={Row1Ref} alt="NFT" />
      </Row>
    </Section>
  );
};

export default Collection;

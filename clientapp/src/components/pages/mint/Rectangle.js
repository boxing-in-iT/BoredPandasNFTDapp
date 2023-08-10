import React from "react";
import { styled } from "styled-components";

import Samurai from "../../../assets/NFTS/samurai.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Tangle = styled.div`
  margin-left: 15%;
  margin-top: 5%;
  display: flex;
  width: 90%;
  height: 100%;
  min-height: 700px;
  justify-content: center;
  flex-wrap: wrap;
  background: #d5ff10;
  border-radius: 46px;
`;

const ImageCont = styled.div`
  padding-top: 15%;
`;

const Image = styled.img`
  height: auto;
  border-radius: 50%;
  border: 15px solid #251d1d;
  box-sizing: border-box;
  width: 315px;
  height: 315px;
  overflow: hidden;
`;

const Div = styled.div`
  width: 80%;
`;

const Rectangle = () => {
  return (
    <Tangle>
      <ImageCont>
        <Image src={Samurai}></Image>
      </ImageCont>
      <Div>
        <ProgressBar
          completed={60}
          bgColor="#251c1c"
          height="40px"
          labelSize="30px"
        />
      </Div>
    </Tangle>
  );
};

export default Rectangle;

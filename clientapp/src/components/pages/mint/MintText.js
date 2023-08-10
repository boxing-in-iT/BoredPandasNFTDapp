import React from "react";
import { styled } from "styled-components";

import "@fontsource/poppins";

const Title = styled.h1`
  font-size: 80px;
  font-family: "Poppins";
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font-size: 18px;
`;

const MintText = ({ isWhiteListed }) => {
  const renderLabel = () => {
    if (isWhiteListed) {
      return (
        <>
          <Title>Fine Pandas</Title>
          <SubTitle>Congratulations you are whitelisted</SubTitle>
          <SubTitle>
            You are able to mint up to 20 NFTs at the price of 25$
          </SubTitle>
        </>
      );
    } else
      return (
        <>
          <Title>Fine Pandas</Title>
          <SubTitle>Unfortunately you are not in white list!</SubTitle>
          <SubTitle>
            But You are able to mint up to 20 NFTs at the price of 35$
          </SubTitle>
        </>
      );
  };
  return renderLabel();
};

export default MintText;

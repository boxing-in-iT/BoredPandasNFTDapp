import React from "react";
import styled from "styled-components";

import Hands from "../../assets/Header/DonateLogo.svg";

const Btn = styled.button`
  display: inline-block;
  background-color: transparent;
  color: #d5ff10;
  outline: none;
  border: 1px solid #d5ff10;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    color: #000000;
    transform: scale(0.9);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, #4988ec 0%, #fff73f 100%);
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const DonateBtn = ({ text, link }) => {
  return (
    <Btn>
      <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
        <img src={Hands} alt="Hands" />
      </Link>
    </Btn>
  );
};

export default DonateBtn;
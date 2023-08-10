import React from "react";
import styled from "styled-components";

import Banner from "./Banner";

import TwitterLogo from "../svg/TwitterLogo";
import DiscordLogo from "../svg/DiscordLogo";
import { useTranslation } from "react-i18next";

import { Web3Button } from "@web3modal/react";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  color: #ffffff;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #d5ff10;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  color: #d5ff10;
  padding: 1.5rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 50%;
    padding: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    padding: 0rem 0.5rem;
  }
`;

const Socials = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const SocialsItem = styled.li`
  margin: 1rem 1rem;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
  width: 2rem;
  height: 2rem;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  width: 50%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const MenuItem = styled.li`
  width: fit-content;
  color: #ffffff;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #fef22b;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 30em) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    span {
      margin-bottom: 1rem;
      font-size: ${(props) => props.theme.fontxs};
      text-align: center;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Title>Fine pandas</Title>
          <Socials>
            <SocialsItem>
              <a
                href="https://twitter.com/PandasFine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterLogo />
              </a>
            </SocialsItem>
            <SocialsItem>
              <a
                href="https://discord.gg/gB2qpKdFCK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordLogo />
              </a>
            </SocialsItem>
          </Socials>
        </Left>
        <Menu>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("collection")}>Collection</MenuItem>
          <MenuItem onClick={() => scrollTo("lottery")}>Lottery Cush</MenuItem>
          <MenuItem onClick={() => scrollTo("whitelist")}>WhiteList</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>RoadMap</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
        </Menu>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Fine Pandas. All rights reserved.
        </span>

        <Web3Button />
      </Bottom>
    </Section>
  );
};

export default Footer;

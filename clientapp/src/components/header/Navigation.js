import React, { useState } from "react";
import styled from "styled-components";

import DonateBtn from "../buttons/DonateBtn";

import TwitterLogo from "../svg/TwitterLogo";
import DiscordLogo from "../svg/DiscordLogo";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

//import "../pages/mint/style.css";
import Button from "../buttons/Button";

import { Web3Button } from "@web3modal/react";

const Section = styled.section`
  width: 100vw;
  background-color: #000000;
  z-index: 1000;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};

  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    gap: 1rem;
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 10000;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuButtons = styled.li`
  margin: 0 1rem;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 64em) {
    margin: 1rem 0;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: #ffffff;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #d5ff10;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      content: " ";
      display: block;
      width: 0%;
      height: 2px;
      background: #d5ff10;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: #ffffff;

  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: flex;

  cursor: pointer;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: #ffffff;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Socials = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const SocialsItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
  width: 2rem;
  height: 2rem;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  -webkit-text-stroke: 2px #d5ff10;
  color: transparent;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxxl};

  letter-spacing: 0.08em;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
    -webkit-text-stroke: 1px #d5ff10;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    -webkit-text-stroke: 0.5px #d5ff10;
  }
`;

const BtnBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

const LanguageBtn = styled.button`
  display: flex;
  background-color: transparent;
  color: #d5ff10;
  outline: none;
  border: 1px solid #d5ff10;

  font-size: ${(props) => props.theme.fontsm};
  padding: 0.3rem 1rem;
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
    background: linear-gradient(to bottom, #fff73f 0%, #fff73f 100%);
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const { t, i18n, ready } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <div className="desktop">
          <Link to="/mint">
            <Button text={"To Mint Page"} type="button" />
          </Link>
        </div>
        <Logo className="mobile">Fine Pandas</Logo>
        <HamburgerMenu
          className="mobile"
          click={click}
          onClick={() => setClick(!click)}
        >
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuButtons>
            <div className="mobile">
              <DonateBtn
                link="https://u24.gov.ua/"
                text="Donate Ukraine"
                type="button"
              ></DonateBtn>
            </div>
          </MenuButtons>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("collection")}>Collection</MenuItem>
          <MenuItem onClick={() => scrollTo("lottery")}>Lottery Cush</MenuItem>
          <MenuItem onClick={() => scrollTo("whitelist")}>WhiteList</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>RoadMap</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
          <Socials>
            <SocialsItem>
              <a
                href="https://twitter.com/PandasFine"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterLogo />
              </a>
            </SocialsItem>
            <SocialsItem>
              <a
                href="https://discord.gg/gB2qpKdFCK"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordLogo />
              </a>
            </SocialsItem>
          </Socials>
          <MenuButtons>
            <div className="mobile">
              <Web3Button />
            </div>
          </MenuButtons>
        </Menu>
        <div className="desktop">
          <Web3Button />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;

import React from "react";
import styled from "styled-components";
import DrawSvg from "./DrawSvg";

import { useTranslation } from "react-i18next";

const Section = styled.section`
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
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

const Container = styled.div`
  width: 70%;
  height: 350vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  position: relative;
  color: #000000;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid #d5ff10;
  border-radius: 5px;
  margin-top: 10%;

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const SubTitle = styled.span`
  display: flex;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  color: #d5ff10;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const TextUl = styled.ul`
  display: flex;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;

  color: #ffffff;

  margin: 0.5rem 0;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 600;
  }
`;

const TextLi = styled.ul`
  display: flex;
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;

  color: #ffffff;

  margin: 0;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 600;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 400;
  }
`;

const RoadMapItem = ({ title, subtext, subtext1, subtext2, subtext3 }) => {
  return (
    <Item>
      <ItemContainer>
        <SubTitle>{title}</SubTitle>
        <TextUl>
          <TextLi>
            {subtext}
            <br />
            {subtext1}
            <br />
            {subtext2}
            <br />
            {subtext3}
          </TextLi>
        </TextUl>
      </ItemContainer>
    </Item>
  );
};

const RoadMap = () => {
  const { t } = useTranslation();
  return (
    <Section id="roadmap">
      <Title>RoadMap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <RoadMapItem
            title={"Mission 1"}
            subtext={"Website"}
            subtext1={"Social Networks"}
            subtext2={"Marketing"}
            subtext3={"Audience accumulation"}
          />
          <RoadMapItem
            title={"Mission 2"}
            subtext={"Lottery cush"}
            subtext1={"Fully dApp"}
            subtext2={"More marketing"}
            subtext3={"10 Legendary NFT's"}
          />
          <RoadMapItem
            title={"Mission 3"}
            subtext={"Coming soon!"}
            subtext1={"Coming soon!"}
            subtext2={"Coming soon!"}
            subtext3={"Coming soon!"}
          />
          <RoadMapItem
            title={"Mission 4"}
            subtext={"Coming soon!"}
            subtext1={"Coming soon!"}
            subtext2={"Coming soon!"}
            subtext3={"Coming soon!"}
          />
          <RoadMapItem
            title={"Mission 5"}
            subtext={"Coming soon!"}
            subtext1={"Coming soon!"}
            subtext2={"Coming soon!"}
            subtext3={"Coming soon!"}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;

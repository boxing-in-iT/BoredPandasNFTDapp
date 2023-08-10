import React from "react";
import styled from "styled-components";

import img1 from "../../../assets/Team/akira.png";
import img2 from "../../../assets/Team/fumar.png";
import img3 from "../../../assets/Team/cuba.png";
import img4 from "../../../assets/Team/filka.png";
import img5 from "../../../assets/Team/DreamTeam.png";

import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxxl};

  letter-spacing: 0.08em;
  color: #d5ff10;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 30em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  margin: 2rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 64em) {
    width: 70vw;
  }
`;
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 1rem;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: #ffffff;
  margin-top: 1rem;
  font-weight: 400;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Story = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>Meet the team</Title>
      <Container>
        <MemberComponent img={img1} name="Whale" position={"Head Manager"} />
        <MemberComponent
          img={img2}
          name="Fumar"
          position={"Web 3.0 Developer"}
        />
        <MemberComponent
          img={img3}
          name="Cuba"
          position={"Web 3.0 Developer"}
        />
        <MemberComponent img={img4} name="Filka" position={"Web Designer"} />
        <MemberComponent
          img={img5}
          name="Panda San"
          position={"Marketing Manager"}
        />
      </Container>
    </Section>
  );
};

export default Story;

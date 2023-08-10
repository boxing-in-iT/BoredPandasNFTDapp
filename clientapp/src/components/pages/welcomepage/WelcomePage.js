import React from "react";
import styled from "styled-components";
import TypeWriterText from "./TypeWriterText";
import CoverVideo from "./CoverVideo";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  /* position: relative; */
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    justify-items: center;
    flex-direction: column-reverse;
    gap: 2rem;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomePage = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo class="cover-video" />
        </Box>
      </Container>
    </Section>
  );
};

export default WelcomePage;

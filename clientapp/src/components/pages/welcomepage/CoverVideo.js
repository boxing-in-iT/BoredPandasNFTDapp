import React from "react";
import styled from "styled-components";
import GIF from "../../../assets/WelcomePage/video.mp4";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:before {
    content: " ";
    z-index: 0;
    position: absolute;
    margin-right: 5%;
    margin-top: -3%;
    margin-left: 5%;
    margin-bottom: -3%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, #d5ff10 0%, #d5ff10 100%);
    filter: blur(25px);
    opacity: var(0.7);
    transition: opacity 0.3s;
  }

  &::after {
    content: "";
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  video {
    width: 80%;
    height: auto;
    border-radius: 5px;

    z-index: 1;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }

  @media (max-width: 30em) {
    min-width: 25vh;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;

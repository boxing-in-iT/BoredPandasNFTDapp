import React from "react";
import Countdown from "react-countdown";
import { styled } from "styled-components";

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
`;

const TimerNumber = styled.span`
  font-size: 35px;
  color: #d5ff10;
`;

const TimerLabel = styled.span`
  font-size: 35px;
  color: #d5ff10;
`;

const Timer = () => {
  const endDate = new Date("July 7, 2023 00:00:00");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Действия после окончания обратного отсчета
      return <span>Таймер завершен!</span>;
    } else {
      // Отображение оставшегося времени
      return (
        <TimerContainer>
          <TimerWrapper>
            <TimerNumber>{days}</TimerNumber>
            <TimerLabel>Days</TimerLabel>
          </TimerWrapper>
          <TimerWrapper>
            <TimerNumber>{hours}</TimerNumber>
            <TimerLabel>Hours</TimerLabel>
          </TimerWrapper>
          <TimerWrapper>
            <TimerNumber>{minutes}</TimerNumber>
            <TimerLabel>Minutes</TimerLabel>
          </TimerWrapper>
          <TimerWrapper>
            <TimerNumber>{seconds}</TimerNumber>
            <TimerLabel>Seconds</TimerLabel>
          </TimerWrapper>
        </TimerContainer>
      );
    }
  };

  return <Countdown date={endDate} renderer={renderer} />;
};

export default Timer;

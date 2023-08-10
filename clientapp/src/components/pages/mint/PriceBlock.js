import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../../buttons/Button";

const Rectangle = styled.div`
  width: 80%; /* Ширина прямоугольника будет занимать 50% ширины родительского элемента */
  height: 40%; /* Высота прямоугольника будет занимать 30% высоты родительского элемента */
  background-color: #251c1c; /* Задний фон прямоугольника */
  border-radius: 10%; /* Радиус скругления краев */
`;

const Row = styled.div`
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5ff10;
  padding: 10px 0;
  /* margin-bottom: 2%; */
`;

const FlatButton = styled.button`
  background-color: #d9d9d9;
  color: #000;
  border: 2px solid #000;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const PriceBlock = ({ price, rePrice, setRePrice, guantity, setG }) => {
  useEffect(() => {
    setRePrice(price * guantity);
  }, [guantity]);

  const handleDecrement = () => {
    if (guantity > 1) {
      setG(guantity - 1);
    }
  };

  const handleIncrement = () => {
    if (guantity < 20) {
      setG(guantity + 1);
    }
  };

  const handleMax = () => {
    setG(20);
  };

  return (
    <Rectangle>
      <Row>
        <span>Balance:</span>
        <span id="price">{price} ETH</span>
      </Row>
      <Row>
        <span>Amount:</span>
        <FlatButton onClick={handleDecrement}>-</FlatButton>
        <input
          type="number"
          className="quantity-input"
          value={guantity}
          min="1"
          max="20"
        />
        <FlatButton onClick={handleIncrement}>+</FlatButton>
        <FlatButton onClick={handleMax}>MAX</FlatButton>
      </Row>
      <Row>
        <span>Total</span>
        <span>{rePrice} ETH</span>
      </Row>
    </Rectangle>
  );
};

export default PriceBlock;

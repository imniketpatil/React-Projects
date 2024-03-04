import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CurrentChoice = ({
  selectedNumber,
  setSelectedNumber,
  showWarning,
  setShowWarning,
}) => {
  const handleSelect = (number) => {
    setSelectedNumber(number);
  };

  // useEffect(() => {
  //   setShowWarning(false);
  // }, [selectedNumber]);

  const numbers = [1, 2, 3, 4, 5, 6];

  const buttons = numbers.map((number) => (
    <button
      key={number}
      className={selectedNumber === number ? "onSelect" : ""}
      onClick={() => handleSelect(number)}
    >
      {number}
    </button>
  ));

  return (
    <SelectionBtns showWarning={showWarning}>
      <span>You have not selected any number</span>
      <OnlyBtns>{buttons}</OnlyBtns>
      <p>Select Number</p>
    </SelectionBtns>
  );
};

const SelectionBtns = styled.div`
  span {
    display: ${({ showWarning }) => (showWarning ? "flex" : "none")};

    font-size: 24px;
    font-weight: 400;
    color: #ff0c0c;
  }

  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: end;
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const OnlyBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  button {
    width: 72px;
    height: 72px;
    padding: 18px 0px;
    border: 2px solid black;
    background-color: white;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:hover {
    transform: scale(1.2);
  }
  .onSelect {
    background-color: black;
    color: white;
  }
`;

export default CurrentChoice;

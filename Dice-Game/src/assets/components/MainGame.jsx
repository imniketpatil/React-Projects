import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Rules from "./Rules";

const MainGame = ({ imgNumber, gNumber }) => {
  const [show, setShow] = useState(false); // Initialize the show state variable
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <MainSection>
      <ImgSection>
        <img
          src={`/images/dice_${imgNumber}.png`}
          alt="Dice Image"
          onClick={gNumber}
        />
        <p>Click on Dice to roll</p>
      </ImgSection>
      <InfoSection>
        <Button text="Reset Score" cName={true} />
        <Button
          text={show === true ? "Hide Rules" : "Show Rules"}
          handleClick={handleClick}
        />
      </InfoSection>
      <Rules show={show} setShow={setShow} />
    </MainSection>
  );
};

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  p {
    align-self: center;
    font-size: 20px;
    font-weight: 500;
  }
`;

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 250px;
    height: 250px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 220px;
    height: 44px;
    padding: 10px 18px; /* Removed commas */
    border-radius: 5px;
    gap: 10px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 1ms ease-in;
  }
  button:hover {
    background-color: white;
    color: black;
  }
`;

export default MainGame;

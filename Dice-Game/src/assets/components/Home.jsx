import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Home = ({ handleClick }) => {
  return (
    <Container>
      <img src="../images/dices 1.png" alt="Home Page Image" />
      <div className="inner-container">
        <h1>DICE GAME</h1>
        <Button handleClick={handleClick} text="Play Now" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    width: 649px;
    height: 522px;
  }
  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    font-size: 69px;
    font-weight: 700;
    white-space: nowrap;
    button {
      width: 220px;
      height: 44px;
      padding: 10px, 18px, 10px, 18px;
      border-radius: 5px;
      gap: 10px;
      border: none;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`;

export default Home;

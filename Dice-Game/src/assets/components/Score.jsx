import React from "react";
import styled from "styled-components";
const Score = ({ score, setScore }) => {
  return (
    <StyledScore>
      <h1>{score}</h1>
      <p>Total Score</p>
    </StyledScore>
  );
};
const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 100px;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
export default Score;

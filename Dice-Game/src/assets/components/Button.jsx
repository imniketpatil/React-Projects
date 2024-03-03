import React from "react";
import styled from "styled-components";

const Button = ({ text, handleClick, cName, check }) => {
  return (
    <StyledButton onClick={handleClick} className={cName ? "onSelect" : ""}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  &.onSelect {
    background-color: white;
    color: black;
    border: 2px solid black;
  }

  &:not(.onSelect) {
    background-color: black;
    color: white;
    border: 2px solid black;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default Button;

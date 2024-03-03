import React from "react";
import styled from "styled-components";

const Rules = ({ show }) => {
  return (
    <Rule show={show}>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be deducted </li>
      </ul>
    </Rule>
  );
};

const Rule = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  background-color: #fbf1f1;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  ul {
    list-style: none;
  }

  ul > li {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Rules;

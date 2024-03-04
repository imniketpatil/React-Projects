import React from "react";
import styled from "styled-components";
import Score from "./Score";
import CurrentChoice from "./CurrentChoice";
const Navigation = ({
  selectedNumber,
  setSelectedNumber,
  score,
  setScore,
  showWarning,
  setShowWarning,
}) => {
  return (
    <StyledNav className="container">
      <Score score={score} setScore={setScore} />
      <CurrentChoice
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        showWarning={showWarning}
        setShowWarning={setShowWarning}
      />
    </StyledNav>
  );
};
const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
`;

export default Navigation;

import React from "react";
import StyledNav from "./Navigation";
import MainGame from "./MainGame";
const Game = ({
  imgNumber,
  setImgNumber,
  selectedNumber,
  setSelectedNumber,
  score,
  setScore,
  gNumber,
  showWarning,
  setShowWarning,
}) => {
  return (
    <div>
      <StyledNav
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        setScore={setScore}
        showWarning={showWarning}
      />
      <MainGame
        imgNumber={imgNumber}
        setImgNumber={setImgNumber}
        gNumber={gNumber}
      />
    </div>
  );
};

export default Game;

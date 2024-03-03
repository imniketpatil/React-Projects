import "./App.css";
import Home from "./assets/components/Home";
import Game from "./assets/components/Game";

import { useState } from "react";
function App() {
  const [showWarning, setShowWarning] = useState(true);

  const [imgNumber, setImgNumber] = useState(1);

  const [selectedNumber, setSelectedNumber] = useState(null);

  const [isStart, setIsStart] = useState(false);

  const [score, setScore] = useState(0);

  const gNumber = () => {
    const newNumber = Math.floor(Math.random() * 6 + 1);
    setImgNumber(newNumber);
    console.log(newNumber);
    if (selectedNumber === null) {
      setShowWarning((prev) => {
        !prev;
      });
    } else {
      if (newNumber === selectedNumber) {
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => prev - 1);
      }
    }
  };

  const handleClick = () => {
    setIsStart((prev) => !prev);
    setSelectedNumber(null);
  };
  return (
    <>
      {isStart ? (
        <Game
          imgNumber={imgNumber}
          setImgNumber={setImgNumber}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          score={score}
          setScore={setScore}
          gNumber={gNumber}
          showWarning={showWarning}
        />
      ) : (
        <Home handleClick={handleClick} />
      )}
    </>
  );
}

export default App;

import "./App.css";
import Home from "./assets/components/Home";
import Game from "./assets/components/Game";

import { useState, useEffect } from "react";
function App() {
  const [showWarning, setShowWarning] = useState(false);

  const [imgNumber, setImgNumber] = useState(1);

  const [selectedNumber, setSelectedNumber] = useState(null);

  const [isStart, setIsStart] = useState(false);

  const [score, setScore] = useState(0);

  useEffect(() => {
    setSelectedNumber(null);
  }, [score]);

  const gNumber = () => {
    const newNumber = Math.floor(Math.random() * 6 + 1);
    setImgNumber(newNumber);

    if (selectedNumber === null) {
      setShowWarning((prev) => true);
    } else {
      if (newNumber === selectedNumber) {
        // setShowWarning((prev) => false);
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    setShowWarning((prev) => false);
  }, [selectedNumber]);

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
          setShowWarning={setShowWarning}
        />
      ) : (
        <Home handleClick={handleClick} />
      )}
    </>
  );
}

export default App;

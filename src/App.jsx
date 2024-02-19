import { useState, useRef } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
  const [player, setPlayer] = useState();
  const [squares, setSquares] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(-1);
  
  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let levelAmount;

  const handleSquareClick = (id) => {
    if (current !== id) {
      handleStop();
      return;
    }

    rounds.current--;
    setScore(score + 1);
  };

  // Random number function
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  // Get random number
  const randomNumber = () => {
    if (rounds.current >= 3) {
      handleStop();
      return;
    }
    
    let nextActive;

    do {
      nextActive = getRandomNumber(0, levelAmount);
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);

    currentInst.current = nextActive;
    
    rounds.current++;
    console.log(nextActive);

    timeoutIdRef.current = setTimeout(randomNumber, pace);
    pace -= 10;
  };

  const handleStop = () => {
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  };

  const handleCloseModal = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setGameInProgress(!gameInProgress);
    setScore(0);
  };

  const gameSetHandler = (level, name) => {
    /* Based on levels, find the matching object from levels array and make array of squares with amount in object */
    // const levelIndex = levels.findIndex(el => el.name === level);

    // levelAmount = levels[levelIndex].amount;

    const { amount } = levels.find((el) => el.name === level); // Same as above
    console.log(amount);

    levelAmount = amount;

    const squaresArray = Array.from({ length: amount }, (_, i) => i); // Underscore used to replace an element when it is never used

    setSquares(squaresArray);

    setPlayer({
      level: level, // Can be written as level (without semicolon)
      name: name, // Can be written as name
    });

    rounds.current = 0;

    setGameLaunch((prevLaunch) => !prevLaunch); // Forces react to check the current state and update it
    setGameInProgress(!gameInProgress);
    randomNumber();
  };

  return (
    <>
      <h1>Speed chess</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameInProgress && (
        <Game
          score={score}
          squares={squares}
          handleSquareClick={handleSquareClick}
          handleStop={handleStop}
          current={current}
        />
      )}
      {gameOver && (
        <GameOver
          score={score}
          {...player}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;

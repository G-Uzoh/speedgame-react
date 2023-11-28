import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from "./UI components/Circle";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleStop = () => {
    console.log('game stopped')
    setGameOver(!gameOver)
    setGameInProgress(!gameInProgress);
    setGameLaunch(!setGameLaunch)
  }

  const gameSetHandler = (level, name) => {
    /* Based on levels, find the matching object from levels array and make array of circles with amount in object */
    const levelIndex = levels.findIndex(el => el.name === level);

    const levelsAmount = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: levelsAmount }, (x, i) => i);

    setCircles(circlesArray)


    setPlayer(
      {
        level: level, // Can be written as level (without semicolon)
        name: name, // Can be written as name
      }
    );

    setGameLaunch(!gameLaunch);
    setGameInProgress(!gameInProgress);
  };


  return (
    <>
      <h1>Speed game</h1>
      {/* Conditional redering */}
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameInProgress && <Game score={score} circles={circles} handleStop={handleStop} />}
      {gameOver && <GameOver />}
    </>
  )
}

export default App

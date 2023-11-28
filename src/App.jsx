import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from "./UI components/Circle";
import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (level, name) => {
    /* Based on levels, find the matching object from levels array and make array of circles with amount in object */
    const levelIndex = levels.findIndex(el => el.name === level);

    const levelsAmount = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: levels[levelIndex].amount }, (x, i) => i);

    setCircles(circlesArray)


    setPlayer(
      {
        level: level, // Can be written as level (without semicolon)
        name: name, // Can be written as name
      }
    );
  };


  return (
    <>
      <h1>Speed game</h1>
      <NewGame onclick={gameSetHandler} />
      <Game score={score} circles={circles} />
    </>
  )
}

export default App

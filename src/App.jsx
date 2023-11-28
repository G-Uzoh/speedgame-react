import { useState } from "react";
import NewGame from "./components/NewGame";

function App() {
  const [player, setPlayer] = useState();

  const gameSetHandler = (level, name) => {
    setPlayer(
      {
        level: level, // Can be written as level (without semicolon)
        name: name, // Can be written as name
      }
    )
  };

  console.log(player);

  return (
    <>
      <h1>Speed game</h1>
      <NewGame onclick={gameSetHandler} />
    </>
  )
}

export default App

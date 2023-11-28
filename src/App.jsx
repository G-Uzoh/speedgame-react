import NewGame from "./components/NewGame"

function App() {

  const gameSetHandler = (level) => {
    console.log(level)
  }

  return (
    <>
      <h1>Speed game</h1>
      <NewGame onclick={gameSetHandler} />
    </>
  )
}

export default App

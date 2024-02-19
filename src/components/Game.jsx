import Square from "../UI components/Square";

const Game = ({ score, squares, handleSquareClick, handleStop, current }) => {
  return (
    <div>
      <p className="game-score">{score}</p>
      {/* Underscore is used to replace map elements which are not used in the code */}
      <div className="square-container">
        {squares.map((_, i) => (
          <Square key={i} id={i} click={() => handleSquareClick(i)} current={current === i} />
        ))}
      </div>
      <button className="stop-btn" onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Game;

import Circle from "../UI components/Circle";

const Game = ({ score, circles, handleStop }) => {
  return (
    <div>
      <p>{score}</p>
      {/* Underscore is used to replace map elements which are not used in the code */}
      <div className="circle-container">
        {circles.map((_, i) => (
          <Circle key={i} />
        ))}
      </div>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Game;

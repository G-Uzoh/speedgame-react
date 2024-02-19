const Square = ({ id, click, current }) => {
  return (
    <>
        <div
          onClick={() => click(id)}
          className={`square ${current ? "active" : ""}`}
        ></div>
    </>
  );
};

export default Square;

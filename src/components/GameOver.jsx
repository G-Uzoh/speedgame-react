const GameOver = ({ handleCloseModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Game Over</h2>
                {/* <p className="score">{score}</p> */}
                <p id="modal-msg"></p>
                <button className="modal-btn" onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    );
}
 
export default GameOver;
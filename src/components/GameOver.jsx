const GameOver = ({ score, name, level, handleCloseModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Game Over</h2>
                <p>Score: {score}</p>
                <p>Player: {name ? name : "N/A"}</p>
                <p>Difficulty: {level.charAt(0).toUpperCase() + level.slice(1)}</p>
                <p id="modal-msg"></p>
                <button className="modal-btn" onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    );
}
 
export default GameOver;
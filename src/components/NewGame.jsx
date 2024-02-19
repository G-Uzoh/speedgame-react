import { useState } from "react";

function NewGame({ onclick }) {
    const [name, setName] = useState('');

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);
    }
    
    return (
    <div className="new-game">
        <h2>Start a new game by entering your name and choosing difficulty level</h2>
        <input type="text" placeholder="Enter your name" onChange={handleInput} />
        <div className="game-buttons-holder">
            <button onClick={() => onclick('easy', name)}>Easy</button>
            <button onClick={() => onclick('medium', name)}>Medium</button>
            <button onClick={() => onclick('hard', name)}>Hard</button>
        </div>
    </div>
    );
}
 
export default NewGame;
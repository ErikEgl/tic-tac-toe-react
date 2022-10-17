import Button from "../Button/Button";
import Input from "../Input/Input";
import Squares from "../Squares/Squares";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function GamePage(props) {
  const { gameStarted, setGamePanel, winner, isX, startGame } = useContext(UserContext);
  return (
    <main>
      {!gameStarted ? (
        <>
          <div className="input-container">
            <Input text="First Player" />
            <Input text="Second Player" />
          </div>
          <div>
            <Button text="Start game" />
          </div>
        </>
      ) : (
        <>
          <Squares />
          <div>
            <p>
              {winner ? `Winner: ${winner}` : `Next Player: ${isX ? "✕" : "O"}`}
            </p>

            <button className="start-button" onClick={() => startGame()}>
              Start Game
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default GamePage;

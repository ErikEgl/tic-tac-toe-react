import Button from "../Button/Button";
import Input from "../Input/Input";
import Squares from "../Squares/Squares";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import TimeTravel from "../TimeTravel/TimeTravel";
function GamePage(props) {
  const { gameStarted, winner, isX, startGame, playerData, tie } = useContext(UserContext);

  function getGameComment() {
    if(winner) {
      return (`Winner is ${winner === "✕" ? playerData.firstPlayer : playerData.secondPlayer}: ${winner}`)
    } else if (tie) {
      return ("Tie!")
    } else {
      return (`Next move ${isX ? playerData.firstPlayer : playerData.secondPlayer}: ${isX ? "✕" : "O"}`)
    } 
  }
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
          <div className="game-footer">
            <div className="game-controls">
              <div className="game-info">
                <p className={`${!!winner ? winner : (isX ? "✕ isX" : "O isX")}`}>
                  {getGameComment()}
                </p>
                <span>
                    {playerData.firstPlayer}
                </span>
                <span> - vs - </span>
                <span>
                  {playerData.secondPlayer}
                </span>
              </div>
              <TimeTravel />
            </div>
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

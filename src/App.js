import React from "react";
import GamePage from "./components/GamePage/GamePage";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe-react/game-board">Game board</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe-react/scoreboard">Scoreboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/tic-tac-toe-react/game-board" element={<GamePage />} />
        <Route exact path="/tic-tac-toe-react/game-board" element={<Scoreboard />} />
      </Routes>
    </>
  );
}

export default App;

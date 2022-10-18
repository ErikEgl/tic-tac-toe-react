import React from "react";
import GamePage from "./components/GamePage/GamePage";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { Link, Route, Routes } from "react-router-dom";

let pathArray = window.location.pathname.split( '/' );
const urlPartForGithubPages = "tic-tac-toe-react"

let conditionalUrlPart = pathArray.includes(urlPartForGithubPages) ? urlPartForGithubPages : "";

function App() {
  return (
    <>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to={`${conditionalUrlPart}/game-board`}>Game board</Link>
          </li>
          <li>
            <Link to={`${conditionalUrlPart}/scoreboard`}>Scoreboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path={`${conditionalUrlPart}/game-board`} element={<GamePage />} />
        <Route exact path={`${conditionalUrlPart}/scoreboard`} element={<Scoreboard />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

import { useContext } from "react";
import { UserContext } from "./utils/useContext";
import GamePage from "./components/GamePage/GamePage";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { Link, Route, Routes } from "react-router-dom";
import Confetti from 'react-confetti'
let pathArray = window.location.pathname.split( '/' );
const urlPartForGithubPages = "tic-tac-toe-react"

let conditionalUrlPart = pathArray.includes(urlPartForGithubPages) ? urlPartForGithubPages : "";

function App() {
  const { winner, changeMode, isDarkMode } = useContext(UserContext);
  return (
    <>
    {winner &&  <Confetti/>}
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to={`${conditionalUrlPart}`}>Game board</Link>
          </li>
          <li>
            <Link to={`${conditionalUrlPart}/scoreboard`}>Scoreboard</Link>
          </li>
          <li>
            <button onClick={changeMode}>Change to {isDarkMode ? "light" : "dark" } mode</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path={`${conditionalUrlPart}`} element={<GamePage />} />
        <Route exact path={`${conditionalUrlPart}/scoreboard`} element={<Scoreboard />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

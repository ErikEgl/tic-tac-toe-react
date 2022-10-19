import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)])
  const [step, setStep] = useState(0)
  const [tie, setTie] = useState(false)
  const [playerData, setPlayerData] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });

  useEffect(() => {
    if(!gameHistory[step].includes(null) && !winner){
      setTie(true);
    }
  }, [gameHistory])

  const [isX, setIsX] = useState(true)
  function getWinnerCombination(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

          return squares[a];
        }
      }
    return null;
  }
  const winner = getWinnerCombination(gameHistory[step]);

  function handlePlayerData(event) {
    const { name, value } = event.target;
    setPlayerData((prevPlayerData) => {
      return {
        ...prevPlayerData,
        [name]: value,
      };
    });
  }
  function startGame() {
    setGameStarted(prevState => !prevState)
    if(!gameStarted) {
      setGameHistory([Array(9).fill(null)])
      setStep(0)
      setTie(false);
      setIsX(true)
    }
  }

  function jumpInTime(step) {
    setStep(step);
    setIsX(step % 2 === 0)
    if(step === 9) return setTie(true);
    setTie(false);
};

  useEffect(() => {
    setIsX(prevState => !prevState)
  }, [winner, tie])

  function handleChange(id) {
    const timeInHistory = gameHistory.slice(0, step + 1);
    const current = timeInHistory[step];
    const cells = [...current];
    // if game is won or if user clicks on a selected square
    if (winner || cells[id]) return;
    // put an X or an O in the clicked square
    cells[id] = isX ? "✕" : "O"
    setGameHistory([...timeInHistory, cells])
    setStep(timeInHistory.length);
    setIsX(prevState => !prevState);
  }
  return (
    <UserContext.Provider
      value={{
        handlePlayerData,
        playerData,
        startGame,
        gameStarted,
        isX,
        handleChange,
        gameHistory,
        winner,
        tie, 
        step,
        jumpInTime
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };

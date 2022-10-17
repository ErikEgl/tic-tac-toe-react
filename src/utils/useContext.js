import { useState, createContext } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [gamePanel, setGamePanel] = useState(Array(9).fill(null))
        firstPlayer: "", 
        secondPlayer: "", 
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
  const winner = getWinnerCombination(gamePanel);

  function handlePlayerData(event) {
    const {name, value} = event.target
    setPlayerData(prevPlayerData => {
        return {
            ...prevPlayerData,
            [name]: value
        }

  function handleChange(id) {
    const panelCopy = [...gamePanel];
    // if game is won or if user clicks on a selected square
    if (winner || panelCopy[id]) return;
    // put an X or an O in the clicked square
    panelCopy[id] = isX ? "✕" : "O"
    setGamePanel(panelCopy);
    setIsX(prevState => !prevState);
}

  return (
    <UserContext.Provider
      value={{
        handlePlayerData,
        handleChange,
        gamePanel,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };

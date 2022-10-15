import { useState, createContext } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [playerData, setPlayerData] = useState(
    {
        firstPlayer: "", 
        secondPlayer: "", 
    }
)

  function handlePlayerData(event) {
    const {name, value} = event.target
    setPlayerData(prevPlayerData => {
        return {
            ...prevPlayerData,
            [name]: value
        }
    })
}

  return (
    <UserContext.Provider
      value={{
        handlePlayerData,
        playerData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };

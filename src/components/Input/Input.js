import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function Input({text}) {

    const { handlePlayerData, playerData } = useContext(UserContext);
    return ( 
        <>
            <label>
                {text}
                <input onChange={handlePlayerData} type="text" placeholder="Player name" name={text === "First Player" ? "firstPlayer" : "secondPlayer"} value={text === "First Player" ? playerData.firstPlayer : playerData.secondPlayer}/>
            </label>
        </>
     );
}

export default Input;
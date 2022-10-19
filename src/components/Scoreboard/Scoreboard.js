import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function Scoreboard() {
    const { winnersArray } = useContext(UserContext);
    return ( 
        <div>
            Scoreboard {!winnersArray.length && "is empty"}
            <ol>
                {winnersArray.map((winner, i) => <li key={i}>Winner was {winner} </li> )}
            </ol>
        </div>
     );
}

export default Scoreboard;
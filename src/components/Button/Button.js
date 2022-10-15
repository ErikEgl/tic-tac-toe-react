import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function Button({text}) {
    const { startGame } = useContext(UserContext);
    return ( 
        <button onClick={startGame}>
            {text}
        </button>
     );
}

export default Button;
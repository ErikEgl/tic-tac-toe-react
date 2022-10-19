import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function Squares() {
  const { handleChange, gameHistory, step } = useContext(UserContext);

  return (
    <>
      <div className="squares">
        {gameHistory[step].map((item, i) => {
          return (
            <button key={i} onClick={() => handleChange(i)} className={`square ${item} `}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Squares;

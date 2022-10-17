import { useState, useContext } from "react";
import { UserContext } from "../../utils/useContext";

function Squares() {
  const { isX, handleChange, gamePanel } = useContext(UserContext);

  return (
    <>
      <div className="squares">
        {gamePanel.map((item, i) => {
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

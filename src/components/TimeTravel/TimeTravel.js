import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function TimeTravel() {
  const { jumpInTime, gameHistory, winner, tie } = useContext(UserContext);
  const historyButtons = gameHistory.map((step, i) => {
    const destination = i ? `Go to move #${i}` : "Go to start";
    return (
      <li key={i}>
        <button disabled={winner || tie} onClick={() => jumpInTime(i)}>{destination}</button>
      </li>
    );
  });
  return <ul className="time-travel">{historyButtons}</ul>;
}

export default TimeTravel;

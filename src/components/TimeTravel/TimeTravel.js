import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function TimeTravel() {
  const { jumpInTime, gameHistory } = useContext(UserContext);
  const historyButtons = gameHistory.map((step, i) => {
    const destination = i ? `Go to move #${i}` : "Go to start";
    return (
      <li key={i}>
        <button onClick={() => jumpInTime(i)}>{destination}</button>
      </li>
    );
  });
  return <ul className="time-travel">{historyButtons}</ul>;
}

export default TimeTravel;

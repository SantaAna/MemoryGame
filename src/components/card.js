import { useState } from "react";
export default function Card({
  symbol,
  incrementScore,
  updateHighScore,
  roundNumber,
  incrementRoundNumber,
}) {
  const [clicked, setClicked] = useState(false);
  const [lastRound, setLastRound] = useState(0);
  if (roundNumber > lastRound) {
    setClicked(false);
    setLastRound(roundNumber);
  }
  const onClick = () => {
    if (clicked) {
      updateHighScore();
      incrementRoundNumber();
    } else {
      incrementScore();
      setClicked(true);
    }
  };
  return (
    <div
      className="card-container w-full h-full bg-slate-200 flex flex-row justify-center items-center shadow-current shadow-sm hover:bg-slate-300"
      onClick={onClick}
    >
      <p className="text-lg"> {symbol} </p>
    </div>
  );
}

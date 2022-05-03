import Card from "./card";
import { useState } from "react";

export default function CardContainer({ incrementScore, updateHighScore }) {
  const [roundNumber, updateRoundNumber] = useState(0);
  const incrementRoundNumber = () => updateRoundNumber((n) => n + 1);
  let symbolArray = [...Array(26).keys()];
  symbolArray.shift();
  const cards = symbolArray.map((symbol) => (
    <Card
      symbol={symbol}
      incrementScore={incrementScore}
      updateHighScore={updateHighScore}
      roundNumber={roundNumber}
      incrementRoundNumber={incrementRoundNumber}
      key={symbol}
    />
  ));
  shuffleArray(cards);
  return (
    <div className="flex flex-row justify-center items-start h-3/4 w-full">
      <div className="bg-black grid grid-cols-5 grid-rows-5 h-5/6 w-1/2">
        {cards}
      </div>
    </div>
  );
}

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

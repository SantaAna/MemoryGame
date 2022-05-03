import "./index.css";
import TopBar from "./components/topbar";
import ScoreBar from "./components/scorebar";
import CardContainer from "./components/cardcontainer";
import { useState } from "react";
export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  function incrementScore() {
    setCurrentScore((s) => s + 1);
  }
  function updateHighScore() {
    if (currentScore > highScore) setHighScore((s) => currentScore);
    setCurrentScore(0);
  }
  return (
    <div className="app-container h-screen w-screen">
      <TopBar />;
      <ScoreBar currentScore={currentScore} highScore={highScore} />;
      <CardContainer
        incrementScore={incrementScore}
        updateHighScore={updateHighScore}
      />
    </div>
  );
}

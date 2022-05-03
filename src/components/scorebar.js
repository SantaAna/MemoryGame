export default function ScoreBar({ currentScore, highScore }) {
  return (
    <div className="flex flex-row justify-center items-center h-16">
      <h2 className="text-3xl text-grey-700">
        {" "}
        {`Current Score: ${currentScore} High Score: ${highScore}`}{" "}
      </h2>
    </div>
  );
}

export function Scores({ score, bestScore }) {
  return (
    <div className="text-4xl text-center">
      <p className=" mb-1">Best Score: {bestScore}</p>
      <p>Final Score: {score}</p>
    </div>
  );
}

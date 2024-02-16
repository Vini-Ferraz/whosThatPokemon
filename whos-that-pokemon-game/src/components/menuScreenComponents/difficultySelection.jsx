export function DifficultyOptions({
  setTimer,
  setScore,
  setMenuState,
  setBlurTimerValue,
  setRandomPokemonRange,
}) {
  function pickDiff(arg) {
    if (arg == "easy") {
      setTimer(60);
      setRandomPokemonRange(151);
      setBlurTimerValue(3000);
      setScore(0);
    } else if (arg == "normal") {
      setTimer(4500);
      setRandomPokemonRange(389);
      setBlurTimerValue(4000);
      setScore(0);
    } else if (arg == "hard") {
      setTimer(30);
      setRandomPokemonRange(800);
      setBlurTimerValue(5000);
      setScore(0);
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          pickDiff("easy");
          setMenuState(false);
        }}
        className="bg-gradient-to-b from-sky-500 to-sky-700"
      >
        Easy
      </button>
      <button
        onClick={() => {
          pickDiff("normal");
          setMenuState(false);
        }}
        className="bg-gradient-to-b from-sky-500 to-sky-700 mx-8"
      >
        Normal
      </button>
      <button
        onClick={() => {
          pickDiff("hard");
          setMenuState(false);
        }}
        className="bg-gradient-to-b from-sky-500 to-sky-700"
      >
        Hard
      </button>
    </div>
  );
}

export function DifficultyOptions({
  setTimer,
  setMenuState,
  setBlurTimerValue,
  setRandomPokemonRange,
}) {
  function pickDiff(arg) {
    if (arg == "easy") {
      setTimer(60);
      setRandomPokemonRange(151);
      setBlurTimerValue(3000);
    } else if (arg == "normal") {
      setTimer(45);
      setRandomPokemonRange(389);
      setBlurTimerValue(4000);
    } else if (arg == "hard") {
      setTimer(30);
      setRandomPokemonRange(800);
      setBlurTimerValue(5000);
    }
  }
  return (
    <>
      <button
        onClick={() => {
          pickDiff("easy");
          setMenuState(false);
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          pickDiff("normal");
          setMenuState(false);
        }}
      >
        Normal
      </button>
      <button
        onClick={() => {
          pickDiff("hard");
          setMenuState(false);
        }}
      >
        Hard
      </button>
    </>
  );
}

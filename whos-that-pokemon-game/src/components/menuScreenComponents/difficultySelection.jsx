export function DifficultyOptions({ setTimer, setMenuState }) {
  function pickDiff(arg) {
    if (arg == "easy") {
      setTimer(60);
    } else if (arg == "normal") {
      setTimer(45);
    } else if (arg == "hard") {
      setTimer(30);
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

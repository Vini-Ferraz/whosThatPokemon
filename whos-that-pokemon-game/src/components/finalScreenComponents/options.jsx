export function Options({ setMenuState }) {
  return (
    <>
      <button
        onClick={() => {
          setMenuState(true);
        }}
      >
        Play Again
      </button>
    </>
  );
}

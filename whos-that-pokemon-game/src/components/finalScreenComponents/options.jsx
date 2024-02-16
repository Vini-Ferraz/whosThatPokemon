export function Options({ setMenuState }) {
  return (
    <>
      <button onClick={() => setMenuState(true)}>Main Menu</button>
      <button>Play Again</button>
    </>
  );
}

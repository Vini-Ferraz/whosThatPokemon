export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  answearState,
  setAnswearState,
}) {
  function checkAnswear() {
    if (answear === pokemonName) {
      setAnswearState(true);
    } else {
      setAnswearState(false);
    }
    console.log(answearState);
  }
  return (
    <>
      <input
        type="text"
        className="border-solid	border-2 border-red-600 rounded bg-cyan-700"
        value={answear}
        onChange={(e) => setAnswear(e.target.value)}
      />
      <button>Skip</button>
      <button onClick={checkAnswear}>Guess</button>
    </>
  );
}

export function UserOptions({
  answear,
  setAnswear,
  pokemonName,
  answearState,
  setAnswearState,
  setSkipState,
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
      <button onClick={() => setSkipState(true)}>Skip</button>
      <button onClick={checkAnswear}>Guess</button>
    </>
  );
}

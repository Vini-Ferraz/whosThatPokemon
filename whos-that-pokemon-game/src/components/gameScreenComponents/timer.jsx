import { useEffect } from "react";

export function Timer({ timer, setTimer }) {
  useEffect(() => {
    function reverseTimer() {
      setTimer((prevTimer) => prevTimer - 1);
    }
    const timerId = setTimeout(reverseTimer, 1000);
    return () => clearTimeout(timerId);
  }, [timer]);

  return <h1>{timer}</h1>;
}

import { useEffect, useState } from "react";

export function Timer() {
  let timerValue = 113;
  const [timer, setTimer] = useState(timerValue);

  useEffect(() => {
    function reverseTimer() {
      setTimer((prevTimer) => prevTimer - 1);
    }
    const timerId = setTimeout(reverseTimer, 1000);
    return () => clearTimeout(timerId);
  }, [timer]);

  return <h1>{timer}</h1>;
}

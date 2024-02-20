//A React component to display and manage the game timer.
//It decrements the timer value every second and formats it.

import { useEffect } from "react";

export function Timer({ timer, setTimer }) {
  useEffect(() => {
    //Function to decrement the timer value.
    function reverseTimer() {
      setTimer((prevTimer) => prevTimer - 1);
    }
    const timerId = setTimeout(reverseTimer, 1000);
    return () => clearTimeout(timerId);
  }, [timer]);
  //Conditional rendering based on the timer value.
  if (timer < 10) {
    return <h1 className="text-4xl text-red-800">00:0{timer}</h1>;
  } else {
    return <h1 className="text-4xl">00:{timer}</h1>;
  }
}

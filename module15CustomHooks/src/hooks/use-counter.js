import { useState, useEffect } from "react";

const  useCounter = (val) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + val);
    }, 1000);

    return () => clearInterval(interval);
  }, [val]);

  return counter;
};

export default useCounter;
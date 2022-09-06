import React, { useState } from 'react';

const Counter = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(-1);

  const startTimer = () => {
    setIntervalId(
      setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTime(0);
    setIntervalId(-1);
  };

  return (
    <>
      <p>{time}</p>
      <button
        name="start"
        onClick={() => startTimer()}
        disabled={intervalId !== -1}
      >
        Start
      </button>
      <button name="stop" onClick={() => stopTimer()}>
        Stop
      </button>
    </>
  );
};
export default Counter;

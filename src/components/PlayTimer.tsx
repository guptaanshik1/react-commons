import useTimer from "../hooks/common/useTimer";

const PlayTimer = () => {
  const { start, time, pause, reset, stop } = useTimer(1000);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <p>{time}</p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default PlayTimer;

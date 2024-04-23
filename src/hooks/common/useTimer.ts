import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (interval: number) => {
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(0);

  const start = useCallback(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, interval);
  }, [time]);

  const pause = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const stop = useCallback(() => {
    pause();
    setTime(0);
  }, []);

  const reset = useCallback(() => {
    stop();
  }, [stop]);

  useEffect(() => {
    return () => clearInterval(timerRef.current!);
  }, []);

  return { start, stop, pause, reset, time };
};

export default useTimer;

import { useCallback, useEffect, useRef } from "react";

const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<number>(0);

  // using callback ref in order to make sure callback remains same between renders even if the callback changes

  useEffect(() => {
    // everytime callback changes callbackRef is getting updated
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay); // calling the function to be executed after delay
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return () => clear();
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { set, clear, reset };
};

export default useTimeout;

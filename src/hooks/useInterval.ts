import { useEffect, useRef } from "react";

type Delay = number | null;
type TimerHandler<T> = (...args: T[]) => void;

const useInterval = <T>(callback: TimerHandler<T>, delay: Delay) => {
  const savedCallbackRef = useRef<TimerHandler<T>>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: T[]) => savedCallbackRef.current!(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

export default useInterval;

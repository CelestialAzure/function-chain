import { useCallback, useState, useEffect } from "react";

const useDebounce = (callback: Function, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return useCallback(
    (args: any) => {
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => callback(args), delay);
      setTimeoutId(newTimeoutId);
    },
    [callback, delay, timeoutId]
  );
};

export default useDebounce;

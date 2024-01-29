import { useState, useEffect } from "react";

const useDebounce = (value: any, delay: number) => {
  const [debouncevalue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    clearTimeout(timer);
  }, [value, delay]);

  return debouncevalue;
};

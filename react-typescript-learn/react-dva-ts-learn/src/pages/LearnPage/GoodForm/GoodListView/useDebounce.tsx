import { useState, useEffect } from 'react';

function useDebounce(value: any, delay = 300) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handle = window.setTimeout(() => {
      setDebounceValue(value);
      return () => {
        clearTimeout(handle);
      };
    }, delay);
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
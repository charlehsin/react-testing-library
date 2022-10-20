import { useEffect, useState } from 'react';

export const useFetch = (url: string, initialValue: any) => {
  const [result, setResult] = useState(initialValue);

  // This useEffect will only be called initially.
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json));
  }, []);

  return result;
};

export const useDynamicTransition = (delay: number, length: number) => {
  const [index, setIndex] = useState(0);

  // This useEffect will only be called initially and when delay state is changed.
  useEffect(() => {
    const internal = setInterval(() => {
      setIndex(storedIndex => {
        return (storedIndex + 1) % length;
      }
      )
    }, delay);

    // Codes to run when this is unmounted and when useEffect is called again.
    return () => clearInterval(internal);
  }, [delay]);

  return index;
};
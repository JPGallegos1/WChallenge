import { useRef, useState } from "react";

export function useFetch (cb, ...options) {
  const isMounted = useRef();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  return {
    response,
    loading,
    isMounted,
    reset: () => setResponse(),
    fetch: async (reload = false) => {
      try {
        if (!response || reload) setLoading(true);
        const data = await cb(...options);
        if (isMounted.current) {
          if (data) setResponse(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    error,
    setLoading
  };
}

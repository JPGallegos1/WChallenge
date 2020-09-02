import { useRef, useState } from "react";

export function useFetch (url) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef();

  return {
    loading,
    response,
    getData: async (reload = false) => {
      try {
        // allows the component to be mounted
        isMounted.current = true;

        // get data
        setLoading(true); // to see Skeleton please use the Network tab in DevTools
        const res = await fetch(url);

        // validation after get a response
        if (!res || reload) setLoading(true);
        const data = await res.json();

        // just if the component is mounted we will save the remote data
        if (isMounted.current) {
          if (data) setResponse(data);
        };
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
}

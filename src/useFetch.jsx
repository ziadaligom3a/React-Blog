import { useEffect, useState } from "react";

const useFetch = (url) => {
  const AbortCont = new AbortController();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch(url, { signal: AbortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the Data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setError(err.message);
        setIsPending(false);
      });

    return () => AbortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

import { useEffect, useState } from "react";
import axios from "axios";

const resource = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

export function useAsyncResource(query) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!query) return setResult([]);
    // let cancel = false;
    const source = axios.CancelToken.source();

    resource
      .get(`/type/${query}`, {
        cancelToken: source.token
      })
      .then(({ data }) => {
        // if (!cancel) setResult(data);
        setResult(data);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(error.message);
        }
      });

    return () => {
      // cancel = true;
      source.cancel("Operation canceled.");
    };
  }, [query]);

  return result;
}

export function useDebounce(query, delay) {
  const [value, setValue] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setValue(query), delay);

    return () => clearTimeout(timer);
  }, [delay, query]);

  return value;
}

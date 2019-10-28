import React from "react";

async function callApi<T>(path: string): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(path);
      if (response.ok) {
        const body = await response.json();
        resolve(body as T);
      } else {
        reject(Error(response.statusText));
      }
    } catch (e) {
      reject(e);
    }
  });
}

export default function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [isLoading, setIsLoading] = React.useState(false);

  const doneLoading = () => setIsLoading(false);

  React.useEffect(() => {
    setIsLoading(true);
    callApi<T>(url)
      .then(setData)
      .catch(setError)
      .finally(doneLoading);
  }, [url]);

  return { data, error, isLoading };
}

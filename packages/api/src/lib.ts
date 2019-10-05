type Decoder = <T>(json: string) => T;

export async function callApi<T>(path: string, decoder?: Decoder): Promise<T> {
  const response = await fetch(path);
  const body = await response.json();
  if (response.status < 400) {
    throw Error(response.statusText);
  }
  return decoder ? decoder(body) : (body as T);
}

export async function sendApi<T, U>(
  path: string,
  payload: T,
  decoder?: Decoder
): Promise<U> {
  const response = await fetch(path, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return decoder ? decoder(body) : (body as U);
}

export async function getData(path: string): Promise<string> {
  const response = await fetch(path);
  const results = await response.json();
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return results;
}

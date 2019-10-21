type Decoder = <T>(json: string) => T;

export async function callApi<T>(path: string, decoder?: Decoder): Promise<T> {
  const response = await fetch(path);
  const body = await response.json();
  if (response.status > 399) {
    throw Error(response.statusText);
  }
  return decoder ? decoder(body) : (body as T);
}

type PayloadSender = <T>(payload: T) => Promise<Response>;
const sendJSON = (method: string, path: string): PayloadSender => payload => {
  return fetch(path, {
    body: JSON.stringify(payload),
    method,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

async function sendAPI<T, U>(
  sender: PayloadSender,
  payload: T,
  decoder?: Decoder
): Promise<U> {
  const response = await sender(payload);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return decoder ? decoder(body) : (body as U);
}

export async function postJSON<T, U>(
  path: string,
  payload: T,
  decoder?: Decoder
): Promise<U> {
  const sender = sendJSON("POST", path);
  return sendAPI(sender, payload, decoder);
}

export async function putJSON<T, U>(
  path: string,
  payload: T,
  decoder?: Decoder
): Promise<U> {
  const sender = sendJSON("PUT", path);
  return sendAPI(sender, payload, decoder);
}

export async function deleteData(path: string): Promise<boolean> {
  const response = await fetch(path, { method: "DELETE" });
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return true;
}

export async function getData(path: string): Promise<string> {
  const response = await fetch(path);
  const results = await response.json();
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return results;
}

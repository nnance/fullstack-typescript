import { callApi, getData } from "./lib";

export * from "./user";

export function decode<T>(json: string) {
  return JSON.parse(json) as T;
}

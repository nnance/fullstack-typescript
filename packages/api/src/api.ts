export * from "./user";
export * from "./orders";
export * from "./lib";

export function decode<T>(json: string) {
  return JSON.parse(json) as T;
}

import { callApi, sendApi } from "./lib";

export const testUsers: IUser[] = [
  {
    name: "Superman",
    email: "superman@gmail.com",
    password: "Bro"
  },
  {
    name: "Test User",
    email: "testuser@gmail.com",
    password: "test"
  }
];

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export const getUsers = () => callApi<IUser[]>("/users");
export const login = (req: ILoginRequest) =>
  sendApi<ILoginRequest, IUser>("/users/login", req);

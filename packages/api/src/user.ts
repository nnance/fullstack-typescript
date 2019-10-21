import { callApi, postJSON, putJSON, deleteData } from "./lib";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

var id = 0;

export function newUser(name: string, email: string, password: string): IUser {
  const nextId = id++;
  return { id: nextId, name, email, password };
}

export const testUsers: IUser[] = [
  newUser("Superman", "superman@gmail.com", "Bro"),
  newUser("Test User", "testuser@gmail.com", "test")
];

export const getUsers = () => callApi<IUser[]>("/users");

export const saveUser = (user: IUser) =>
  user.id
    ? putJSON<IUser, IUser>(`/users/${user.id}`, user)
    : postJSON<IUser, IUser>(`/users`, user);

export const deleteUser = (user: IUser) => deleteData(`/users/${user.id}`);

export const login = (req: ILoginRequest) =>
  postJSON<ILoginRequest, IUser>("/users/login", req);

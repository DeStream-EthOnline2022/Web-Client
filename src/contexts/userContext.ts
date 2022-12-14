import { createContext } from "react";

export type UserProps = {
  address: string,
  isMember: boolean,
}

export interface UserContextInterface {
  user: UserProps,
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

export const UserContext = createContext<UserContextInterface | null>(null);

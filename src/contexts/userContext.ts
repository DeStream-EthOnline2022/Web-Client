import { createContext } from "react";

export type UserProps = {
    address: string,
}

export interface UserContextInterface {
    user: UserProps,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContextInterface | null>(null);
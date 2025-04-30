import { createContext, useState } from "react";

export interface IUserContext {
  // Aqui crio a tipagem de dado a ser oferecida pelo contexto
  name: string;
  surname: string;
}

export const UserContext = createContext<IUserContext | undefined>(undefined); // Aqui defino o que será o contexto, nesse caso, informações de usuário.

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUserContext>({
    name: "João",
    surname: "castro",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

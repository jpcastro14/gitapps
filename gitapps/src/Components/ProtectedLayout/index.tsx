import { ReactElement } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Login from "../LoginComponent/index";


export const ProtectedLayout = ({ children }: { children: ReactElement }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <Login />;
  }

  return children;
};

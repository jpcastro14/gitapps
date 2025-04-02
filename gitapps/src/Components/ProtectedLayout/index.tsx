import { ReactElement } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: ReactElement }) => {
  const auth = useAuth();

  if (!auth.email) {
    return children;
  }

  return children;
};

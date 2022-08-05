import { useContext, createContext, useState } from "react";
import { signCollaborator } from "../../services/collaborator/sign";
import useToken from "../../store/local_token";
import useRules from "../../store/local_acess";

import decode from "jwt-decode";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const guard_token = useToken();
  const guard_acess = useRules();

  const sign = async function (CPF) {
    const { token } = await signCollaborator(CPF);
    if (token) {
      const { access_type } = decode(token);
      alert(access_type);
      setAuth(true);
      guard_token.SET(token);
      guard_acess.SET(access_type);
    }
  };

  const loggof = function () {
    guard_token.LOGGOF();
    guard_acess.LOGGOF();
  };

  return (
    <AuthContext.Provider value={{ sign, auth, loggof }}>
      {children}
    </AuthContext.Provider>
  );
}

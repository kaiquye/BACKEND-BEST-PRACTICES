import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../store/local_token";
import useRules from "../../store/local_acess";
import decode from "jwt-decode";
import axios from "axios";

import { signCollaborator as SignCollaborator } from "../../services/collaborator/sign";
import { signAdmin as SignAdmin } from "../../services/admin/sign";
import { signCaptain as SignCaptain } from "../../services/captain/sign";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const Navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const guard_token = useToken();
  const guard_acess = useRules();

  useEffect(() => {
    if (auth !== true && guard_token.GET() !== undefined) {
      async function authenticate() {
        const response = await UserIsAuthenticated();
        setAuth(response);
      }
      authenticate();
    } else {
      Navigate("/");
    }
  }, []);

  const UserIsAuthenticated = async function () {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${guard_token.GET()}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3030/isAuthenticated",
        {
          ...config,
        }
      );
      return true;
    } catch (e) {
      alert("is not autenticated");
      console.log(e);
    }
  };

  const signCollaborator = async function (CPF) {
    const { token } = await SignCollaborator(CPF);
    if (token) {
      const { access_type } = decode(token);
      setAuth(true);
      guard_token.SET(token);
      guard_acess.SET(access_type);
      return true;
    }
    return false;
  };

  const signAdmin = async function (CPF) {
    const { token } = await SignAdmin(CPF);
    if (token) {
      const { access_type } = decode(token);
      alert(access_type);
      setAuth(true);
      guard_token.SET(token);
      guard_acess.SET(access_type);
      return true;
    }
    return false;
  };

  const signCaptain = async function (CPF) {
    const { token } = await SignCaptain(CPF);
    if (token) {
      const { access_type } = decode(token);
      alert(access_type);
      setAuth(true);
      guard_token.SET(token);
      guard_acess.SET(access_type);
      return true;
    }
    return false;
  };

  const loggof = function () {
    guard_token.LOGGOF();
    guard_acess.LOGGOF();
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        loggof,
        signCollaborator,
        signAdmin,
        signCaptain,
        UserIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

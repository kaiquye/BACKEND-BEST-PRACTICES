import { useContext } from "react";
import { AuthContext } from "../context/auth";
import useRules from "../store/local_acess";
import Sign from "../pages/login";

export function AuthRoutes({ Children, acess }) {
  const { auth } = useContext(AuthContext);
  const rules = useRules().GET();
  if (auth !== false && rules === acess) {
    return <Children />;
  }
  return <Sign />;
}

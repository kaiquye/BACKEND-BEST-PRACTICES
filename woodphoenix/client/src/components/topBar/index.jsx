import { NavLink, Link } from "react-router-dom";
import style from "./styles/topBar.module.css";
import useRules from "../../store/local_acess";

import { useContext } from "react";
import { AuthContext } from "../../context/auth";
export default function TopBar() {
  const { auht } = useContext(AuthContext);
  const role = useRules().GET();
  return (
    <div className={style.topBar}>
      <div className={style.logo}>WOODPHOENIX</div>
      <div className={style.links}>
        {role === "COLLABORATOR" ? (
          <Link to={"/random"}>ICON Random Messages </Link>
        ) : (
          <></>
        )}
        <Link to={"/team"}>ICON Team message </Link>
        {role === "CAPTAIN" ? (
          <Link to={"/message"}>ICON New message </Link>
        ) : (
          <></>
        )}
        {role === "ADMIN" ? (
          <Link to={"/admin"}> ICON New Captains </Link>
        ) : (
          <></>
        )}
        <label className={style.acess}> last acess: {role}</label>
      </div>
    </div>
  );
}

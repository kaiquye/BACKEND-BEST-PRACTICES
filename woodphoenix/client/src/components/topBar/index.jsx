import { NavLink, Link } from "react-router-dom";
import style from "./styles/topBar.module.css";
export default function TopBar() {
  return (
    <div className={style.topBar}>
      <div className={style.logo}>WOODPHOENIX</div>
      <div className={style.links}>
        <Link to={"/random"}>ICON Random Messages </Link>
        <Link to={"/team"}>ICON Team message </Link>
        <Link to={"/admin"}> ICON Settings </Link>
      </div>
    </div>
  );
}

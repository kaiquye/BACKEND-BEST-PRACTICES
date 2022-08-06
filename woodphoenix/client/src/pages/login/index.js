import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/index";

import css from "./styles/css.module.css";
import RadioButtonsGroup from "../../components/radio";

export default function Sign() {
  const navigate = useNavigate();
  const { signCollaborator, signAdmin, signCaptain } = useContext(AuthContext);
  const [cpf, setCpf] = useState("");
  const [role, setRole] = useState();

  const login = async function (e) {
    e.preventDefault();
    if (!cpf) {
      return alert("cpf invalido");
    }

    if (role === "COLLABORADOR") {
      alert("aqui...");
      const auth = await signCollaborator(cpf);
      if (auth) {
        navigate("/home");
      }
    }

    if (role === "ADMIN") {
      const auth = signAdmin(cpf);
      if (auth) {
        navigate("/home");
      }
    }

    if (role === "CAPTAIN") {
      const auth = signCaptain(cpf);
      if (auth) {
        navigate("/home");
      }
    }
  };

  return (
    <section className={css.body}>
      <div className={css.screnn}>
        <form className={css.form} onSubmit={async (e) => await login(e)}>
          <label>Informe seu CPF :</label>
          <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <RadioButtonsGroup setRole={setRole} />
          <button>ENTRAR</button>
        </form>
        <Link to={"/register"}> não tenho conta </Link>
      </div>
      <div className={css.scrennBackGround}></div>
    </section>
  );
}

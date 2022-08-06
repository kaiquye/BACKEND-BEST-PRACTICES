import css from "./styles/css.module.css";
import RegisterCollaborator from "../../services/collaborator/register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterCollaborator_() {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [team, setTeam] = useState();
  const navigate = useNavigate();

  async function Register(e) {
    alert("tested 1 ");
    e.preventDefault();
    const data = await RegisterCollaborator(name, cpf, team);
    if (data) {
      return navigate("/home");
    }
  }

  return (
    <section className={css.screnn}>
      <h1>New collaborator</h1>
      <div className={css.body}>
        <form onSubmit={(e) => Register(e)} className={css.form}>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder={"Name"}
          />
          <input onChange={(e) => setCpf(e.target.value)} placeholder={"CPF"} />
          <input
            onChange={(e) => setTeam(e.target.value)}
            placeholder={"Team"}
          />
          <button>register</button>
        </form>
      </div>
    </section>
  );
}

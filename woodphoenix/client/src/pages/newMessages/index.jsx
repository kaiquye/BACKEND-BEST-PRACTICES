import { useEffect, useState } from "react";
import css from "./styles/css.module.css";
import { NewMessage as NewMessage_ } from "../../services/message/newMessage";
import { Link } from "react-router-dom";

export default function NewMessage() {
  const [newMessage, setNewMessage] = useState();

  async function registerMessage(event) {
    event.preventDefault();
    if (newMessage) {
      await NewMessage_(newMessage);
    }
  }

  return (
    <section className={css.body}>
      <h1>Register new message for your team.</h1>
      <form onSubmit={(e) => registerMessage(e)}>
        <input onChange={(e) => setNewMessage(e.target.value)} />
        <button>Cadastrar</button>
      </form>
      <Link to={"/team/message"} className={css.button_message}>
        Mensagens da equipe
      </Link>
    </section>
  );
}

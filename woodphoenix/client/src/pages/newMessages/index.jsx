import { useEffect, useState } from "react";
import css from "./styles/css.module.css";

export default function NewMessage() {
  const [newMessage, setNewMessage] = useState();

  async function registerMessage(event) {
    event.preventDefault();
    await NewMessage(newMessage);
  }

  return (
    <section className={css.body}>
      <h1>Register new message for your team.</h1>
      <form onSubmit={(e) => registerMessage(e)}>
        <input onChange={(e) => setNewMessage(e.target.value)} />
        <button>Cadastrar</button>
      </form>
    </section>
  );
}

import { useEffect, useState } from "react";
import { FindMessageTeam } from "../../services/message/findMessageTeam";
import css from "./styles/css.module.css";
import { NewMessage } from "../../services/message/newMessage";

export default function TeamMessage() {
  const [messages, setMessages] = useState([]);
  const [team, setTeam] = useState();

  useEffect(() => {
    alert("aquii");
    async function find() {
      const data = await FindMessageTeam();
      setMessages(data.item);
      setTeam(data.item[0].team);
    }
    find();
  }, []);

  return (
    <section className={css.body}>
      <div className={css.title}>
        <h1>TEAM : {team}</h1>
      </div>
      <section className={css.chat}>
        {messages &&
          messages.map((data) => (
            <div className={css.chat_2}>
              <label>message : {data.message}</label>
            </div>
          ))}
      </section>
    </section>
  );
}

import { useEffect, useState } from "react";
import { FindMessageTeam } from "../../services/message/findMessageTeam";
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
    <section>
      <div>
        <h1>TEAM : {team}</h1>
      </div>
      <h1>Team Messages</h1>
      {messages &&
        messages.map((data) => (
          <div>
            <label>message : {data.message}</label>
          </div>
        ))}
    </section>
  );
}

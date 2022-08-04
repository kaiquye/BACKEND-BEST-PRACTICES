import css from "./styles/home.module.css";
import { RandomMessage } from "../../services/message/randomMessage";
import { useState } from "react";

export default function Home() {
  const generete = async function () {
    const { randowMessage } = await RandomMessage();
    setRandomMessage(randowMessage);
  };

  const [randomMessage, setRandomMessage] = useState(null);

  return (
    <section className={css.allScreen}>
      <div className={css.body}>
        <label className={css.title}>Generete a new ramdom message</label>
        <div className={css.ramdomMessage}>
          <label>
            {randomMessage !== null
              ? randomMessage
              : "Click in genrete to new ramdom message"}
          </label>
        </div>
        <div>
          <button
            className={css.buttonGenerete}
            onClick={async () => {
              await generete();
            }}
          >
            GENERETE NEW MESSAGE
          </button>
        </div>
      </div>
      <div className={css.backImage}></div>
    </section>
  );
}

import css from "./styles/home.module.css";
import { RandomMessage } from "../../services/message/randomMessage";
import { useState } from "react";
import ButtonGenereteMessage from "../../components/buttonGenereteMessage";

export default function Home() {
  const generete = async function () {
    setInLoading(true);
    const { randowMessage } = await RandomMessage();
    setRandomMessage(randowMessage);
    setInLoading(false);
  };

  const [randomMessage, setRandomMessage] = useState(null);
  const [inLoading, setInLoading] = useState(false);

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
          <ButtonGenereteMessage
            generete={generete}
            className={css.buttonGenerete}
            inLoading={inLoading}
          >
            Generete new message
          </ButtonGenereteMessage>
        </div>
      </div>
      <div className={css.backImage}></div>
    </section>
  );
}

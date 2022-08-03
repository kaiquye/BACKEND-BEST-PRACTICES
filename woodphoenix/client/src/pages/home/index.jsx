import css from "./styles/home.module.css";

export default function Home() {
  return (
    <section className={css.allScreen}>
      <form>
        <div>
          <label>CPF</label>
          <input placeholder={"e-mail"} />
        </div>
        <button>Entrar</button>
      </form>
    </section>
  );
}

import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/index";

export default function Sign() {
  const { sign } = useContext(AuthContext);
  const [cpf, setCpf] = useState("");

  const login = function (e) {
    e.preventDefault();
    if (!cpf) {
      return alert("cpf invalido");
    }
    sign(cpf);
  };

  return (
    <section>
      <div>
        <form onSubmit={(e) => login(e)}>
          <div>
            <label>Informe seu CPF :</label>
            <input value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <div>
              <button>ENTRAR</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

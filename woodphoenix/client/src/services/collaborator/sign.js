import API_CONNECTION from "../api";

export async function signCollaborator(cpf) {
  try {
    if (!cpf) {
      return alert("cpf é obrigatorio.");
    }

    const body = { cpf };

    const { data } = await API_CONNECTION(
      "/user/collaborator/sign",
      body
    ).POST();

    return data._value;
  } catch (error) {
    const { response } = error;

    if (response.data.error === "cpf and invalid")
      return alert("cpf não é valido");

    return alert("Error interno");
  }
}

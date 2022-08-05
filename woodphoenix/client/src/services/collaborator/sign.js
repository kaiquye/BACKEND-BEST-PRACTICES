import API_CONNECTION from "../api";

export async function signCollaborator(cpf) {
  const data = {
    body: {
      cpf,
    },
  };
  try {
    const { data } = await API_CONNECTION(
      "/user/collaborator/sign",
      data
    ).POST();
    return data._value;
  } catch (error) {
    console.log(error);
    const { response } = error;
    if (response.data.error === "you can make only 4 random messages")
      return alert("você so pode gerar 4 mensagens aleatorias!");

    return alert("Error interno");
  }
}

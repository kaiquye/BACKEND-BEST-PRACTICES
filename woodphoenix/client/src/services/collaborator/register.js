import API_CONNECTION from "../api";

export default async function RegisterCollaborator(name, cpf, team) {
  alert("tested 2");
  try {
    if (!cpf || !team || !name) {
      alert("preencha todos os campos");
    }

    const { data } = await API_CONNECTION("user/collaborator/", {
      cpf,
      team,
      name,
    }).POST();

    console.log(data);
    if (data.status === 201) {
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

import API_CONNECTION from "../api";
import useToken from "../../store/local_token";

export async function RandomMessage() {
  const guard_token = useToken();
  try {
    const config = {
      headers: {
        authorization: `Bearer ${guard_token.GET()}`,
      },
    };
    const { data } = await API_CONNECTION(
      "/message/randow",
      null,
      config
    ).GET();
    return data._value;
  } catch (error) {
    const { response } = error;
    if (response.data.error === "you can make only 4 random messages")
      return alert("você so pode gerar 4 mensagens aleatorias!");

    return alert("Error interno");
  }
}

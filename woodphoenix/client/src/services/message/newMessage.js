import API_CONNECTION from "../api";
import useToken from "../../store/local_token";

export async function NewMessage(message) {
  const guard_token = useToken();

  try {
    const config = {
      headers: {
        authorization: `Bearer ${guard_token.GET()}`,
      },
    };

    const body = {
      message: message,
    };

    const { data } = await API_CONNECTION("/message", body, config).POST();

    console.log(data);

    return data._value;
  } catch (error) {
    const { response } = error;
    console.log(response);
    return alert("Error interno");
  }
}

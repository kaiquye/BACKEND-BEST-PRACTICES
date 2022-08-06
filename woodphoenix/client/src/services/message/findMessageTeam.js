import API_CONNECTION from "../api";
import useToken from "../../store/local_token";

export async function FindMessageTeam() {
  const guard_token = useToken();

  alert("aquii");

  try {
    const config = {
      headers: {
        authorization: `Bearer ${guard_token.GET()}`,
      },
    };

    const { data } = await API_CONNECTION(
      "/message/find/messages/team",
      null,
      config
    ).GET();

    return data._value;
  } catch (error) {
    const { response } = error;
    console.log(response);
    return alert("Error interno");
  }
}

import API_CONNECTION from "../api";

export async function RandomMessage() {
  try {
    const config = {
      headers: {
        authorization:
          "teste eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsIm5hbWUiOiJhc2Rhc2FzZGFzZGFzZGR0ZXN0ZSIsImFjY2Vzc190eXBlIjoiQ09MTEFCT1JBVE9SIiwidGVhbSI6InRlc3RlMSIsImNyZWF0ZUF0IjoiMjAyMi0wNy0zMFQyMTo0MjozOC44NzZaIiwiaWF0IjoxNjU5NDcxNTg2fQ.uqpBGTvQle_XrGhDhqoaTr-uiUkKKjJe00b1y_NrEpc",
      },
    };
    const { data } = await API_CONNECTION("/message/randow", config).GET();
    return data._value;
  } catch (error) {
    const { response } = error;
    if (response.data.error === "you can make only 4 random messages")
      return alert("você so pode gerar 4 mensagens aleatorias!");

    return alert("Error interno");
  }
}

const NAME_TOKEN = "@TOKEN_WOODPHOENIX";

export default function useToken() {
  return {
    GET: function () {
      return localStorage.getItem(NAME_TOKEN);
    },
    SET: function (item) {
      localStorage.setItem(NAME_TOKEN, item);
    },
    LOGGOF: function () {
      return localStorage.removeItem(NAME_TOKEN);
    },
  };
}

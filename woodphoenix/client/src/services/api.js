import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3030/",
});

function API_CONNECTION(url, config, body = undefined) {
  return {
    async POST() {
      return API.get(url, config);
    },
    async GET() {
      return API.get(url, config, body);
    },
  };
}

export default API_CONNECTION;

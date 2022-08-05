import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3030/",
});

function API_CONNECTION(url, data = undefined, config = undefined) {
  return {
    async POST() {
      console.log(url, data, config);
      return API.post(url, data, config);
    },
    async GET() {
      return API.get(url, config);
    },
  };
}

export default API_CONNECTION;

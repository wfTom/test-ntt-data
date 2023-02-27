import axios from "axios";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/omdbapi/",
});

export default api;

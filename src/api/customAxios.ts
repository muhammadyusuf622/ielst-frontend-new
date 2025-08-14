import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://97c2e109669b.ngrok-free.app/api",
  withCredentials: true,
});

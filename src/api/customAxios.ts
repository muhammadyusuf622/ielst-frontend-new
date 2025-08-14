import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://478858f80184.ngrok-free.app/api",
  withCredentials: true,
});

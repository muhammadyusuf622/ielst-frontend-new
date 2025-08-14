import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://142e99f49168.ngrok-free.app/api",
  withCredentials: true,
});

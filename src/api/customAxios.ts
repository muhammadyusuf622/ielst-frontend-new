import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://897ccfdcaa85.ngrok-free.app/api",
  withCredentials: true,
});

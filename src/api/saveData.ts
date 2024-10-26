import axios from "axios";

export const saveData = (text: string) =>
  axios.post(import.meta.env.VITE_BACKEND_URL, { text });

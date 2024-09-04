import axios from "axios";

export const saveData = (text: string) =>
  axios.post("http://localhost:8000", { text });

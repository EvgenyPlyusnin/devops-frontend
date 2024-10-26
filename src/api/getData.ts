import axios from "axios";

export const getData = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);

  return axios.get(import.meta.env.VITE_BACKEND_URL);
};

import axios from "axios";

export const fetchAllBoards = () => {
  return axios.get("./api");
};

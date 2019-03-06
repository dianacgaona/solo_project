import axios from "axios";

export const fetchOneUser = id => {
  return axios.get(`/api/users/${id}`);
};

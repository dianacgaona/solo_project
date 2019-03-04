import axios from "axios";

export const fetchAllPins = () => {
  return axios.get("/api/pins");
};

export const fetchOnePin = id => {
  return axios.get(`/api/pins/${id}`);
};

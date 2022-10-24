import axios from "axios";

const API_URL = "http://localhost:8082/api/register/";

// const register = (username, email, password) => {
const save = (data) => {
  console.log(data);
  return axios.post(API_URL + "save",
    data
  );
};



export default {
  save
};

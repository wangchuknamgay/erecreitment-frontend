import axios from "axios";

const API_URL = "http://localhost:8082/api/register/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};



export default {
  register
};

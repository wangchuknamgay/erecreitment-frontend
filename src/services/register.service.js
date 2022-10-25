import axios from "axios";

// const API_URL = "http://localhost:8082/api/register/";
const API_URL = "http://localhost:8082/api/auth/";

// const register = (username, email, password) => {
const save = (data) => {
  console.log(data);
  return axios.post(API_URL + "signup",
    data
  );
};


export default {
  save
};

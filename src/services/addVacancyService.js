import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8082/api/register/";
const API_URL = "http://localhost:8082/api/addVacancy/";

// const register = (username, email, password) => {
const save = (data) => {
  console.log(data);
  return axios.post(API_URL + "save",data, { headers: authHeader() }
  );
};


export default {
  save
};

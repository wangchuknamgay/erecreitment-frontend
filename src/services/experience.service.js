import axios from "axios";
import authHeader from "./auth-header";

const API_URL ="http://localhost:8082/api/experience/";
const API_GET_ALL = "http://localhost:8082/api/experience/"
// const API_URL= process.env.REACT_APP_API_URL; 

const save=(data)=>{
    return axios.post(API_URL + "saveDate", data,{ headers: authHeader() });
}


const getAll = () => {
    return axios.get(API_GET_ALL +"getAllExperience",
        { headers: authHeader() });

};

export default {
    save,
    getAll
}

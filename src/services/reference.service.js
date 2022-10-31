import axios from "axios";
import authHeader from "./auth-header";

const API_URL ="http://localhost:8082/api/reference/";
// const API_URL= process.env.REACT_APP_API_URL; 

const save=(data)=>{
    return axios.post(API_URL + "saveReference", data,{ headers: authHeader() });
}


const getAllExperienceByUserId = () => {
    return axios.get(API_URL +"getAllExperienceByUserId",
        { headers: authHeader() });

};

export default {
    save,
    getAllExperienceByUserId
}
import axios from "axios";
import authHeader from "./auth-header";

const API_URL ="http://localhost:8082/api/classX/";
// const API_URL= process.env.REACT_APP_API_URL; 

const saveData=(data)=>{
    return axios.post(API_URL + "saveClassX", data,{ headers: authHeader() });
}

const getAllClassXDetailsByUserId = () => {
    return axios.get(API_URL +"getAllClassXDetailsByUserId",
        { headers: authHeader() });
};

export default {
    saveData,
    getAllClassXDetailsByUserId
}

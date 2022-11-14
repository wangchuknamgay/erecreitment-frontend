import axios from "axios";
import authHeader from "./auth-header";

const API_URL ="http://localhost:8082/api/master/";
// const API_URL= process.env.REACT_APP_API_URL; 

const save=(data)=>{
    return axios.post(API_URL + "saveMaster", data,{ headers: authHeader() });
}


const getAllMasterList= () => {
    return axios.get(API_URL +"getAllMasterList",
        { headers: authHeader() });

};

export default {
    save,
    getAllMasterList
}
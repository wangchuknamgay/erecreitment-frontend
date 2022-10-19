import axios from "axios";
const save=(data)=>{
    return axios.post("http://localhost:8082/api/test",data);
}
export default {
    save
}
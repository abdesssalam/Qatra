import Axios from "axios";
import Cookies from "universal-cookie";

const axios_api=Axios.create({
    baseURL:'http://127.0.0.1:8000/api',
    withCredentials:true,
   
})

export default axios_api
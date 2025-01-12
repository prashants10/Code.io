import axios from "../config/axiosConfig";

export const pingApi = async() => {
    try{
        const response = await axios.get("/ping");
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}

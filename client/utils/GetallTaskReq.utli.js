import axios from "axios";

export const GetAllTaskReq = async () => {
    try{
       const res=await axios.get('http://localhost:8000/api/v1/task/')
       
       console.log("Get all task api response", res);
         return res.data;
       
    }catch(err){
        console.log("Get all task api is not working", err.message);
    }
}
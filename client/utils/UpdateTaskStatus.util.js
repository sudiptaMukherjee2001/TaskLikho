import axios from "axios";

export const updateTaskStatusReq = async (reqBody) => {
    console.log("Update task status request body:", reqBody);
    
    try{
        const res= await axios.put("http://task-likho.vercel.app/api/v1/task/update-task-status",reqBody)
    }catch(err){
        console.log("Update task status api is not working", err.message);
    }
}
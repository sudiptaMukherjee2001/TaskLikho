import axios from "axios";

export const updateTaskStatusReq = async (reqBody) => {
    console.log("Update task status request body:", reqBody);
    
    try{
        const res= await axios.put("http://localhost:8000/api/v1/task/update-task-status",reqBody)
    }catch(err){
        console.log("Update task status api is not working", err.message);
    }
}
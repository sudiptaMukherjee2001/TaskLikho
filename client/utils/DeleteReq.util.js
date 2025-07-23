import axios from "axios"

export const deleteTaskReq = async (reqBody) => {
   console.log("from utils",reqBody);
   
    
    
    try {
        const res = await axios.delete("http://localhost:8000/api/v1/task/delete-task", {
            data:reqBody
        })
        // const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/task/create`, reqBody)
        console.log("this data send to  mongodb ==>", res);
    } catch (error) {
        console.log("delete api is not working", error.message);
    }

}
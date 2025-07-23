import axios from "axios"

export const createTaskReq = async (reqBody) => {
    
    try {
         const res = await axios.post("http://localhost:8000/api/v1/task/create-task", reqBody)
        //const res = await axios.post("https://task-likho.vercel.app/api/v1/task/create-task", reqBody)
        // const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/task/create`, reqBody)
        console.log("this data send to  mongodb ==>", res);
    } catch (error) {
        console.log("create api is not working", error.message);
    }

}
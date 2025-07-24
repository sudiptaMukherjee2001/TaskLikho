import axios from "axios"
import { signOut } from 'next-auth/react';
export const createTaskReq = async (reqBody) => {

    try {
        const res = await axios.post("http://localhost:8000/api/v1/task/create-task", reqBody)
       
        console.log("this data send to  mongodb ==>", res);
    } catch (error) {
          if (error.response?.status === 401) {
            console.warn("⚠️ Access token expired or invalid. Logging out.");
            signOut({ callbackUrl: "/auth/error?reason=sessionExpired" });
            return;
        }
        console.log("create api is not working", error.message);
    }

}
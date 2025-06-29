import app from "./app.js";
import { databaseConnection } from "./db/index.js";

const prop=databaseConnection();//returns a promise
console.log("Database connection status:", prop);

prop.then(()=>{
   const server= app.listen(process.env.PORT || 8001, () => {
        console.log(`Server is running on port ${process.env.PORT || 8001}`);
    });
    
    server.on("error", (err) => {
  console.error("Something went wrong on app.listen level", err);
});
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

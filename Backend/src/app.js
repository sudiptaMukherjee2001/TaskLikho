import express from 'express';
import cors from 'cors';


const app = express();
let corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// import routes
import taskRoutes from './route/task.route.js';
// rotues declaration
app.use('/api/v1/task', taskRoutes);

export default app;
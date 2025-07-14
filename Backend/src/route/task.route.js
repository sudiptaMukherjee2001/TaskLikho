import Router from 'express';
const router = Router();

import createTask from '../controller/createtask.controller.js';

// Route to create a task
router.route('/create-task').post(createTask);



export default router;
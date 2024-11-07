const express = require('express');
const { jwtMiddleware } = require('../../middlewares/employeeMiddleware/jwtMiddleware');
const upload = require('../../middlewares/employeeMiddleware/multerMiddleware');
const { createTask, deleteTask } = require('../../controller/taskController');

const router = express.Router();

router.route('/').post(jwtMiddleware,upload.single('files'),createTask)

router.route('/:taskId').put(jwtMiddleware,deleteTask)

module.exports=router
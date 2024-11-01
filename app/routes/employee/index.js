const express = require('express');
const { addEmployee, getAllEmployees, loginEmployee, deleteEmployee, getEmployeeByStatus } = require('../../controller/employeeController');
const { updateEmployee } = require('../../controller/employeeController/updateEmployee');
const { jwtMiddleware } = require('../../middlewares/employeeMiddleware/jwtMiddleware');
const router = express.Router();


router.route('/').post(addEmployee).get(jwtMiddleware,getAllEmployees) 
    
router.route('/login').post(loginEmployee)

router.route('/:id').put(updateEmployee).delete(deleteEmployee)

router.route('/status').get(getEmployeeByStatus)

module.exports=router
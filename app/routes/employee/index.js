const express = require('express');
const { addEmployee, getAllEmployees, loginEmployee, deleteEmployee } = require('../../controller/employeeController');
const { updateEmployee } = require('../../controller/employeeController/updateEmployee');
const router = express.Router();


router.route('/').post(addEmployee).get(getAllEmployees) 
    
router.route('/login').post(loginEmployee)

router.route('/:id').put(updateEmployee).delete(deleteEmployee)

module.exports=router
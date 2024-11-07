const express = require('express');
const { addEmployee, getAllEmployees, loginEmployee, deleteEmployee, getEmployeeByStatus, createTask, updateEmployee } = require('../../controller/employeeController');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of employees
 *     description: Fetches all employees from the database
 *     responses:
 *       200:
 *         description: A list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   employeeId:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   position:
 *                     type: string
 */
/**
 * @swagger
 * /:
 *   post:
 *     summary: Add a new employee
 *     description: Creates a new employee record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               position:
 *                 type: string
 *                 example: "Software Engineer"
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.route('/').post(addEmployee).get(getAllEmployees) 
    
router.route('/login').post(loginEmployee)

router.route('/:employeeId').put(updateEmployee).delete(deleteEmployee)

router.route('/status').get(getEmployeeByStatus)


module.exports=router
const { addEmployee } = require("./addEmployee");
const { deleteEmployee } = require("./deleteEmployee");
const { getEmployeesByStatus } = require("./employeesByStatus");
const { getAllEmployees } = require("./getEmployee");
const { loginEmployee } = require("./loginEmployee");
const { updateEmployee } = require("./updateEmployee");

module.exports={
    addEmployee,
    getAllEmployees,
    loginEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeesByStatus
}
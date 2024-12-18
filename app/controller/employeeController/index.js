const { addEmployee } = require("./addEmployee");
const { deleteEmployee } = require("./deleteEmployee");
const { getAllEmployees } = require("./getEmployee");
const { getEmployeeByStatus } = require("./getEmployeeByStatus");
const { loginEmployee } = require("./loginEmployee");
const { updateEmployee } = require("./updateEmployee");

module.exports={
    addEmployee,
    getAllEmployees,
    loginEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeByStatus,
}
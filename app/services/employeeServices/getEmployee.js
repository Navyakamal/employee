const { employees } = require("../../database/models/employee");

exports.getAllEmployees = async () => {
    try {
        const allEmployees = await employees.find();
        return allEmployees;
    } 
    catch (err) {
        throw err;
    }
};
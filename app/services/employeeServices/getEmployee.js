const { employees } = require("../../database/models/employee");
const { broadcast } = require("../../websocket/employee");


exports.getAllEmployees = async (limit,skip) => {
    try {

        const allEmployees = await employees.find().limit(limit).skip(skip);
        broadcast({ message: 'Employees have been listed!' });
        return allEmployees;
    } 
    catch (err) {
        throw err;
    }
};
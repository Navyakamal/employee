const { employees } = require("../../database/models/employee");

exports.loginEmployee=async(email,password)=>{
    try{
        const employee = await employees.findOne({ email, password });
        return employee;
    }
    catch(err){
        throw err;
    }
}
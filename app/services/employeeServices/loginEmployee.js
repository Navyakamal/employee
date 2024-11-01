const { employees } = require("../../database/models/employee");
const bcrypt=require('bcrypt')

exports.loginEmployee=async(email,password)=>{
    try{
        const employee = await employees.findOne({ email });
        if(employee){
            const isMatch = await bcrypt.compare(password, employee.password);
            if (isMatch) {
                return employee;
            } 
        }
        return null
    }
    catch(err){
        throw err;
    }
}
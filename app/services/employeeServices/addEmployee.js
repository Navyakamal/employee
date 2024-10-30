const { employees } = require("../../database/models/employee");

exports.addEmployee=async(data)=>{
    try{
        const newEmployee=new employees(data)
        await newEmployee.save()
        return newEmployee
    }
    catch(err){
        throw err
    }
}


const { employees } = require("../../database/models/employee");
const { broadcast } = require("../../websocket/employee");

exports.addEmployee=async(data)=>{
    try{
        
        const newEmployee=new employees(data)
        await newEmployee.save()
        broadcast({type:'New employee created',payload:newEmployee})
        return newEmployee
    }
    catch(err){
        throw err
    }
}


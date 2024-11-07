const employee = require("./employee");
const task=require('./tasks')

module.exports=app=>{
    app.use('/api/employee',employee),
    app.use('/api/employee/task',task)
}


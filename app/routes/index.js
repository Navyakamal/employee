const employee = require("./employee");

module.exports=app=>{
    app.use('/api/employee',employee)
}


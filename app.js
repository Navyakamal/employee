require('dotenv').config();
const express=require("express");
const loggingMiddleware = require('./app/middlewares/employeeMiddleware/loggingMiddleware');
const rateLimitMiddleware = require('./app/middlewares/employeeMiddleware/ratelimitMiddleware');
const app=express()
require('./app/database/db')

app.use(express.json())
app.use(loggingMiddleware)
app.use(rateLimitMiddleware)

require('./app/routes')(app);


const PORT=8000 || process.env.PORT 
app.listen(PORT,(req,res)=>{
    console.log(`Server started at ${PORT}`);
})
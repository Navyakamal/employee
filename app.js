require('dotenv').config();
const express=require("express");
const loggingMiddleware = require('./app/middlewares/employeeMiddleware/loggingMiddleware');
const rateLimitMiddleware = require('./app/middlewares/employeeMiddleware/ratelimitMiddleware');
const app=express()
const http = require('http');
const server = http.createServer(app);
require('./app/database/db')
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./app/swagger');
const { errorLogger, performanceLogger } = require('./app/logger');
const { initWebSocket } = require('./app/websocket/employee');

app.use(express.json())
app.use(loggingMiddleware)
app.use(rateLimitMiddleware)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorLogger)
app.use(performanceLogger)
initWebSocket(server)

require('./app/routes')(app);


const PORT=8000 || process.env.PORT 
server.listen(PORT,(req,res)=>{
    console.log(`Server started at ${PORT}`);
})

module.exports=app
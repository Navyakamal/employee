require('dotenv').config();
const express=require("express")
const app=express()
require('./app/database/db')

app.use(express.json())

require('./app/routes')(app);


const PORT=8000 || process.env.PORT 
app.listen(PORT,(req,res)=>{
    console.log(`Server started at ${PORT}`);
})
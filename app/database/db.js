const { default: mongoose } = require("mongoose");

const connectToDB=mongoose.connect(process.env.DATABASE).then(out=>{
    console.log("_______Mongodb server connected________");
}).catch(err=>{
    console.log(`_____Mongodb server not connected reason::${err}_____`);
})

// mongoose.set('debug', (collectionName, method, query, doc) => {
//     console.log(`Mongoose query - Collection: ${collectionName}, Method: ${method}, Query:`, query, "Document:", doc);
// });


module.exports=connectToDB


const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_CONNECT_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`connection successful  `);
}).catch((e) =>{
    console.log(e);
})
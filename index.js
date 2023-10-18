const express=require('express');
const cors=require('cors');
const {router}=require('./routers/APIroute')
const app=express();
app.use(cors())
app.use(express.json())
app.use('/',router);

app.listen(8000,()=>{
    console.log("PostgrSQL Server running on port 8000");
})
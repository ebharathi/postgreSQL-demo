const router=require('express').Router();
//importing executeQuery
const {executeQuery}=require('../connectDB');

router.post('/create-table',(req,res)=>{
    console.log("[+]CALLED CREATE TABLE COMMAND");
    let text=`CREATE TABLE "${req.body.table}" (
        "id" SERIAL,
        "name" VARCHAR(100) NOT NULL,
        "role" VARCHAR(15) NOT NULL,
        PRIMARY KEY ("id")
    );`;
    
    try {
        executeQuery(text).then((result)=>{
            if(result.error==false)
            {
                console.log(`${req.body.table.toUpperCase()} TABLE CREATED[+]`);
                res.json({
                    error:false,
                    messgae:`${req.body.table} created`
                })
            }
            else
            {
                console.log("TABLE NOT CREATED[+]");
                console.log("ERROR : ",result.message)
                res.json({
                    error:true,
                    message:result.message
                })
            }
        })
    } catch (error) {
          console.log("[-]ERROR IN CREATING A TABLE");
          res.json({
            error:true,
            message:error.message
          })
    }
})
router.post('/insert',(req,res)=>{
    try {
        console.log("[+]INSERT COMMAND TRIGGERED");
        let query=req.body.query;
        executeQuery(query).then((result)=>{
            if(result.error==false)
            {
                console.log("INSERT COMMAND EXECUTED[+]")
                res.json({
                    error:false,
                    message:result.message
                })
            }
            else
            {
                console.log("INSERT COMMAND FAILED[+]");
                console.log("ERROR: ",result.message);
                res.json({
                    error:true,
                    message:result.message
                })
            }
        })

    } catch (error) {
          console.log("[-]ERROR IN CREATING A TABLE");
          res.json({
            error:true,
            message:error.message
          })
    }
})
module.exports={router}
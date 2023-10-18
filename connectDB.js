const { Client }=require('pg');
const client=new Client(
    {
        host:'127.0.0.1',
        user:'postgres',
        database:'postgres',
        password:'elaya55555',
        port:5432,
    }
)

const executeQuery=async(query)=>{
    try{
           await client.connect().then(()=>console.log("DB connected"));
           await client.query(query);
           return {
            error:false,
            message:"Query executed succesfully"
           }
    }
    catch(error)
    {
        console.log("[-]Error while connecting");
        console.log(error.message);
        return {
            error:true,
            message:error.message
        };
    }
    finally{
          client.end().then(()=>console.log("DB disconnected"));
    }
}
module.exports={executeQuery};
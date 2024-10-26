import app from './app.js'
import  env from'dotenv';
env.config()
const port=process.env.PORT;

import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL,{dbName:"Blog"})
.then(()=>{
    console.log('Db is connected');
    
})
.catch((err)=>{
    console.log('db error',err);
    
})


app.listen(port,()=>{
    console.log(`server is listening on:${port}`);
    
})


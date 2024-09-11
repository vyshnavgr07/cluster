const express=require('express');
const app=express();
const morgan =require('morgan')
const userRouter=require('./src/routes/userRoute');
const blogRoutes = require('./src/routes/blogsRoute');
const errorHandler=require('./src/middleware/errorHandler')
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))
app.use('/user/',userRouter)
app.use('/blogs/',blogRoutes) 
app.use(errorHandler)





module.exports=app;
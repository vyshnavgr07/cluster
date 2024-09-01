const express=require('express');
const app=express();
const userRouter=require('./routes/userRoute');
const blogRoutes = require('./routes/blogsRoute');
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.use('/api/auth/',userRouter)
app.use('/api/blogs/',blogRoutes) 






module.exports=app;
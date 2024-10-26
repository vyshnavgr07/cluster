import express from'express';
const  app=express();
import morgan from 'morgan'
import cors from'cors'
import userRoute from './src/routes/user/userRoute.js';
import postRoutes from './src/routes/user/postRoute.js'
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
app.use('/api',userRoute)
app.use('/api',postRoutes)

// app.use(errorHandler)





export default app;
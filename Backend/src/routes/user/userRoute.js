import express from 'express';
const userRouter=express.Router();
import {signUp,otpVerify,login} from '../../controller/user/authController.js';




userRouter.post('/auth/signup',signUp)
.post('/auth/verify',otpVerify)
.post('/auth/login',login)








export default userRouter;
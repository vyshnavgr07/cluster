const express=require('express');
const userRouter=express.Router();
const usercontroller=require('../controller/userController');
const verifyToken=require('../middleware/verifyToken')


userRouter.post('/registration',usercontroller.userRegistration)
.post('/verifyOtp',usercontroller.verifyOtp)




module.exports=userRouter;    
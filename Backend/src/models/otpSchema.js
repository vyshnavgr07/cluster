const mongoose=require('mongoose');

const otpSchema=mongoose.Schema({
    userId:String,
    email:String,
    otp:String,
    createdAt:Date,
    expiresAt:Date

});

const Otp=mongoose.model('Otp',otpSchema)

module.exports=Otp;
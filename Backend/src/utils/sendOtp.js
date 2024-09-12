const nodemailer = require('nodemailer');
const crypto=require('crypto')
const Otp=require('../models/otpSchema')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: "mycluster775@gmail.com",
        pass: "wqsv uxgd ztff shpz",
    },
    tls:{
        rejectUnauthorized:true
    }
});
 
const sendOtp = async (user, res) => {
  const { _id, email, } = user;
    const otp=crypto.randomInt(100000, 1000000).toString();
    try {
    const existOtp=await Otp.findOne({email})

    if(!existOtp){
        await Otp.create({
            userId: _id,
            email:email,
            otp: otp,
            createAt: Date.now(),
            expiresAt: Date.now() + 36000,
        });    
    }else{
        await Otp.updateOne({email},{$set:{otp:otp}})
    }
      
  

        const info = await transporter.sendMail({
            from: '"Cluster Community👻" ', 
            to: email,
            subject: "Verify Email for cluster",
            html: `<div>
            <p>Hello, User</p>
            <p>Please use the following OTP to verify your email address:</p>
            <p><strong>${otp}</strong></p>
            <p>If you didn't request this, you can ignore this email.</p>
        </div>`,
        });

        return {
            status:201,
            message: 'Verification email has been sent to your account. Check your email for further instructions.',
            data: user,  
};
    } catch (error) {
        console.error('Error sending verification email:', error);
       res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = {
    sendOtp
};
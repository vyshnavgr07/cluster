
const otpVerify=async()=>{
    const otpRecord = await Otp.findOne({email});
    console.log(otpRecord,"otpp")

     if (!otpRecord) {
         return res.status(400).json({ message: 'OTP not found for this email.' });
     }

     if (otpRecord.expiresAt <Date.now()) {
         return res.status(400).json({ message: 'OTP has expired.' });
     }

  
     if (otpRecord.otp !== otp) {
         return res.status(400).json({ message: 'Invalid OTP.' });
     }
      
     await User.updateOne({email:email},{$set:{verified:true}})

     await Otp.deleteOne({ email });
      
     res.status(200).json({ message: 'OTP verified successfully.' });
}


module.exports=otpVerify;
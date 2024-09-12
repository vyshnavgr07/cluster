const User = require('../models/userSchema');
const { signupService } = require('../service/authService');
const {sendOtp} = require('../utils/otpverification/sendOtp');
const otpVerify=require('../utils/otpverification/otpVerify')
const userRegistration = async (req, res) => {
    try {
        const data = req.body;
        const signupResponse = await signupService(data);

        if (signupResponse.status === 300) {
          const otp= await sendOtp(signupResponse.user, res);
          return res.status(otp.status).json({ message:otp.message});
        }

      if (signupResponse.user) {
        const otp= await sendOtp(signupResponse.user, res);
          return res.status(otp.status).json({ message:otp.message});
        }

    } catch (error) { 
        console.log(error);
        res.status(500).json({ message: "An error occurred during registration" });
    }    
};


const verifyOtp = async (req, res) => {
    const { email, otp } = req.body; 
    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required.' }); 
    }
try {
    const otpresponse=await otpVerify(email,otp)
    return res.status(otpresponse.status).json(otpresponse.message); 
 } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Error verifying OTP.' });
    }
};







module.exports = { userRegistration,verifyOtp }; 
const User = require('../models/userSchema');
const { signupService } = require('../service/authService');
const { sendVerificationEmail } = require('../utils/verificationOtp');
const Otp=require('../models/otpSchema')
const userRegistration = async (req, res) => {
    try {
        const data = req.body;
        const signin = await signupService(data);
       await sendVerificationEmail(signin.savedUser,res);
       
    } catch (error) { 
        console.log(error);
        res.status(500).json({ message: "An error occurred during registration" });
    }    
};

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body; // Ensure req.body contains 'email' and 'otp'

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required.' });
    }

    try {
        // Find the OTP record for the given email
        const otpRecord = await Otp.findOne({email});
       console.log(otpRecord,"otpp")
        // Check if OTP record exists
        if (!otpRecord) {
            return res.status(400).json({ message: 'OTP not found for this email.' });
        }

        // Check if the OTP has expired
        if (otpRecord.expiresAt <Date.now()) {
            return res.status(400).json({ message: 'OTP has expired.' });
        }

        // Check if the OTP is correct
        if (otpRecord.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP.' });
        }
         
        await User.updateOne({email:email},{$set:{verified:true}})
        // OTP is valid
        // Optionally, you might want to delete the OTP record after successful verification
        await Otp.deleteOne({ email });
         
        res.status(200).json({ message: 'OTP verified successfully.' });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Error verifying OTP.' });
    }
};
module.exports = { userRegistration,verifyOtp }; 
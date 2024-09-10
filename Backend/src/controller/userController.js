const User = require('../models/userSchema');
const {signinService,signupService}=require('../service/authService')

const userRegistration = async (req, res) => {
    try {
        const data=req.body
     const signin=signinService(data)

        res.status(signin.status).json({
          message:signin.message,
           })

    } catch (error) {
        res.status(400).json({
            stattus: 'failed',
        })
        console.log(error, "err");

    }
}


const login = async (req, res) => {
    try {
  


        if (hash) {
            res.status(200).json({
                status: 'sucess',
                message: "login succesfully",
                token
            })

        }

    } catch (error) {
        console.log(error);
    }
}


const getuser = async (req, res) => {
    try {
        const id = req.decoded.user._id;
        const user = await User.findOne({ _id: id })
        return res.status(200).json({
            status: "success",
            user
        })


    } catch (error) {
        console.log(error);

    }
}


module.exports = { userRegistration, login, getuser } 
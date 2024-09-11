const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/generateToken');
const User = require('../models/userSchema');


const signupService=async(data)=>{
    const { userName, email, password} =data;
    if (!userName || !email || !password) {
        return {status:400,message: 'data missing'}
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return {status:400,message:'user already exist'}
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new User({ userName, email, password: hash });
    const savedUser = await user.save();
    return {status:201,message:'user created succesfully',savedUser}
}














// const signinService=async(data)=>{
//     const { email,name, password,} = data;
//     if (!email || !password) {
//         res.status(400).json({
//             status: 'failed',
//             message: 'email or password is not provided'
//         })
//     }
//     const user = await User.findOne({ email })
//     console.log(user);
    
//     const userPassword = user.password
//     const hash = await bcrypt.compareSync(password, userPassword);
//     const token = generateToken(user)
// }





module.exports={signupService}  
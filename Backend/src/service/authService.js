const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/generateToken');
const User = require('../models/userSchema');


const signupService = async (data) => {
    const { userName, email, password } = data;
    if (!userName || !email || !password) {
        return { status: 400, message: 'Data missing' };
    }
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.verified) {
        return { status: 400, message: 'User already exists and is verified' };
    }

  if (existingUser && !existingUser.verified) {
        return { status: 300, message: 'User already exists but is not verified', user: existingUser };
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    
    const user = new User({ userName, email, password: hash });
    const savedUser = await user.save();

    return { status: 201, message: 'User created successfully', user: savedUser };
};















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
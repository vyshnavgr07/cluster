import jwt from 'jsonwebtoken';



const generateToken=(userId,res)=>{
    const token =jwt.sign({userId},process.env.SECRET_KEY,{
        expiresIn:'15d'
    })



    // res.cookie("jwt",token,{
    // maxAge:15*24*60*1000,
    // httpOnly:true,
    // sameSite:"none",
    // secure: process.env.NODE_ENV === "production",
    
    // })

    return token
}

export default generateToken;
import  jwt    from  'jsonwebtoken'


const verifyToken=async(req,res,next)=>{
    const authHeader=req.headers.authorization;

if(authHeader===undefined){
     return   res.status(401).json({
            status:'failed',
            message:'no token provided'  
        })
    }
const token=authHeader.split(" ")[1]


    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
     if(err){
        console.log(err,"error")
      return  res.status(401).json({
            status:'failed', 
            message:'token not provoded'
        })
     }else{
        req.user=decoded;
     next()
     }
    })
    
    }


export default verifyToken   


































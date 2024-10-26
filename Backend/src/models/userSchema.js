import  mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true,
      },
      verified:{
        type:Boolean,
        default:false
        },
        profilePic:{
          type:String,
          default:null
        },
        followers: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        ],
        following: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        ],
        repliedPosts: {
          type: [mongoose.Schema.Types.ObjectId],
          ref: "Post",
          default: [],
      },
        repostedPosts: {
          type: [mongoose.Schema.Types.ObjectId],
          ref: "Post",
          default: [],
      },
  
    
});


const User=mongoose.model('User',userSchema);

export default User
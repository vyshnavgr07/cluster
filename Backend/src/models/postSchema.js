import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
},
      text: {
        type: String,
        maxLength: 500,
      },
      image: {
        type: String,
      },
      tembImage: {
        type: String,    
      },
      createdOn: {
        type: Date,
        default: Date.now,
      },
      likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
      },
},{timeStamp:true});


const Post=mongoose.model('Blog',postSchema)


export default Post;













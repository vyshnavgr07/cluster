import  Blog  from  '../../models/postSchema.js';
import Comment from '../../models/commentSchema.js';
import  User from '../../models/userSchema.js';


export const createPost= async (req, res) => {
    try {
        const user  = req.user;
       const data = req.body
        
        if (!data) {
            res.status(400).json({
                status: 'failed',
                message: ""
            })
        }
        const userD=await User.findOne({_id:user.userId})
      
        
        const blog = await new Blog({ userId: user._id,author:user.userName,...data });
        const savedBlog = await blog.save();

        return res.status(201).json({ 
            status: 'success',
            message: 'blog created',
            savedBlog
        })
    } catch (error) {

        console.log(error);

    }
}

export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find().populate("userId");
        res.status(200).json({
            status: 'success',
            message: 'succesfully fetched',
            blog
        })
    } catch (error) {
        console.log(error);

    }
}

export const getBlogId = async (req, res) => {
    try {
    const _id=req.params._id;
    const blog = await Blog.findOne({_id}).populate('userId');
        res.status(200).json({
            status: 'success',
            message: 'succesfully fetched',
            blog
        })
    } catch (error) {
        console.log(error);

    }
}

export const getBlogByUserId=async(req,res)=>{
    try {
        const id=req.params._id
        console.log(id);
        
        const blogs=await Blog.find({userId:id});
        console.log(blogs,"blogg");
        
        if(!blogs){
          return  res.status(400).json({
                status: 'failed',
                message: 'no data found',
                }) }

                res.status(200).json({
                    status: 'success',
                    message: 'succesfully fetched',
                    blogs
                })
    } catch (error) {
        console.log(error);
        
    }
}




export const UpdateBlog = async (req, res) => {
    try {
        const id=req.params.id
        const {title, content, author } = req.body;

        const blog = await Blog.findOneAndUpdate({ _id:id }, { title, content, author }, { new: true })
        if (!blog) {
            return res.status(404).json({
                status: 'failure',
                message: 'Blog not found'
            });
        }
        return res.status(200).json({
            status: 'succes',
            message: 'succesfully updated',
            blog
        })
    } catch (error) {
        console.log(error);

    }
}

export const deletedBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const delteBlog = await Blog.findOneAndDelete({ _id: id })
        if(!delteBlog){
            return  res.status(404).json({
                status: 'succes',
                message: 'Blog not found'
            })
        }
        
        return res.status(200).json({
            status: 'succes',
            message: 'succesfully deleted'
        })
    } catch (error) {
        console.log(error);

    }
}




export const addComment = async (req, res) => {
    try {
        const id = req.decoded.user._id;
        const blogId=req.params.id
        console.log(id, "usur");

        const data = req.body;
        const comment = await new Comment({ userId: id,blogId:blogId,...data });
        const savedComment = await comment.save();
        return res.status(200).json({
            status: 'succes',
            message: 'succesfully updated',
            savedComment
        })
    } catch (error) {
        console.log(error);

    }
}

export const getComment=async(req,res)=>{
try {
    const id=req.params.id

    const getcom=await Comment.find({blogId:id}).populate("userId").populate("blogId");
    return res.status(200).json({
        status: 'succes',
        message: 'succesfully updated',
        getcom
    })
} catch (error) {
    console.log(error);
    
}
}
 


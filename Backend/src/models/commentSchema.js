import  mongoose  from  'mongoose';

const commentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    blogId: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
);
const Comment = mongoose.model('Comment', commentSchema);

export default  Comment;
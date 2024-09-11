const express=require('express');
const blogRoutes=express.Router();
const blogController=require('../controller/blogController');
// const verifyToken=require('../middleware/verifyToken')


blogRoutes.post('/',blogController.createBlog)
.get('/',blogController.getBlog)
.get('/:_id',blogController.getBlogId)
.get('/user/:_id',blogController.getBlogByUserId)
.put('/:id',blogController.UpdateBlog)
.delete('/:id',blogController.deletedBlog)
.post('/comments/:id',blogController.addComment)
.get('/comments/:id',blogController.getComment)

module.exports=blogRoutes;   
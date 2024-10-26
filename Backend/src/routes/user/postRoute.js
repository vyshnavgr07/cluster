import express from 'express'
const  postRoutes=express.Router();
import {createPost} from '../../controller/user/postController.js';
import verifyToken from '../../middleware/verifyToken.js';


postRoutes.post('/post',verifyToken,createPost)

export default postRoutes;   
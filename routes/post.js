import express from 'express';
import { 
    getPost, getSinglePost, createPost, updatePost, deletePost,
} from '../controller/postController.js';

const router = express.Router();

// get all post with or without limit 
router.get('/', getPost );

// get single post with id
router.get('/:id', getSinglePost);

// Create new posts
router.post('/', createPost);

// Update posts
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost)

export default router;
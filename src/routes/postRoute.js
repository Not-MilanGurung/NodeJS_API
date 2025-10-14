const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { createPost, updatePost } = require('../controllers/postController');

const router = express.Router();

/**
 * @description routes for creating post
 * @route /api/v1/posts
 * @access Public
 * @method POST
 * @body { title, content }
 * @header { Authorisation: token }
 * @returns {message, postId}
 * @returns { error }
 */
router.post("/", verifyToken, createPost);

/**
 * @description routes for updating post
 * @route /api/v1/posts/:
 * @access Public
 * @method POST
 * @body { title, content }
 * @header { Authorisation: token }
 * @returns {message, post}
 * @returns { error }
 */
router.put("/:id", verifyToken, updatePost);

module.exports = router;

const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const validBsonId = require('../middleware/validBsonId');
const { createPost, updatePost, deletePost, getAllPosts, getPostById } = require('../controllers/postController');

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
 * @description route for getting all posts
 * @route /api/v1/posts
 * @access Public
 * @method GET
 * @returns { posts }
 * @returns { error }
 */
router.get("/", getAllPosts);

/**
 * @description route for getting a post
 * @route /api/v1/posts/:id
 * @access Public
 * @method GET
 * @returns { post }
 * @returns { error }
 */
router.get("/:id",validBsonId, getPostById);

/**
 * @description routes for updating post
 * @route /api/v1/posts/:id
 * @access Public
 * @method PUT
 * @body { title, content }
 * @header { Authorization: token }
 * @returns {message, post}
 * @returns { error }
 */
router.put("/:id", verifyToken, validBsonId, updatePost);

/**
 * @description route for deleting post
 * @route /api/v1/posts/:id
 * @access Public
 * @method DELETE
 * @header { Authorization: token }
 * @returns { message }
 * @returns { error }
 */
router.delete("/:id", verifyToken, validBsonId, deletePost);

module.exports = router;

const express = require('express');
const { createComment, updateComment, deleteComment, getCommentsOfPost} = require('../controllers/commentController');
const verifyToken = require('../middleware/verifyToken');
const validBsonId = require('../middleware/validBsonId');

const router = express.Router();

/**
 * @description route for creating comment
 * @route /api/v1/comments/:postId
 * @access Public
 * @method POST
 * @body { content }
 * @header { Authorization: token }
 * @returns { message, comment}
 * @returns { error }
 */
router.post("/:postId", verifyToken, validBsonId, createComment);

/**
 * @description route for getting comments
 * @route /api/v1/comments/:postId
 * @access Public
 * @method GET
 * @returns { message, comments}
 * @returns { error }
 */
router.get("/:postId", validBsonId, getCommentsOfPost);

/**
 * @description route for updating comment
 * @route /api/v1/comments/:id
 * @access Public
 * @method PUT
 * @body { content }
 * @header { Authorization: token }
 * @returns { message, comment }
 * @returns { error }
 */
router.put("/:id", verifyToken, validBsonId, updateComment);

/**
 * @description route for deleting a comment
 * @route /api/v1/comments/:id
 * @access Public
 * @method DELETE
 * @header { Authorization: token }
 * @returns { message }
 * @returns { error }
 */
router.delete("/:id", verifyToken, validBsonId, deleteComment);

module.exports = router;
const router = require('express').Router();
const { likePost, unlikePost, getLikesofPost } = require('../controllers/likeController');
const validBsonId = require('../middleware/validBsonId');
const verifyToken = require('../middleware/verifyToken');

/**
 * @description route for liking a post
 * @route /api/v1/posts/:id/like
 * @access Public
 * @method POST
 * @header { Authorization: token}
 * @returns { message, like }
 * @returns { error }
 */
router.post("/:id/like", verifyToken, validBsonId, likePost);

/**
 * @description route for getting likes of a post
 * @route /api/v1/posts/:id/like
 * @access Public
 * @method GET
 * @header { Authorization: token}
 * @returns { message, postId, likes }
 * @returns { error }
 */
router.get("/:id/like", validBsonId, getLikesofPost);

/**
 * @description route for unliking a post
 * @route /api/v1/posts/:id/unlike
 * @access Public
 * @method DELETE
 * @header { Authorization: token}
 * @returns { message }
 * @returns { error }
 */
router.delete("/:id/unlike", verifyToken, validBsonId, unlikePost);

module.exports = router;
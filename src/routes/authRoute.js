const express = require('express');
const { register, login } = require("../controllers/authController");
const router = express.Router();

/**
 * @description routes for register
 * @route /api/v1/auth/register
 * @access Public
 * @method POST
 * @body { username, email, password }
 * @returns { message, user}
 * @returns { error }
 */
router.post("/register", register);

router.post("/login", login);

module.exports = router;
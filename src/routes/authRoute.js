const express = require('express');
const { register, login, getAllUsers, deleteUser } = require("../controllers/authController");
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

/**
 * @description routes for login
 * @route /api/v1/auth/login
 * @access Public
 * @method POST
 * @body { email, password }
 * @returns { message, token, user }
 * @returns { error }
 */

router.post("/login", login);

/**
 * @description routes for get all users
 * @route /api/v1/auth/get-all-users
 * @access Public
 * @method GET
 * @returns { users }
 * @returns { error }
 */
router.get("/users", getAllUsers);

/**
 * @description routes for deleting user
 * @route /api/v1/auth/delete-user
 * @access Public
 * @method POST
 * @returns { message }
 * @returns { error }
 */
router.delete("/users/:id", deleteUser);

module.exports = router;
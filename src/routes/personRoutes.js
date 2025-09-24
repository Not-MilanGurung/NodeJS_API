const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.get("/person", personController.get);
router.post("/person", personController.save);

module.exports = router;
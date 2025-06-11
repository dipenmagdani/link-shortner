const express = require("express");
const router = express.Router();
const { createLink } = require("../controllers/link.controller");

// Protected routes (require authentication)
router.post("/create", createLink);

module.exports = router;

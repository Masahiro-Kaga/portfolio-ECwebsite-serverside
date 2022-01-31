const express = require("express");
router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/",userControllers.registerUser);

module.exports = router;
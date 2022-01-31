const express = require("express");
router = express.Router();
const userControllers = require("../controllers/userControllers");
const { verification } = require("../auth");

router.post("/",userControllers.registerUser);
router.post("/login",userControllers.login);
router.post("/setAdmin",verification,userControllers.setAdmin);

module.exports = router;
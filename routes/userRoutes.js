const express = require("express");
router = express.Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../auth")
const { verification,verifyAdmin } = auth;

router.post("/",userControllers.registerUser);
router.post("/login",userControllers.login);
router.put("/setAdmin/:userId",verification,verifyAdmin,userControllers.setAdmin);

module.exports = router;
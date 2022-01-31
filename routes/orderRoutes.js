const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderControllers");
const auth = require("../auth");
const {verification,verifyAdmin} = auth;

// router.post("/",verification,orderControllers.)

module.exports = router;
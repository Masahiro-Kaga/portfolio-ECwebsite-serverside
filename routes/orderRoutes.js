const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/orderControllers");
const auth = require("../auth");
const {verification,verifyAdmin} = auth;

router.post("/",verification,orderControllers.order);
router.get("/usersOrder",verification,orderControllers.usersOrder);
router.get("/allOrders",verification,verifyAdmin,orderControllers.allOrders);
router.get("/checkOrderedProduct/:orderId",verification,orderControllers.checkOrderedProduct);

module.exports = router;
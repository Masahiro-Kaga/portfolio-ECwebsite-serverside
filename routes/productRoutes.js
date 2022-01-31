const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const auth = require("../auth");
const {verification,verifyAdmin} = auth;

router.post("/createProduct",verification,verifyAdmin,productControllers.createProduct);
router.get("/retrieveAllActive",productControllers.retrieveAllActive);
router.get("/retrieveSingleProduct/:productId",productControllers.retrieveSingleProduct);
router.put("/updateProductInfo/:productId",verification,verifyAdmin,productControllers.updateProductInfo);
router.put("/archiveItem/:productId",verification,verifyAdmin,productControllers.archiveItem);

module.exports = router;
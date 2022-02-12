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
router.put("/activateProduct/:productId",verification,verifyAdmin,productControllers.activateProduct);
router.put("/changeStatus/:productId",verification,verifyAdmin,productControllers.changeStatus);
router.get("/getAllProducts",verification,verifyAdmin,productControllers.getAllProducts);

module.exports = router;
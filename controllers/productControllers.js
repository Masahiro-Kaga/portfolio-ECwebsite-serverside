const Product = require("../models/Product");

module.exports.createProduct = (req, res) => {
  let newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  newProduct
    .save()
    .then((product) => res.send(product))
    .catch((err) => res.send(err));
};

module.exports.retrieveAllActive = (req, res) => {
  Product.find({ isActive: true })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports.retrieveSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.productId })
  // Product.findOne({id: req.params.productId })
  // Product.findById(req.params.productId)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports.updateProductInfo = (req, res) => {
  let updated = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  Product.findByIdAndUpdate(req.params.productId, updated, { new: true })
    .then((updatedProductInfo) => res.send(updatedProductInfo))
    .catch((err) => res.send(err));
};

module.exports.archiveItem = (req, res) => {
  let updated = {
    isActive: false,
  };
  Product.findByIdAndUpdate(req.params.productId, updated, { new: true })
    .then((updatedProductInfo) => res.send(updatedProductInfo))
    .catch((err) => res.send(err));
};

module.exports.activateProduct = (req, res) => {
  let updates = {
    isActive: true,
  };
  Product.findByIdAndUpdate(req.params.productId, updates, { new: true })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

// Which is better. How to separately use.
// Answer is, using params because process of configuration should be lighter.

// module.exports.activateProduct = (req, res) => {
//     let updates = {
//        productId:req.body.productId, 
//        isActive: true,
//     };
//     Product.findByIdAndUpdate(req.body.productId, updates, { new: true })
//       .then((result) => res.send(result))
//       .catch((err) => res.send(err));
//   };
  




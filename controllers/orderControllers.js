const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports.order = async (req, res) => {
  if (req.user.isAdmin) {
    return res.send("Action Forbidden.You are admin.");
  }
  let newOrderId;
  let newOrder = new Order({
    userId: req.user.id,
    totalAmount: req.body.totalAmount,
    products: req.body.products,
  });
  await newOrder
    .save()
    .then((orderObj) => (newOrderId = orderObj.id))
    .catch((err) => err.message);

  let orderedProducts = req.body.products;
  orderedProducts.forEach(async (product) => {
    await Product.findById(product.productId).then((found) => {
      found.orders.push({
        orderId: newOrderId,
        quantity: product.quantity,
      });
      found.save();
    });
  });
};

module.exports.usersOrder = (req, res) => {
  Order.find({ userId: req.user.id })
    .then((orders) => res.send(orders))
    .catch((err) => res.send(err));
};

module.exports.allOrders = (req, res) => {
  Order.find({})
    .then((orders) => res.send(orders))
    .catch((err) => res.send(err));
};

module.exports.checkOrderedProduct = (req, res) => {
  Order.findById(req.params.orderId)
    .then((order) => res.send(order.products))
    .catch((err) => res.send(err));
};

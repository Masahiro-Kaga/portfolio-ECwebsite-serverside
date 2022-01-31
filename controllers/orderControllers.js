const Order = require("../models/Product");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports.order = (req,res) =>{
    if(req.user.isAdmin){
        return res.send("Action Forbidden.You are admin.")
    }
    let isOrdered = await User.findById(req.user.id).then(user =>{
        let newOrder = {
            userId:
            productId:req.body.productId,
            totalAmount:req.body.totalAmount
        }
        user.products.push(newOrder);
        return user.save().then(user => true).catch(err => err.message)
    })
    if(isOrdered !== true){
        return res.send({message:isOrdered});
    }
    
    // let isOrderedProductUpdated = await Product.findById(req.body.productId).then(product =>{
    //     let newOrderedUser = {
    //         userId:req.user.id,
    //         totalAmount:req.body.totalAmount
    //     }
    //     product.customers.push(newOrderedUser);
    //     return product.save().then(product => true).catch(err => err.message)
    // })
    // if(isOrderedProductUpdated !== true){
    //     return res.send({message:isOrderedProductUpdated});
    // }

    // if(isOrderUpdated && isOrderedProductUpdated){
    //     return res.send({message:"Ordered Successfully."})
    // }
}
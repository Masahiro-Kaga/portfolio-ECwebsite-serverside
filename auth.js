const jwt = require("jsonwebtoken");
const secret = "ECsiteApi";

module.exports.createAccessToken = (user) =>{
    const data = {
        id:user._id,
        email:user.email,
        password:user.password
    };
    return jwt.sign(data,secret,{});    
}

module.exports.verification = (req,res,next) =>{
    let token = req.headers.authorization;
    console.log(token);
}
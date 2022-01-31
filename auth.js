const jwt = require("jsonwebtoken");
const secret = "ECsiteApi";

module.exports.createAccessToken = (user) =>{
    const data = {
        id:user._id,
        email:user.email,
        isAdmin:user.isAdmin
    };
    return jwt.sign(data,secret,{});    
}

module.exports.verification = (req,res,next) =>{
    let token = req.headers.authorization;
    // console.log(token);
    // next();
    if(typeof token === "undefined"){
        return res.send({auth:"Failed. No Token."})
    }else{
        token = token.slice(7,token.length);
        jwt.verify(token,secret, (err,decodedToken)=>{
            if(err){
                return res.send({
                    auth:"Failed",
                    message:err.message
                });
            }else{
                req.user = decodedToken;
                next();
            }
        })
    }
}

module.exports.verifyAdmin = (req,res,next) =>{
    if(req.user.isAdmin){
        next();
    }else{
        return res.send({
            auth:"Failed",
            message:"Action Forbidden!"
        })
    }
}
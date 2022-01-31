const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

module.exports.registerUser = (req, res) => {
  const hashedPW = bcrypt.hashSync(req.body.password, 10);
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPW,
    mobileNo: req.body.mobileNo,
  });
  newUser
    .save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user === null) {
      return res.send("No User Found.");
    } else {
      const isPasswordCoorect = bcrypt.compareSync(req.body.password,user.password);
      if(isPasswordCoorect){
          return res.send({accessToken:auth.createAccessToken(user)})
      }
    }
  }).catch(err => res.send(err));
};

module.exports.setAdmin = (req,res) =>{
    console.log(req.body);
}
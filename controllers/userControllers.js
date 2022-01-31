const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.registerUser = (req, res) => {
    const hashedPW = bcrypt.hashSync(req.body.password,10);
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPW,
    mobileNo: req.body.mobileNo,
  });
  newUser.save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

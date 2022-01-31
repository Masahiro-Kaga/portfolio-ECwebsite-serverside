const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
const app = express();

mongoose.connect("mongodb+srv://masahirokaga:masaMongo@cluster0.mx6qv.mongodb.net/capstone2?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);

app.listen(port, ()=> console.log(`Server Running on Localhosl:4000`))
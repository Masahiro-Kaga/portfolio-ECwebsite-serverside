const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4001;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

const corsOptions = {
    origin:["http://localhost:3000","https://nervous-gates-59fb03.netlify.app"],
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions));
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/products',productRoutes);

const orderRoutes = require('./routes/orderRoutes');
const { response } = require("express");
app.use('/orders', orderRoutes);

app.listen(port, ()=> console.log(`Server Running on Localhosl:${process.env.PORT}`))
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4002;
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/products',productRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

app.listen(port, ()=> console.log(`Server Running on Localhosl:${process.env.PORT}`))
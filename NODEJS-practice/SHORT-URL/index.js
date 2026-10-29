
const urlRoutes = require("./routes/url");
const express = require("express");

const { connect } = require("mongoose");
const { connectToMongoDB } = require("./connect");
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => console.log('Mongodb connected'))



app.use("/url",urlRoutes);
app.listen(PORT,() => console.log(`Server Started at PORT: ${PORT}`))

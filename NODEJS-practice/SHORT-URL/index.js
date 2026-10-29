const express = require("express");
const urlRoute = require("./routes/url");
const { connect } = require("mongoose");
const { connectToMongoDB } = require("./connect");
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url");
app.use("/url",urlRoutes);
app.listen(PORT,() => console.log(`Server Started at PORT: ${PORT}`))

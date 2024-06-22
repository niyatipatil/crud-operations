const express = require("express");
const mongoose = require("mongoose");
const user = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const orderRoute = require("./Routes/orderRoute");

mongoose.connect("mongodb://localhost:27017/sample-project");

const PORT = 8000;
const app = express();

app.use(express.json());

app.use(user);
app.use(productRoute);
app.use(orderRoute);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose connection error:"));
db.once("open", () => {
  console.log("connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

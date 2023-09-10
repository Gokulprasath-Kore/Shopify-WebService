const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getproductsroute = require("./src/routes/GetProducts");
const guestcartcreationroute = require("./src/routes/GuestCartCreation");
const guestcartviewingroute = require("./src/routes/GuestCartViewing");
const guestcheckoutroute = require("./src/routes/GuestCheckout");
const guestvieworderroute = require("./src/routes/GuestViewOrder");
const guestcancelorderroute = require("./src/routes/GuestCancelOrder");
const signuproute = require("./src/routes/Signup");
const loginroute = require("./src/routes/Login");

app.get("/",(req,res)=>{
    res.send("Shopify");
})

app.use("/getproducts",getproductsroute);

app.use("/guestcartcreation",guestcartcreationroute);

app.use("/guestcartviewing",guestcartviewingroute);

app.use("/guestcheckout",guestcheckoutroute);

app.use("/guestvieworder",guestvieworderroute);

app.use("/guestcancelorder",guestcancelorderroute);

app.use("/signup",signuproute);

app.use("/login",loginroute);

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})  
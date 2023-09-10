const express = require('express');
const router = express.Router();

const adminmiddleware = require("../middleware/Admin");
const getproductlogic = require("../controller/GetProductLogic");


router.get('/',adminmiddleware,getproductlogic );

module.exports = router;
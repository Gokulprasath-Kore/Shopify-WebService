const express = require('express');
const router = express.Router();

const storemiddleware = require("../middleware/StoreFront");
const loginlogic = require("../controller/LoginLogic");


router.post('/',storemiddleware,loginlogic);

module.exports = router;
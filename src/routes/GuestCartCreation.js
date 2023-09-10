const express = require('express');
const router = express.Router();

const storemiddleware = require("../middleware/StoreFront");
const guestcartcreationlogic = require("../controller/GuestCartCreationLogic");


router.post('/:productId',storemiddleware,guestcartcreationlogic);

module.exports = router;
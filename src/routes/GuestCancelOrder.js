const express = require('express');
const router = express.Router();

const adminmiddleware = require("../middleware/Admin");
const guestcancelorderlogic = require("../controller/GuestCancelOrderLogic");


router.post('/:orderId',adminmiddleware,guestcancelorderlogic);

module.exports = router;
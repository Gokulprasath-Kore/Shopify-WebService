const express = require('express');
const router = express.Router();

const storemiddleware = require("../middleware/StoreFront");
const guestcheckoutlogic = require("../controller/GuestCheckoutLogic");


router.post('/:productId',storemiddleware,guestcheckoutlogic);

module.exports = router;
const express = require('express');
const router = express.Router();

const storemiddleware = require("../middleware/StoreFront");
const guestcartviewinglogic = require("../controller/GuestCartViewingLogic");


router.get('/:cartUrl',storemiddleware,guestcartviewinglogic);

module.exports = router;
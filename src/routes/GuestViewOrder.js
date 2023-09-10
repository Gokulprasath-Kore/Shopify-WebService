const express = require('express');
const router = express.Router();

const adminmiddleware = require("../middleware/Admin");
const guestvieworderlogic = require("../controller/GuestViewOrderLogic");


router.get('/:checkoutToken',adminmiddleware,guestvieworderlogic);

module.exports = router;
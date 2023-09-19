const express = require('express');
const router = express.Router();

const orderhistorylogic = require("../controller/OrderHistoryLogic");


router.get('/:customerId',orderhistorylogic);

module.exports = router;
const express = require('express');
const router = express.Router();

const newusermiddleware = require("../middleware/NewUser");
const signuplogic = require("../controller/SignupLogic");


router.post('/',newusermiddleware,signuplogic);

module.exports = router;
const express = require('express');
const sellerController = require('../controllers/sellerController');

const router = express.Router();

router.get("/profile", sellerController.getSellerProfile);
router.post("/", sellerController.createSeller);
router.get("/", sellerController.getAllSellers);
router.patch("/", sellerController.updateSeller);
router.post("/verify/login-otp", sellerController.verifyLoginOtp);

module.exports = router;
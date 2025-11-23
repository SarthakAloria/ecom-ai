const express = require('express');
const sellerController = require('../controllers/sellerController');

const router = express.Router();

router.patch("/seller/:id/status/:status", sellerController.updateSellerAccountStatus);

module.exports = router;
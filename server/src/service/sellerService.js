const Seller = require("../models/seller");


class SellerService {
    async getSellerProfile(jwt) {

    }

    async getSellerByEmail(email) {
        const seller = await Seller.findOne({ email: email });
    }
}
const Address = require("../models/address");
const Seller = require("../models/seller");
const jwtProvider = require("../utils/jwtProvider");
const JwtProvider = require("../utils/jwtProvider");

class SellerService {
    async createSeller(sellerData) {
        const existingSeller = await Seller.findOne({ email: sellerData.email });
        if (existingSeller) {
            throw new Error("Email already registered");
        }

        let savedAddress = sellerData.pickupAddress;

        savedAddress = await Address.create(sellerData.pickupAddress);

        const newSeller = new Seller({
            sellerName: sellerData.sellerName,
            email: sellerData.email,
            password: sellerData.password,
            pickupAddress: savedAddress._id,
            GSTIN: sellerData.GSTIN,
            mobile: sellerData.mobile,
            bankDetails: sellerData.bankDetails,
            buisnessDetails: sellerData.buisnessDetails
        })

        return await newSeller.save();
    }

    async getSellerProfile(jwt) {
        const email = jwtProvider.getEmailFromJwt(jwt);
        return this.getSellerByEmail(email);
    }

    async getSellerByEmail(email) {
        const seller = await Seller.findOne({ email: email });
        if (!seller) {
            throw new Error("Seller not found");
        }
        return seller;
    }

    async getSellerById(id) {
        const seller = await Seller.findById(id);
        if (!seller) {
            throw new Error("Seller not found");
        }
        return seller;
    }

    async getAllSellers(status) {
        return await Seller.find({ accountStatus: status });
    }

    async updateSeller(existingSeller, sellerData) {
        return await Seller.findByIdAndUpdate(existingSeller._id, sellerData, { new: true });
    }

    async updateSellerStatus(sellerId, status) {
        return await Seller.findByIdAndUpdate(sellerId, { $set: { accountStatus: status } }, { new: true });
    }

    async deleteSeller(sellerId) {
        return await Seller.findByIdAndDelete(sellerId);
    }
}

module.exports = new SellerService();
const { default: mongoose } = require("mongoose");
const userRoles = require("../domain/userRole");
const accountStatus = require("../domain/accountStatus");

const sellerSchema = new mongoose.Schema({
    sellerName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    buisnessDetails: {
        buisnessName: {
            type: String,
            required: true
        },
        buisnessEmail: {
            type: String,
            required: true,
            unique: true
        },
        buisnessMobile: {
            type: String
        },
        buisnessAddress: {
            type: String
        }
    },
    bankDetails: {
        accountNumber: {
            type: String,
            required: true
        },
        accountHolderName: {
            type: String,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
        ifscCode: {
            type: String,
            required: true
        }
    },
    pickUpAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    GSTIN: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [userRoles.SELLER],
        default: userRoles.SELLER
    },
    accountStatus: {
        type: String,
        enum: [
            accountStatus.PENDING_VERIFICATION,
            accountStatus.ACTIVE,
            accountStatus.SUSPENDED,
            accountStatus.DEACTIVATED,
            accountStatus.BANNED,
            accountStatus.CLOSED
        ],
        default: accountStatus.PENDING_VERIFICATION
    }
}, { timestamps: true });

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
const { default: mongoose } = require("mongoose");

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
            type: String,
        },
        buisnessAddress: {
            type: String,
        }
    },
    bankDetails: {
        accountNumber: {
            type: String,
            required: true,
        },
        accountHolderName: {
            type: String,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        ifscCode: {
            type: String,
            required: true,
        }
    },
    pickUpAddress: {
        type: mongoose.Schema.Types.ObjectId,
    },
});
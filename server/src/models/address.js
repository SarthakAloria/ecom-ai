const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
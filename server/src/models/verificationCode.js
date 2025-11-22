const { default: mongoose } = require("mongoose");

const verificationCodeSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const VerificationCode = mongoose.model("VerificationCode", verificationCodeSchema);

module.exports = VerificationCode;
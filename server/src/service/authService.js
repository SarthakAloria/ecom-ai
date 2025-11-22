const Seller = require("../models/seller");
const VerificationCode = require("../models/verificationCode");
const generateOTP = require("../utils/generateOtp");

class AuthService {
    async sendLoginOTP(email) {
        const seller = await Seller.findOne({ email: email });

        if (!seller) throw new Error("User not found");

        const existingVerificationCode = await VerificationCode.findOne({ email: email });

        if (existingVerificationCode) {
            await VerificationCode.deleteOne({ email: email });
        }

        const otp = generateOTP();
        const verificationCode = new VerificationCode({ email: email, otp: otp });
        await verificationCode.save();

        // send email to user with the OTP
        
    }
}
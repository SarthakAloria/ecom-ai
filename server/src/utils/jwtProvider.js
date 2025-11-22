const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

class JwtProvider {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    createJwt(payload) {
        return jwt.sign(payload, this.secretKey, { expiresIn: '24h' });
    }

    getEmailFromJwt(token) {
        try {
            const decodedToken = jwt.verify(token, this.secretKey);
            return decodedToken.email;
        } catch (err) {
            throw new Error('Invalid or expired JWT');
        }
    }

    verifyJwt(token) {
        try {
            jwt.verify(token, this.secretKey);
            return true;
        } catch (err) {
            throw new Error('Invalid or expired JWT');
        }
    }
}

module.exports = new JwtProvider(secretKey);
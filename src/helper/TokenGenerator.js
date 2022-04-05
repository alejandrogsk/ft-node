const jwt = require("jsonwebtoken");

const TokenGenerator = async (data) => {
    const secret  =  process.env.JWT_KEYWORD || "tokenTest";
    const token = await jwt.sign(JSON.stringify(data) , secret);
    return token;
}

module.exports = TokenGenerator;
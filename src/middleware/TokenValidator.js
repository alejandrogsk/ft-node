const jwt = require('jsonwebtoken');


const TokenValidator = async (req, res, next) => {
    try {
        const token = req.header("x-token");
        if (!token)
            return res.status(401).json({
                ok: false,
                message: "Access denied, you should authenticate",
            });

        const payload = await jwt.verify(
            token,
            process.env.JWT_KEYWORD || "tokenTest"
        );

        req.userId = payload._id;
        next();
    } catch (err) {
        res.status(401).json({ ok: false, message: "token is required" });
    }
};

module.exports = TokenValidator
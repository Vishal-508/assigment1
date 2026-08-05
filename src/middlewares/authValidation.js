const jwt = require("jsonwebtoken");
let secretKey = process.env.secret_key;

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    };

    
    const decoded = jwt.verify(token, secretKey);

    if (!decoded) {
        return res.status(400).send("please login again.");
    };

    console.log("decoded", decoded);
    
    req.user = decoded;
    // Here you would typically verify the token
    next();
};

module.exports = authMiddleware;
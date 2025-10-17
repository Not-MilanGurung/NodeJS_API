const jwt = require('jsonwebtoken');
const config = require('../configs/config');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    // console.log(token);
    if (!token){
        return res.status(401).json({ error: 'Access denied'});
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (error) { 
        console.error("Invalid token ", error)
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;
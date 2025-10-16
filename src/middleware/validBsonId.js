const ObjectId = require('mongoose').Types.ObjectId;

const validBsonId = (req, res, next) => {
    try {
        const { id } = req.params;
        
        if(!ObjectId.isValid(id)){
            return res.status(400).json({ error: "Invalid id" });
        }
        next();
    }
    catch (error) {
        console.error("Error validating BsonId:",error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
}

module.exports = validBsonId;
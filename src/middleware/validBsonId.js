const ObjectId = require('mongoose').Types.ObjectId;

const validBsonId = (req, res, next) => {
    try {
        const { id, postId } = req.params;
        
        if (!id && !postId) {
            console.log(id, postId);
            return res.status(400).json({ error: "Invalid id" });
        }
        if (id){
            if(!ObjectId.isValid(id)){
                return res.status(400).json({ error: "Invalid id" });
            }
        }

        if (postId) {
            if(!ObjectId.isValid(postId)){
                return res.status(400).json({ error: "Invalid post id" });
            }
        }
        next();
    }
    catch (error) {
        console.error("Error validating BsonId:",error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
}

module.exports = validBsonId;
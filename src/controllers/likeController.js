const Like = require('../models/likeModel');
const Post = require('../models/postModel');

const likePost = async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ error: "Could not find post" });
        }
        const existingLike = await Like.findOne({user: userId, post: id});
        if (existingLike) {
            return res.status(400).json({ error: "You have already liked the post"});
        }

        const like = new Like({
            post: id,
            user: userId
        });

        await like.save();

        return res.status(200).json({ message: "Post successfully liked", like });

    } catch (error) {
        console.error("Error liking post:", error);
        return res.status(500).json({ error: "Internal server error. Try again later." });
    }
};

const unlikePost = async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;

        const like = await Like.findOne({ user: userId, post: id});
        if (!like) {
            return res.status(400).json({ error: "You have not liked this post or post doesn't exist" });
        }
        
        await like.deleteOne();

        return res.status(200).json({ message: "Unliked the post successfully"});

    } catch (error) {
        console.error("Error unliking post:",error);
        return res.status(500).json({ error: "Internal server error. Try again later." });
    }
};

const getLikesofPost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ error: "Could not find post" });
        }
        const likes = await Like.countDocuments({ post: id });

        return res.status(200).json({ message: "Feteched the number of likes", postId: id, likes});

    } catch (error) {
        console.error("Error fetching likes:",error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

module.exports = { likePost, unlikePost, getLikesofPost }
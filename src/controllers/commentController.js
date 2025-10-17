const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

const createComment = async (req, res) => {
    try {
        const userId = req.userId;
        const { postId } = req.params;
        const { content } = req.body;

        if (!content || !postId) {
            return res.status(400).json({ error: "Insuffecient fields" });
        }

        const post = Post.findById(postId);
        if (!post) {
            return res.status(400).json({ error: "Could not find the post" });
        }

        const comment = new Comment({
            post: postId,
            user: userId,
            content: content
        });

        await comment.save();

        return res.status(200).json({ message: "Comment created succesfully", comment});
        
    } catch (error) {
        console.error("Error creating comment:",error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

const updateComment = async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: "Content field is required" });
        }

        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: "Could not find the comment" });
        }

        if (!comment.user.equals(userId)) {
            return res.status(403).json({ error: "Only the original user can update the comment" });
        }

        comment.content = content;
        await comment.save();

        return res.status(200).json({ message: "Comment updated succesfully", comment});

    } catch (error) {
        console.error("Error updateing comment:",error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

const deleteComment = async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;

        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: "Could not find the comment" });
        }

        if (!comment.user.equals(userId)) {
            return res.status(403).json({ error: "Only the original user can delete the comment" });
        }

        await comment.deleteOne();

        return res.status(200).json({ message: "Delete the comment succesfully" });

    } catch (error) {
        console.error("Error deleteing comment:",error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

const getCommentsOfPost = async (req, res ) => {
    try {
        const { postId } = req.params;

        const post = Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Could not find post" });
        }
        const comments = await Comment.find({ post: postId });

        return res.status(200).json({ message: "Feteched comments successfullly", comments});
    } catch (error) {
        console.error("Error fetching comments of post:", error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

module.exports = { createComment, updateComment, deleteComment, getCommentsOfPost };
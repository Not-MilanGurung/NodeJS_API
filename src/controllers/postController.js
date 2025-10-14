const Post = require('../models/postModel');

const createPost = async (req, res) => {
    try {
        const userId = req.userId;
        const {title, content} = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: "All fields are required"});
        }

        const post = new Post({
            title,
            content,
            author: userId
        });

        await post.save();
        res.status(201).json({ message: "Post created succesfully", postId: post._id });
    }
    catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};

const updatePost = async (req, res) => {
    try{
        const userId = req.userId;
        const { id } = req.params;
        const { title, content } = req.body;

        if (!title && !content) {
            return res.status(400).json({ error: "An updated field is required"});
        }

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (post.author.equals(id)) {
            return res.status(401).json({ error: 'Only the author can update the post'});
        }

        if (title){
            post.title = title;
        }
        if (content) {
            post.content = content;
        }

        post.save();

        return res.status(200).json({ message: 'Post updated successfully', post});
    }
    catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};

const deletePost = async (req, res) => {

};

const getAllPosts = async (req, res) => {

};

const getPostById = async (req, res) => {

};

module.exports = { createPost, updatePost, deletePost, getAllPosts, getPostById };
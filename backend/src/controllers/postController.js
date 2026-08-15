const imagekit = require("../config/imagekit");
const Post = require("../models/Post");

//   Create a post
//   POST /api/posts
const createPost = async (req, res) => {
  try {
    const { title, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "An image file is required" });
    }
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const uploaded = await imagekit.upload({
      file: req.file.buffer, // multer memoryStorage gives us the raw buffer
      fileName: req.file.originalname,
      folder: "/mern-image-app",
      useUniqueFileName: true,
    });

    const post = await Post.create({
      user: req.user._id,
      title,
      category: category || "",
      imageUrl: uploaded.url,
      imageFileId: uploaded.fileId,
    });

    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error: error.message });
  }
};

//    the logged-in user's see their posts (never anyone else's)
//   GET /api/posts
const getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
};

//   Delete a post 
//   DELETE /api/posts/:id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, user: req.user._id });

    if (!post) {
    
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.imageFileId) {
      //  if ImageKit errors
      try {
        await imagekit.deleteFile(post.imageFileId);
      } catch (err) {
        console.error("ImageKit delete failed:", err.message);
      }
    }

    // Delete the post from the database
    await post.deleteOne();
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error: error.message });
  }
};

module.exports = { createPost, getMyPosts, deletePost };

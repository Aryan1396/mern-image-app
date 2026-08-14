const express = require("express");
const { createPost, getMyPosts, deletePost } = require("../controllers/postController");
const protect = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// All post routes require a logged-in user
router.use(protect);

router.get("/", getMyPosts);
router.post("/", upload.single("image"), createPost);
router.delete("/:id", deletePost);

module.exports = router;

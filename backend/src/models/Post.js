const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // fast lookups filtered by owner
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: 100,
    },
   
    category: {
      type: String,
      trim: true,
      maxlength: 50,
      default: "",
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageFileId: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);

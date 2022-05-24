const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  comment: {
    total: Number,
    commentBy: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      comment: String,
    },],
  },
  likes: {
    total: Number,
    likeBy: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    },],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    required: true,
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true,
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
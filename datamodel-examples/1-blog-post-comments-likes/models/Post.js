const mongoose = require("mongoose")
const { Schema, model } = mongoose

const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  // store which author (=user Id) is the creator of that post
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  // store which users liked this post (=> array of user IDs)
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Post = model("Post", PostSchema)

module.exports = Post


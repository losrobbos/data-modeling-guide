const mongoose = require("mongoose")
const { Schema, model } = mongoose

const CommentSchema = new Schema({
  text: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' }, // store to which post (ID) this comment belongs
  author: { type: Schema.Types.ObjectId, ref: 'User' }, // author of comment (= userId)
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }] // array of likers (= usersIds)
})

const Comment = model("Comment", CommentSchema)

module.exports = Comment
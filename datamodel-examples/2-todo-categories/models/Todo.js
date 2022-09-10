const mongoose = require("mongoose")
const { Schema, model } = mongoose

const TodoSchema = new Schema({
  text: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
  // one todo can belong to multiple categories 
  // if the todo should just have one category, simply setup a ref to one only (without array):
    // category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

const Todo = model("Todo", TodoSchema)

module.exports = Todo
const mongoose = require("mongoose")
const { Schema, model } = mongoose

const CategorySchema = new Schema({
  title: { type: String, required: true }
  // we could store an array of refs to Todos here too...
  // todos: [{ ref: 'Todo', type: Schema.Types.ObjectId }]
    // this way we could look up all todos of a certain category easily...
})

const Category = model("Category", CategorySchema)

module.exports = Category
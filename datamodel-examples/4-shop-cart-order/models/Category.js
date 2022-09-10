const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Category = model("Category", CategorySchema);

module.exports = Category;

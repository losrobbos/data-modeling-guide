const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    descrption: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    // in case you want that products can be listed in MULTIPLE categories - use the line below instead:
    // categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = model("Product", ProductSchema);

module.exports = Product;

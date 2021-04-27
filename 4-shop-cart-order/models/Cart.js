const mongoose = require("mongoose")
const { Schema, model } = mongoose

const CartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
})

const CartSchema = new Schema({
  items: [CartItemSchema] // any Cart contains at least one or multiple products
}, 
{ 
  timestamps: true // track when cart was created / items were updated
}) 

const Cart = model("Cart", CartSchema)

module.exports = Cart
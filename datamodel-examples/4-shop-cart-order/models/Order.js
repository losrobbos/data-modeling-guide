const mongoose = require("mongoose")
const { Schema, model } = mongoose

const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
})

const OrderSchema = new Schema({
  date: { type: Date, default: Date.now },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  payment: { type: String, default: 'cash', enum: ['cash', 'creditcard', 'paypal', 'bitcoin'] },
  items: [OrderItemSchema] // any order contains at least one or multiple products
}, 
{ 
  timestamps: true 
})

const Order = model("Order", OrderSchema)

module.exports = Order
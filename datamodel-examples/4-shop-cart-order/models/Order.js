const mongoose = require("mongoose")
const { Schema, model } = mongoose
const AddressSchema = require("./Address");

// this holds a order product with quantity
const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
})

const OrderSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    payment: {
      type: String,
      default: "cash",
      enum: ["cash", "creditcard", "paypal", "bitcoin"],
    },
    items: [OrderItemSchema], // order can contain multiple products
    address: { type: AddressSchema, required: true },
    deliveryAddress: AddressSchema, // optional: separate delivery address
    billingAddress: AddressSchema, // optional: separate billing address
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Order = model("Order", OrderSchema)

module.exports = Order
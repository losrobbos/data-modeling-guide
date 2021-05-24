const mongoose = require("mongoose")
const { Schema, model } = mongoose

const AddressSchema = new Schema({
  streetNr: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true, default: 'Germany' }
}, { 
  _id: false // addresses should not have an ID field if I nest them somewhere...
})

const CustomerSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  deliveryAddress: AddressSchema, // optional separate delivery address
  billingAddress: AddressSchema, // optional, separate billing address
  // if you want to allow multiple delivery addresses per user you can simply use the following:
  // deliveryAddress: [AddressSchema]
})

const Customer = model("Customer", CustomerSchema)

module.exports = Customer



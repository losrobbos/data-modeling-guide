const mongoose = require("mongoose")
const { Schema, model } = mongoose
const AddressSchema = require("./Address")

const CustomerSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: [AddressSchema], // allow to manage multiple delivery addresses
})

const Customer = model("Customer", CustomerSchema)

module.exports = Customer



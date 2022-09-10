const AddressSchema = new Schema(
  {
    streetNr: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true, default: "Germany" },
  }
);

module.exports = AddressSchema
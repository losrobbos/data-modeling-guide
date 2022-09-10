const mongoose = require("mongoose")
const { Schema, model } = mongoose

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, },
  salary: { type: Number, required: true, default: 2000 },
  // we could map relation to projects like this...
  // projects: [ { type: mongoose.Types.ObjectId, ref: "Project" } ]
},{
  versionKey: false
})

const Employee = model("Employee", EmployeeSchema)

module.exports = Employee

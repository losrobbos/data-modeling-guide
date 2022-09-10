const mongoose = require("mongoose")
const { Schema, model } = mongoose

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  // we could map relation to employees like this...
  // employees: [ { type: mongoose.Types.ObjectId, ref: "Employee" } ] // store IDs of employee here
},{
  versionKey: false
})

const Project = model("Project", ProjectSchema)

module.exports = Project
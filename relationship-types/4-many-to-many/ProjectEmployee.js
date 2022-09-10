const mongoose = require("mongoose")
const { Schema, model } = mongoose

const ProjectEmployeeSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
},{
  versionKey: false
})

const ProjectEmployee = model("ProjectEmployee", ProjectEmployeeSchema)

module.exports = ProjectEmployee
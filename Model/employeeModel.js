/** @format */

let mongoose = require("mongoose");

let empSchema = mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: Number, required: true },
    authorId: { type: String, required: true },

  },
  { versionKey: false }
);

let EmpModel = mongoose.model("employee", empSchema);

module.exports = { EmpModel };

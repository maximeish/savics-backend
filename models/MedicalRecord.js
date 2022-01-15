const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recordSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    collection: "medical-records",
  }
);

module.exports = mongoose.model("MedicalRecord", recordSchema);

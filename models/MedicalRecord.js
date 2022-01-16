const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recordSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    hasDiabetes: {
      type: String,
    },
  },
  {
    collection: "medical-records",
  }
);

module.exports = mongoose.model("MedicalRecord", recordSchema);

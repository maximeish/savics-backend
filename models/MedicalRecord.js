const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recordSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    livingWithDiabetes: {
      type: String,
      required: true,
    },
  },
  {
    collection: "medical-records",
  }
);

module.exports = mongoose.model("MedicalRecord", recordSchema);

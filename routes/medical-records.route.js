let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Medical Record Model
let recordSchema = require("../models/MedicalRecord");

router.route("/").get((req, res) => {
  return res.status(200).json({ message: "Welcome. Try /create or /list" });
});

// CREATE Medical Record
router.route("/create").post((req, res, next) => {
  try {
    let record = new recordSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      age: req.body.age,
      country: req.body.country,
      city: req.body.city,
      livingWithDiabetes: req.body.livingWithDiabetes,
    });

    record.save((err, record) => {
      if (err)
        return res.json({ msg: "Failed to add record", err: err.message });
      else return res.json({ msg: "Record added successfully", record });
    });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Failed to add record", error: error.message });
  }
});

// GET Medical Records
router.route("/list").get((req, res) => {
  recordSchema.find((err, records) => {
    if (err) {
      return res.json({ msg: "Failed to get records", err: err.message });
    } else {
      return res.json({ msg: "Records fetched successfully", records });
    }
  });
});

// // Get Medical Records
// router.route("/list").get(async (req, res) => {
//   // get all records
//   try {
//     const records = await recordSchema.find();
//     return res.json(records);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error });
//   }
// });

// Update Medical Record
// router.route('/update/:id').put((req, res, next) => {
//   recordSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Medical Record updated successfully !')
//       }
//     },
//   )
// })

// Delete Medical Record
router.route("/delete/:id").delete((req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ msg: "Specified id is not valid" });
  }

  recordSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        message: `Record with id ${req.params.id} deleted successfully`,
      });
    }
  });
});

module.exports = router;

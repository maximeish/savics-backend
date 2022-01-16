let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Medical Record Model
let recordSchema = require("../models/MedicalRecord");

// CREATE Medical Record
router.route("/create").post((req, res, next) => {
  recordSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// GET Medical Records
router.route("/list").get((req, res) => {
  recordSchema.find((error, data) => {
    if (error) {
      return res.json({ error });
    } else {
      res.json(data);
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
// router.route('/delete/:id').delete((req, res, next) => {
//   recordSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

module.exports = router;

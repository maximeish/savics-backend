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

// READ Medical Records
router.route("/").get((req, res) => {
  recordSchema.find((error, data) => {
    if (error) {
      return res.json({ error });
    } else {
      res.json(data);
    }
  });
});

// Get Single Medical Record
router.route("/edit/:id").get((req, res) => {
  recordSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return res.json({ error });
    } else {
      res.json(data);
    }
  });
});

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

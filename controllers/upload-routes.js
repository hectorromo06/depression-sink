const router = require("express").Router();
const sequelize = require("../config/connection");
const multer = require("multer");
const withAuth = require("../utils/auth");

// router.get("/upload", (req, res) => {
//   res.send("Hello People");
// });

// // Image Upload
// const imageStorage = multer.diskStorage({
//   destination: "images", // Destination to store image
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "_" + Date.now() + path.extname(file.originalname)
//     );
//     // file.fieldname is name of the field (image), path.extname get the uploaded file extension
//   },
// });

// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 1000000, // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) {
//       // upload only png and jpg format
//       return cb(new Error("Please upload a Image"));
//     }
//     cb(undefined, true);
//   },
// });

// // For Single image upload
// router.post(
//   "/uploadImage",
//   imageUpload.single("image"),
//   (req, res) => {
//     res.send(req.file);
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// // For Multiple image uplaod
// router.post(
//   "/uploadBulkImage",
//   imageUpload.array("images", 4),
//   (req, res) => {
//     res.send(req.files);
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

router.post("/profile", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

router.post(
  "/photos/upload",
  upload.array("photos", 12),
  function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  }
);

const cpUpload = upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "gallery", maxCount: 8 },
]);
app.post("/cool-profile", cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
});

module.exports = router;

const { Post, User, Comment, Vote, Image } = require("../models");
const withAuth = require("../utils/auth");

const fs = require("fs");

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(__dirname + "../uploads/" + req.file.filename),
    }).then((image) => {
      fs.writeFileSync(__dirname + "../tmp/" + image.name, image.data);
      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
//uploadFiles();
module.exports = {
  uploadFiles,
};

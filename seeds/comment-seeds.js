
const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "You can do it!!",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
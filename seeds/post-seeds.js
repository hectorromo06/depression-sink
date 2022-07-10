const { Post } = require("../models");

const postdata = [
  {

    title: "Donec posuere metus vitae ipsum.",
    content: "this is a good idea.",
    data: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 1,
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
const { Post } = require("../models");

const postdata = [
  {
    title: "CANT DO THIS",
    post_url: "pix",
    user_id: 1,
  },
  {
    title: "Could I pay you 20 bucks to do these?",
    post_url: "pix",
    user_id: 2,
  },
  {
    title:
      "Doomed",
    post_url:
      "pix",
    user_id: 3,
  },
  {
    title:
      "been brewing for a week",
    post_url:
      "pix",
    user_id: 4,
  },
  {
    title:
      "i hate my roommate",
    post_url:
      "pix",
    user_id: 5,
  },
  {
    title:
      "i guess we have to do dishes until we die, rip off",
    post_url:
      "pix",
    user_id: 3,
  },
  {
    title:
      "CLEAN!!",
    post_url:
      "pix",
    user_id: 6,
  },
  {
    title:
      "bender",
    post_url:
      "pix",
    user_id: 10,
  },
  {
    title:
      "dgaf!",
    post_url:
      "pix",
    user_id: 7,
  },
  {
    title:
      "can someone just",
    post_url:
      "pix",
    user_id: 5,
  },
  {
    title:
      "crying cuz people have dish washers",
    post_url:
      "pix",
    user_id: 4,
  },
  {
    title:
      "nightmare",
    post_url:
      "pix",
    user_id: 8,
  },
  {
    title:
      "scrub daddys only",
    post_url:
      "pix",
    user_id: 7,
  },
  {
    title:
      "THIS IS A SCRUB MOMMY HOUSEHOLD",
    post_url:
      "pix",
    user_id: 5,
  },
  {
    title:
      "i give up",
    post_url:
      "pix",
    user_id: 4,
  },
  {
    title:
      "bye",
    post_url:
      "pix",
    user_id: 8,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

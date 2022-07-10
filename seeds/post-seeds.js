const { Post } = require("../models");

const postdata = [
  {
    title: "CANT DO THIS",
    image: "../resources/static/assets/uploads/one.jpg",
    user_id: 1,
  },
  {
    title: "Could I pay you 20 bucks to do these?",
    image: "../resources/static/assets/uploads/two.jpg",
    user_id: 2,
  },
  {
    title:
      "Doomed",
      image: "../resources/static/assets/uploads/three.jpg",
    user_id: 3,
  },
  {
    title:
      "been brewing for a week",
      image: "../resources/static/assets/uploads/four.jpg",
    user_id: 4,
  },
  {
    title:
      "i hate my roommate",
      image: "../resources/static/assets/uploads/five.jpg",
    user_id: 5,
  },
  {
    title:
      "i guess we have to do dishes until we die, rip off",
      image: "../resources/static/assets/uploads/six.jpg",
    user_id: 3,
  },
  {
    title:
      "CLEAN!!",
      image: "../resources/static/assets/uploads/seven.jpg",
    user_id: 6,
  },
  {
    title:
      "bender",
      image: "../resources/static/assets/uploads/eight.jpg",
    user_id: 10,
  },
  {
    title:
      "dgaf!",
      image: "../resources/static/assets/uploads/nine.jpg",
    user_id: 7,
  },
  {
    title:
      "can someone just",
      image: "../resources/static/assets/uploads/ten.jpg",
    user_id: 5,
  },
  {
    title:
      "crying cuz people have dish washers",
      image: "../resources/static/assets/uploads/eleven.jpg",
    user_id: 4,
  },
  {
    title:
      "nightmare",
      image: "../resources/static/assets/uploads/twelve.jpg",
    user_id: 8,
  },
  {
    title:
      "scrub daddys only",
      image: "../resources/static/assets/uploads/thirteen.jpg",
    user_id: 7,
  },
  {
    title:
      "THIS IS A SCRUB MOMMY HOUSEHOLD",
      image: "../resources/static/assets/uploads/fourteen.jpg",
    user_id: 5,
  },
  {
    title:
      "i give up",
      image: "../resources/static/assets/uploads/fifteen.jpg",
    user_id: 4,
  },
  {
    title:
      "bye",
      image: "../resources/static/assets/uploads/sixteen.jpg",
    user_id: 8,
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
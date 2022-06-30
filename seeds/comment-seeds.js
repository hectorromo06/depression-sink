const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "You can do it!!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "i seen worse",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "maybe $50",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "aren't we all",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text:
      "musty",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "yikes!!",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "WAY TO GO!!",
    user_id: 10,
    post_id: 7,
  },
  {
    comment_text:
      "teach me you ways",
    user_id: 9,
    post_id: 7,
  },
  {
    comment_text: "facts",
    user_id: 8,
    post_id: 6,
  },
  {
    comment_text: "hurricane",
    user_id: 1,
    post_id: 8,
  },
  {
    comment_text:
      "yolo",
    user_id: 9,
    post_id: 9,
  },
  {
    comment_text: "life is so unfair",
    user_id: 8,
    post_id: 10,
  },
  {
    comment_text: "dramatic",
    user_id: 7,
    post_id: 11,
  },
  {
    comment_text:
      "roomates are a scam!!",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "what's it like to be perfect?",
    user_id: 9,
    post_id: 7,
  },
  {
    comment_text: "whats the meaning of life?",
    user_id: 3,
    post_id: 6,
  },
  {
    comment_text:
      "daddy gang",
    user_id: 2,
    post_id: 13,
  },
  {
    comment_text: "ikyfl.",
    user_id: 4,
    post_id: 13,
  },
  {
    comment_text: "IKDR",
    user_id: 4,
    post_id: 14,
  },
  {
    comment_text:
      "welcome home",
    user_id: 2,
    post_id: 15,
  },
  {
    comment_text: "its giving, patriarchy",
    user_id: 3,
    post_id: 13,
  },
  {
    comment_text: "ITS GIVING GIRL BOSS",
    user_id: 1,
    post_id: 14,
  },
  {
    comment_text:
      "with all due respect, he's the founding father of the scrub empire",
    user_id: 5,
    post_id: 13,
  },
  {
    comment_text: "MOMMY SUPREMECY",
    user_id: 2,
    post_id: 14,
  },
  {
    comment_text: "abe lincoln of sponges",
    user_id: 10,
    post_id: 13,
  },
  {
    comment_text:
      "Spongebob is my founding father",
    user_id: 4,
    post_id: 13,
  },
  {
    comment_text: "Patrick, Spongebob, Gary and Sandy for mt rushmore 2024",
    user_id: 10,
    post_id: 13,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

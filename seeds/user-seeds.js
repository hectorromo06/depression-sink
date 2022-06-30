const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "gmzaka",
    email: "gmz@apple.com",
    password: "abc123",
  },
  {
    username: "jboo",
    email: "jeralyn@drax.com",
    password: "abc123",
  },
  {
    username: "heezy",
    email: "hector@peanut.org",
    password: "abc123",
  },
  {
    username: "macykcool",
    email: "mkcool@apple.com",
    password: "abc123",
  },
  {
    username: "jester",
    email: "beard@marvel.com",
    password: "abc123",
  },
  {
    username: "divad",
    email: "david@gmail.com",
    password: "abc123",
  },
  {
    username: "skoginthemachine",
    email: "ryskog@apple.com",
    password: "abc123",
  },
  {
    username: "rocky",
    email: "phil@chicago.com",
    password: "abc123",
  },
  {
    username: "bajaman",
    email: "who@letemout.org",
    password: "abc123",
  },
  {
    username: "plankton",
    email: "pine@apple.com",
    password: "abc123",
  },
  {
    username: "gritty",
    email: "flyers@kind.com",
    password: "abc123",
  },
  {
    username: "dishoffender#1",
    email: "analiza@peanut.org",
    password: "abc123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;

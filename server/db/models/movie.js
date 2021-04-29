const Sequelize = require('sequelize');
const db = require('../db');

const Movie = db.define('movie', {
  original_title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  popularity: Sequelize.FLOAT,
  vote_average: Sequelize.FLOAT,
  poster_path: Sequelize.TEXT,
});

module.exports = Movie;

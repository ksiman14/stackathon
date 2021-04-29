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
  popularity: {
    type: Sequelize.FLOAT,
  },
});

module.exports = Movie;

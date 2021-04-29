//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/user');
const Movie = require('./models/movie');
const Genre = require('./models/genre');

//associations could go here!
Movie.belongsToMany(Genre, { through: 'category' });
Genre.belongsToMany(Movie, { through: 'category' });

module.exports = {
  db,
  models: {
    User,
    Movie,
    Genre,
  },
};

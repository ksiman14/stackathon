const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  db,
  models: { Movie },
} = require('../db');

// api/movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

// api/movies/popular
router.get('/popular', async (req, res, next) => {
  try {
    const movies = await db.query(
      'SELECT * FROM MOVIES ORDER BY POPULARITY DESC LIMIT 5',
      {
        model: Movie,
      }
    );
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

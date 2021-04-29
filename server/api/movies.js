const router = require('express').Router();
const {
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
    res.json([{ id: 5, original_title: 'Fake Movie' }]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

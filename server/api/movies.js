const router = require('express').Router();
const {
  db,
  models: { Movie, Genre },
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

// api/movies/:genre
router.get('/:genre', async (req, res, next) => {
  try {
    const movies = await Movie.findAll(
      {
        include: [{ model: Genre }],
      },
      {
        where: {
          name: req.params.genre,
        },
      }
    );
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

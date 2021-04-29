const router = require('express').Router();
const {
  models: { Movie, Genre },
} = require('../db');

//api/genres
router.get('/', async (req, res, next) => {
  try {
    const genres = await Genre.findAll({
      include: [{ model: Movie }],
    });
    res.json(genres);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

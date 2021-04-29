const router = require('express').Router();
module.exports = router;

router.use('/genres', require('./genres'));

router.use('/movies', require('./movies'));

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

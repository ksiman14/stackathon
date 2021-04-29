'use strict';
const axios = require('axios');
const movieData = require('./raw_data/movie_ids');
const chars = /^[a-zA-Z0-9- :;]*$/;
const regex = new RegExp(chars);

const {
  db,
  models: { User, Movie, Genre },
} = require('../server/db');

const seedMovies = movieData.filter(
  (movie) =>
    !movie.adult && movie.popularity > 50 && regex.test(movie.original_title)
);

async function seed() {
  await db.sync({ force: true });

  console.log('db synced!');

  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);

  const { data: genreData } = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=b1e7617c6bf37a866b82743818909879&language=en-US'
  );
  const genres = await Promise.all(
    genreData.genres.map((genre) => Genre.create(genre))
  );

  const movies = await Promise.all(
    seedMovies.map((movie) => Movie.create(movie))
  );

  await Promise.all(
    movies.map(async (movie) => {
      const current = await Movie.findByPk(movie.id);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=b1e7617c6bf37a866b82743818909879&language=en-US`
      );
      data.genres.forEach((genre) => {
        current.addGenre(genre.id);
      });
      await current.update(data);
    })
  );

  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

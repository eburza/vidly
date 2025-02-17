const movieDatabase = require('../lib/movie-db');

async function getMovieGenres() {
    const movieGenres = await movieDatabase.getGenres();
    return movieGenres;
}

async function run() {
    try {
        const movieGenres = await getMovieGenres();
        console.log(movieGenres);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

run();

module.exports = getMovieGenres
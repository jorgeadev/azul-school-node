const moviesMocks = require("../utils/mocks/moviesMocks");

class MoviesServices {
    async getMoviesServices() {
        const movies = await Promise.resolve(moviesMocks);
        return movies || [];
    };

    async getOneMoviesServices(movieId) {
        const movie = await Promise.resolve(moviesMocks);
        return movie || [];
    };

    async createMovieServices(id) {
        const createMovie = await Promise.resolve(moviesMocks.movies);
        return createMovie[0] || {};
    };

    async updateMovieServices(id) {
        const updatedMovie = await Promise.resolve(moviesMocks.movies);
        return updatedMovie.id;
    };

    async deleteMovieServices(id) {
        const deleteMovie = await Promise.resolve(moviesMocks.movies);
        return deleteMovie.id;
    };
}

module.exports = MoviesServices;

const moviesMocks = require("../utils/mocks/moviesMocks");
const Movie = require("../models/MoviesModel");

class MoviesServices {
    async getAllMoviesServices(tags) {
        if (tags) {
            const query = { tags: {$in: tags} }
            const movies = await Movie.find(query);
            return movies || [];
        } else {
            const movies = await Movie.find();
            return movies || [];
        }
    };

    async getOneMoviesServices(movieId) {
        const movie = await Movie.findById(movieId);
        return movie || [];
    };

    async createMovieServices(movie) {
        // console.log(movie);
        const createMovie = await Movie.create(movie);
        return createMovie || {};
    };

    async updateMovieServices({ movieId, movie }) {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, { new: true });
        return updatedMovie.id;
    };

    async deleteMovieServices(movieId) {
        try {
            // const deleteMovie = await Movie.findOneAndDelete({ _id: movieId });
            const deleteMovie = await Movie.findByIdAndDelete( movieId );
            return deleteMovie.id;
        } catch (error) {
            console.log(error);
            return { message: "Movie can't found!" }
        }
    };
}

module.exports = MoviesServices;

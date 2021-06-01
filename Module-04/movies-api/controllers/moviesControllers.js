const MoviesServices = require('../services/movieServices');
const moviesServices = new MoviesServices();


const getAllMovies = async (req, res, next) => {
    const { tags } = req.query;
    try {
        const movies = await moviesServices.getAllMoviesServices(tags);
        res.status(200).json({
            data: movies,
            message: 'All movies loaded successfully!'
        });
    }catch (err) {
        next(err);
    }
};

const getOneMovie = async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await moviesServices.getOneMoviesServices(movieId);
        res.status(200).json({
            data: movie,
            message: 'Movie loaded successfully!'
        });
    }catch (err) {
        next(err);
    }
};

const createMovie = async (req, res, next) => {
    const { body: movie } = req;
    const createMovie = await moviesServices.createMovieServices(movie);
    try {
        res.status(201).json({
            data: createMovie,
            message: 'Movie created successfully!'
        });
    } catch (err) {
        next(err);
    }
};

const updateMovie = async (req, res, next) => {
    const { body:movie } = req;
    const { movieId } = req.params;
    const updateMovie = await moviesServices.updateMovieServices({ movieId, movie });
    try {
        res.status(200).json({
            data: updateMovie,
            message: 'Movie updated successfully!'
        });
    } catch (err) {
        next(err);
    }
};

const deleteMovie = async (req, res, next) => {
    const { movieId } = req.params;
    const deleteMovie = await moviesServices.deleteMovieServices( movieId );
    try {
        res.status(201).json({
            data: deleteMovie,
            message: 'Movie delete successfully!'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie
};

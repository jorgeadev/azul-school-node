const express = require('express');
const { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviesControllers');

function moviesAPI(app) {
    /* CRUD */
    const router = express.Router();

    /***** READ *****/
    app.use('/api/movies', router);
    router.get('/', getAllMovies);

    /***** READ ONE MOVIE *****/
    router.get('/:movieId', getOneMovie);

    /***** CREATE *****/
    router.post('/', createMovie);

    /***** UPDATE *****/
    router.put('/:movieId', updateMovie);

    /***** DELETE *****/
    router.delete('/:movieId', deleteMovie);
}

module.exports = moviesAPI;

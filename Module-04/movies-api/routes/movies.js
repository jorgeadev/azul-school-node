const express = require('express');
const { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie, getMovies } = require('../controllers/moviesControllers');

function moviesAPI(app) {
    /* CRUD */
    const router = express.Router();

    app.use('/api/movies', router);

    /***** READ ALL MOVIES *****/
    router.get('/', getAllMovies);

    /***** READ ONE MOVIE *****/
    router.get('/:movieId', getOneMovie);

    /***** CREATE MOVIE *****/
    router.post('/', createMovie);

    /***** UPDATE MOVIE *****/
    router.put('/:movieId', updateMovie);

    /***** DELETE MOVIE *****/
    router.delete('/:movieId', deleteMovie);
}

module.exports = moviesAPI;

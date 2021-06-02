const assert = require('assert');
const proxyquire = require('proxyquire');
const { movies, servicesMoviesMocks } = require('../utils/mocks/moviesMocks');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
    const route = proxyquire('../routes/movies', {
        '../controllers/moviesControllers':servicesMoviesMocks
    });
    const request = testServer(route);
    describe('GET /movies', () => {

        it('should respond with status 200', (done) => {
            request.get('/api/movies').expect(200);
            done();
        });

        it('should respond with the list of movies', (done) => {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: movies,
                    message: 'All movies loaded successfully!'
                });
            });
            done();
        });
    });
});


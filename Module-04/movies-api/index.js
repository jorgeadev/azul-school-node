const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const moviesAPI = require('./routes/movies');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = process.env.DB;

// Database Name
const dbName = 'course-node-azul-school';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server!');
    const db = client.db(dbName);
    client.close();
});
moviesAPI(app);

app.listen(PORT, () => {
    console.log(`Server running on port: ${ PORT } \nhttp://localhost:${ PORT }`);
});

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const moviesAPI = require('./routes/movies');
const mongoose = require('mongoose');
const url = process.env.DB;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(res => {
        console.log('Connected to database! ' + res.connections[0].name);
    }).catch(err => {
        console.log('Error to connect to database!');
    });

moviesAPI(app);

app.listen(PORT, () => {
    console.log(`Server running on port: ${ PORT } \nhttp://localhost:${ PORT }`);
});

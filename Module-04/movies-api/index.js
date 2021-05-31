const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const moviesAPI = require('./routes/movies');
const mongoose = require('mongoose');
const url = process.env.DB;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Vito Firulito' });
kitty.save().then(() => console.log('meow'));

moviesAPI(app);

app.listen(PORT, () => {
    console.log(`Server running on port: ${ PORT } \nhttp://localhost:${ PORT }`);
});

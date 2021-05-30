const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello, world with express!');
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/form', (req, res) => {
    const { name, age } = req.body;
    console.log('hello: ' + name);
});

app.get('/courses/:course', (req, res) => {
    const { course } = req.params;
    switch (course) {
        case 'node': res.send('Welcome to Node course');
        break;
        case 'react': res.send('Welcome to React course');
        break;
        case 'api':
            res.json({ name: 'Api course', length: '120 min' })
            res.end();
            break;
        default: res.send('This course not exists');
    }
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})

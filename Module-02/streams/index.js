const fs = require('fs');

const server = require('http').createServer();

/*server.on('request', (req, res) => {
    const file = fs.readFileSync('./bigFile.txt', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    });

})
server.listen(3000, () => {
    console.log('server on port 3000 listening');
});

// console.log(file.length);*/

/*const file = fs.readFileSync('./bigFile.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.length);
    }
});*/


/*// How work intern a stream
const file = fs.createReadStream('./bigFile.txt', 'utf-8')
let data = '';

file.once('data', () => {
    console.log('Here start the stream');
});

file.on('data', (chunks) => {
    console.log('Chunk size: ' + chunks.length);
    data = data + chunks
})

file.on('end', () => {
    console.log('Finish the streaming');
    console.log('Size: ' + data.length);
})*/

server.on('request', (req, res) => {
    const file = fs.createReadStream('./bigFile.txt', 'utf-8')
    file.pipe(res);
});

server.listen(3000, () => {
    console.log('server on port 3000 listening');
});

const fs = require('fs');

const data = `Vamos a ver si esto que estoy
haciendo funciona para guardarlo 
dentro de un archivo .txt
`

/*fs.exists('./song.txt', (res) => {
    if (res) {
        console.log('File already exists');
    }else {
        fs.writeFile('./song.txt', data, err => {
            if (err) throw err
            console.log('File created successfully');
        });
    }
});

console.log(
    fs.exists('./song.txt', (res) => {console.log(res);})
);*/

/*const file = 'song23.txt';

fs.open(file, 'wx', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('File already exists');
            return;
        }
        throw err;
    }
    try {
        fs.writeFile(file, data, err => {
            if (err) throw err
            console.log('File created successfully');
        });
    } finally {
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    }
});*/

/*
const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
    fs.stat(pathsToCheck[i], (err, stats) => {
        // console.log(stats.isDirectory());
        console.log(stats);
    });

}
*/

const file = 'package.json';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(
            `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    } else {
        console.log(`${file} exists, and it is writable`);
    }
});


fs.mkdir('files/newFile', {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})

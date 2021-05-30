const fs = require('fs');

/*const file = fs.createWriteStream('./bigFile.txt');
for (let i = 0; i <= 1e6; i++) {
    file.write('camaron, caramelo, caramelo, camaron')
}
file.end();*/

fs.stat('./bigFile.txt', (err, status) => {
    if (err) {
        console.log(err);
    } else {
        console.log(status);
    }
});

const { Duplex, Transform } = require('stream');

const duplexString = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        if (this.character > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.character++));
    }
});

duplexString.character = 65;
process.stdin.pipe(duplexString).pipe(process.stdout)


const tramsformString = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(tramsformString).pipe(process.stdout);

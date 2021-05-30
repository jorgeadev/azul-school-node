let parents = false;

const carneAsada = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (parents) {
            resolve('Si se armo :D');
        } else {
            reject('no se armo D:');
        }
    }, 3000);
})

async function hacerCarnita() {
    try {
        let result = await carneAsada;
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// carneAsada.then((result) => {
//     console.log(result);
//     console.log('Comprar carnita');
// }).catch((error) => {
//     console.log(error);
// });

hacerCarnita();
console.log('Esperando...');

function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla...');
            /* resolve(nombre); */
            reject('Falla al hablar');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    });
}

// ---

console.log('iniciando el proceso')
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Temrinado el proceso')
    })
    .catch(error => {
        console.error('Ha habido un error: ' + error)
    })
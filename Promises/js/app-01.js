//Callback
//programaciòn asincrona, espera descarga, busqueda, etc. Obliga a tener esa respuesta para poder avanzar.

const paises = ['Francia', 'Belgica', 'España', 'Chile', 'Argentina'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 2000)
}


function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}

// mostrarPaises();
// nuevoPais('Alemania', mostrarPaises);

//Callback hell: repetitivo

function iniciarCallbackHell() {
    setTimeout(() => {
        //agregar un nuevo pais
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Lisboa', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Nicaragua', mostrarPaises);
            }, 3000)
        }, 3000)
    }, 3000)
}

iniciarCallbackHell();
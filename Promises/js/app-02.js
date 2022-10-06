const aplicarDesc = new Promise((resolve, reject) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento Aplicado')
    } else
        reject('No se pudo aplcicr el descuento');

})
aplicarDesc.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

console.log(aplicarDesc)

/*Hay 3 posibles valores en los promise:
    -resolve-resuelto-true.
    -reject-rechazado-falso
    -pending-aun no se ha cumplido, ni he se ha ejecutado.

    .then(entonces) => accion que se realiza en el promise 
    .catch => cuando el promise falle
*/

const paises = [];
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado ${pais}`)
    }, 3000)
})

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Belgica')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Brasil')
    })
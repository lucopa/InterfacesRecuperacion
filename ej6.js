function buscarOcurrenciasPalabra(texto, palabra) {
    const regex = new RegExp(palabra, 'gi');
    let ocurrencias = [];
    let match;
    while ((match = regex.exec(texto)) !== null) {
        ocurrencias.push(match.index);
    }
    return ocurrencias;
}

// Ejemplo de uso
const textoEjemplo = 'Esta es una prueba, una prueba de búsqueda de palabras en un texto. Es importa' +
        'nte probar bien la función.';
const palabraBuscar = 'prueba'; // Cambia esta palabra por la que quieres buscar
const posicionesEncontradas = buscarOcurrenciasPalabra(
    textoEjemplo,
    palabraBuscar
);
console.log(
    `Las ocurrencias de "${palabraBuscar}" están en las posiciones: ${posicionesEncontradas}`
);


function buscarPalabra(texto, palabra){
    const regular = new RegExp(palabra, 'gi');
    let coincidencias = [];
    let encontrado;
    
    while ((encontrado = regular.exec(texto)) !== null ) {
        coincidencias.push(encontrado.index);
    }
    return coincidencias;
}

const textoO = "Estoy en clase y esto es un ejercicio a probar de la relacion de ejercicio"
const palabraBuscada = "ejercicio"
const resultado = buscarPalabra(textoO, palabraBuscada);
console.log(`Las ocurrencias de "${palabraBuscada}" están en las posiciones: ${resultado}`)
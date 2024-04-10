//Con una cadena buscar una letra y que te diga en que posicion esta
function buscar (cadena, letra){
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === letra){
            return i;
        }
        
    }

}

console.log(buscar("Buscar una letra", "c"));

//Buscar una cadena dentro de una cadena
const cadena = "Esta es la cadena de prueba";
const busqueda = "pr";

function buscarCadena(cadena, busqueda){
    for (let pos = 0; pos < cadena.length; pos++) {
        let posB = 0;
        for (let posB = 0; posB < busqueda.length; posB++) {
            if(cadena[pos+posB]!== busqueda[posB]){
                break
            } 
        }
        if (posB == busqueda.length){
            return pos;
        }
        
    }
    return -1;
}

console.log(buscarCadena(cadena, busqueda));
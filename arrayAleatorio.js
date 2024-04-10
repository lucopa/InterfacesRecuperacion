//crear un array de 100 posiciones y que se rellene de forma aleatoria. Averigua su 
//maximo y minimo sin utilizar funciones

const arrayNuevo = new Array(100);

for (let i = 0; i < arrayNuevo.length; i++) {
   arrayNuevo[i] =Math.floor(Math.random() * arrayNuevo.length);  
}

console.log(arrayNuevo)


let numMin = Infinity;
let numMax = -Infinity;

for (let i = 1; i < arrayNuevo.length; i++) {
    if(arrayNuevo[i]>numMax){
        numMax = arrayNuevo[i];
    }
    if(arrayNuevo[i]<numMin){
        numMin = arrayNuevo[i];
    }
    
}

console.log(numMax)
console.log(numMin)


//buscar dentro de un array una secuencia de numeros


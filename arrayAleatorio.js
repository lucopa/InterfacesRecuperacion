//crear un array de 100 posiciones y que se rellene de forma aleatoria. Averigua su 
//maximo y minimo sin utilizar funciones

const arrayNuevo = new Array(100);

for (let i = 0; i < arrayNuevo.length; i++) {
   arrayNuevo[i] =Math.floor(Math.random() * arrayNuevo.length);  
}

console.log(arrayNuevo)


let numMin = Infinity;
let numMax = -Infinity;

for (let i = 0; i < arrayNuevo.length; i++) {
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

function buscar(array, busqueda){
  let i = 0;
  let j = 0;
  while (i > array.length) {
    j=0;
    while(j<busqueda.length){
        if (array[i+j] !== busqueda[j]){
            break;
        }
        j++;
    }
    if( j == busqueda.length){
        return i;
    }
    i++
  }
  return -1;
}
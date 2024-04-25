const datos = [];

for (var i = 0; i < 50; i++) {
    datos.push(i)
}
console.log("-------------------")
console.log(datos);

datos.length = 24;
console.log("-------------------")
console.log(datos);

const nuevo = [...datos];
console.log("-------------------")
console.log(nuevo);

const arrayNuevo = new Array(50);
const arrayNuevoFrom = Array.from(datos);
console.log("-------------------")
console.log(datos);

const arrayMultidimensional = new Array(10);
for (let i = 0; i < arrayMultidimensional.length; i++) {
  arrayMultidimensional[i] = new Array(10);
  for (let j = 0; j < arrayMultidimensional[i].length; j++) {
    arrayMultidimensional[i][j] = i * j;
  }
}
console.log("-------------------")
console.log(arrayMultidimensional)


const arrayOf = Array.of(1,2,3,4,5,6,7,8);
arrayOf[9]=10;
arrayOf[49]=50;

arrayOf.forEach(element => {
    console.log(element)
});

delete arrayOf[0];
delete arrayOf[1];

arrayOf.forEach((valor,indice,array) => {
    array[indice] = valor * valor;
});

const arrayA = [1,2,3,4,5]
const arrayB = [5,6,7,8,9]
const arrayAB = arrayA.concat(arrayB);
console.log("-------------------")
console.log(arrayAB);
const arraySpread = [...arrayA, ...arrayB]
console.log("-------------------")

console.log(arraySpread);
arraySpread.shift();
arraySpread.unshift();
const arrayDos = arraySpread.splice();
console.log("-------------------")
console.log(arrayDos);


const arrayMap = arrayOf.map(valor => `El valor es ${valor}`);
console.log("-------------------")
console.log(arrayMap);

const arraymenos = new Array(50);
arraymenos.fill(-1)
console.log("-------------------")
console.log(arraymenos);
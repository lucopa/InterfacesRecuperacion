const datos = [];

for (var i = 0; i < 50; i++) {
    datos.push(i)
}

console.log(datos);

datos.length = 24;

console.log(datos);

const nuevo = [...datos];
console.log(nuevo);

const arrayNuevo = new Array(50);
const arrayNuevoFrom = Array.from(datos);
console.log(datos);


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

const arrayMap = arrayOf.map(valor => `El valor es ${valor}`);
console.log(arrayMap);
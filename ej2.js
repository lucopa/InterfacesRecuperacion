const array = ["06","Octubre","2021"];
const [dia,mes,año] = array
console.log (`Dia ${dia} Mes ${mes} año ${año}`);

const arrayNumeros = [1,2,3,4,5];
const [numerocero, , numerotres, , numerocico] = arrayNumeros;
console.log (`Numeros impares: ${numerocero} ${numerotres} ${numerocico}`);


const person = {nombre: "Luis", apellidos: "Molina", telefono: "+657575757575"};
const {nombre, apellidos, telefono} = person;

console.log(`Nombre: ${nombre}, Apellidos: ${apellidos} y telefono: ${telefono}`);


for(const [key, value] of Object.entries(person)) 
{ console.log(`Key: ${key} y value: ${value}`); }

const raro = [{x:1, y:2}, {x: 3, y:4}]
const [{x:x1, y:y1}, {x:x2, y:y2}] = raro;
console.log(`Primer x: ${x1}, Primer y: ${y1} y Segundo x: ${x2}, Segundo y: ${y2}`)


function parametros ({nombre, apellidos}){
    return console.log(`Nombre: ${nombre}, apellido: ${apellidos}`)
}

parametros(person)

const objeto1 = {nombre: "Pepe", apellido: "Ruiz"};
const objeto2 = {nombre2: "Maria", apellido2: "Perez"};

const objetodoble = { ...objeto1, ...objeto2};
console.log(objetodoble);

delete objetodoble.nombre;
console.log(objetodoble);

function devolverArray(){
    return [1,2,3,4]
}

const [...numeros] = devolverArray();
console.log(`Valores: ${numeros}`)

const objetoClonar = {array: "[1,2,4]", objeto: {nombre: "luis"}}

const copy = JSON.parse(JSON.stringify(objetoClonar));

console.log(copy);
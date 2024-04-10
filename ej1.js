const multilinea = "Esto es una cadena\n multilinea\n";
console.log(multilinea);

const tabulada = "Esto es una cadena\t tabulada";
console.log(tabulada);

const caracter = "Uso de caracter \\";
console.log(caracter);

const operadorsuma = "Concatenacion de dos lineas " + "primera linea";
console.log(operadorsuma);

const palabra1= "hola";
const palabra2= "adios";
const template = `Cuando entras dices ${palabra1} y ${palabra2}`;
console.log(template);

const array = "Esto son dos frases. Esta es la primera";
const separado = array.split(".");
console.log(separado);

const mayuscula = "ESTO SON MINUSCULAS";
const mayusminus = mayuscula.toLocaleLowerCase();
console.log(mayusminus);

const minuscula = "ESTO SON MAYUSCULAS";
const minusmayus = minuscula.toUpperCase();
console.log(minusmayus);

const recorrer = "Recorrer esta frase caracter a caracter";
for (let i = 0; i < recorrer.length; i++) {
    const element = recorrer[i];
    console.log(element);
}

const palabra = "frase";
const encontrar = recorrer.includes("frase");
console.log(encontrar);

const subcadena = recorrer.substring(3)
console.log(subcadena);

const subcadena2 = recorrer.substring(3, recorrer.indexOf("esta"))
console.log(subcadena2);

const reemplazar = recorrer.replace(/ /g, "-");
console.log(reemplazar);

const textoConEspaciosLaterales = "   Texto con espacios antes y después   ";
const textoSinEspaciosLaterales = textoConEspaciosLaterales.trim();
console.log(textoSinEspaciosLaterales);

const reemplazar2 = recorrer.replace(/ /g, "");
console.log(reemplazar2);

function ponerAlReves(text){
   return text.reverse();
}

const alreves = "Probar a ponerlo al reves"

for (let i = alreves.length; i > 0; i--) {
    let element = alreves[i]; 
    console.log(element);
}


const cadenaNumeros= "Tiene numeros:1234."
const comprobar = /[0-9]/.test(cadenaNumeros);
console.log(comprobar);

const comprobar2 = /\.$/.test(cadenaNumeros);
console.log(comprobar2);


const comprobar3 = /^[A-Z]/.test(cadenaNumeros);
console.log(comprobar3);

const numero = "Este numero es +34 6756464"
const comprobar4 = /\+\[0-9]/.test(numero);
console.log(comprobar4);


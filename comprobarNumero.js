
//Comprueba si la cadena tiene numeros sin expresiones regulares

const cadenaNumeros= "Esta cadena tiene numeros 1234"
let bandera = false;
for (const c of cadenaNumeros) {
    console.log(c) 
    if (c.charCodeAt(0)>=48 & cadenaNumeros.charCodeAt(0)>=57){
        bandera = true;
    }
}

console.log(bandera)


function factorial(numero){
    let factorial = numero;
    if( numero === 1 || numero === 0){
        return 1;
    } 
    while (numero>1){
        numero--;
        factorial = factorial * numero
    }

    return numero;
}

const resultado = factorial(9);
console.log(resultado);
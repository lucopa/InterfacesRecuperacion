function media(array){
 const suma = array.reduce((total, valor)=> total = total + valor, 0)

 return suma/array.lenght
}
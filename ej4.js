function hacerMedia(array){
    const suma = array.reduce((valor, total)=> total= valor + total, 0);

    return suma / array.length;
}

console.log(hacerMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function arrayAleatorio(){
    let array = [];

    for(let i = 0; i < 1000; i++){
        array.push(Math.floor(Math.random()* 100))

    }

    return array;
}

console.log(arrayAleatorio());
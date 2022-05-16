const lista1 = [
    100,
    800,
    500,
    50,
    40000000,
    200,
    150,
    20,
];

lista1.sort(function(a, b) {
    return a - b;
}); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort --la funcion sort permite ordenar arreglos

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); //este metodo recibe una funcion y suma los elementos

    const promedioLista = sumaLista / lista.length;
    return promedioLista

}



//const mitadLista = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//let mediana;

//if (esPar(lista1.length)) {
//const elemento1 = lista1[mitadLista - 1];
//const elemento2 = lista1[mitadLista];

//const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
//mediana = promedioElemento1y2;
//} else {
//mediana = lista1[mitadLista]
//}





function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    console.log(lista)

    let mediana1;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana1 = promedioElemento1y2;
    } else {
        return mediana1 = lista[mitadLista]
    }


}
console.log(calcularMediana(lista1))
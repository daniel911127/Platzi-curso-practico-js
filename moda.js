const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }

        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    );

    const moda = listaArray[listaArray.length - 1]
    return moda;
}

/*-- desde aqui es el codigo sin convertirlo en una funcion

const lista1Count = {};

lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }

    }
);

/*lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor
    }
);  //object.entries se puede enviar como argumento el objeto que queremos convertir en array

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);

const moda = lista1Array[lista1Array.length - 1];
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#--toda la info de arrays
//https://www.youtube.com/results?search_query=metodos+de+arrays+javascript -- videos de arrays
*/
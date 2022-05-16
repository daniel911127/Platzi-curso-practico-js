//const precioOriginal = 120;
//const descuento = 18;
var cupones = [
    15,
    20,
    25,
    30,
    40,
    50

]


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioReal() {
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const cupon = inputCupon.value;

    if (cupon == cupones[0]) {
        descuento = 15
    } else if (cupon == cupones[1]) {
        descuento = 20
    } else if (cupon == cupones[2]) {
        descuento = 25
    } else if (cupon == cupones[3]) {
        descuento = 30
    } else if (cupon == cupones[4]) {
        descuento = 40
    } else if (cupon == cupones[5]) {
        descuento = 50
    } else {
        alert("cupon no valido");
    }

    const precioConDescuento = calcularPrecioConDescuento(price, descuento);
    var result = document.getElementById("ResultPrice");
    result.innerText = "el precio con descuento es: $ " + precioConDescuento;
}

//console.log({
//  precioOriginal,
// descuento,
//porcentajePrecioConDescuento,
//    precioConDescuento,
//});
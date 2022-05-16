//codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado=5;
//console.log("los lados del cuadrado miden: "+ ladoCuadrado);
function perimetroCuadrado(lado) {
    return lado * 4
}
//console.log("el perimetro del cuadrado es: "+ perimetroCuadrado + " cms");
function areaCuadrado(lado) {
    return lado * lado
}
//console.log("el area del cuadrado es: "+ areaCuadrado+ " cms^2");
console.groupEnd();
//codigo del triangulo
console.group("triangulos");
// const ladoTriangulo1=6;
// const ladoTriangulo2=6;
// const baseTriangulo=4;
// const alturaTriangulo=5.5;
// console.log("los lados del triangulo miden: "
//             + ladoTriangulo1
//             +", "
//             +ladoTriangulo2
//             +" y " 
//             +baseTriangulo
//         );
// console.log("la altura del triangulo es: "+alturaTriangulo);
function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("el perimetro del triangulo es: "+ perimetroTriangulo + " cms");
function areaTriangulo(base, altura) {
    return (Number(base) * Number(altura)) / 2;
};
// console.log("el area del triangulo es: "+ areaTriangulo + " cms");
console.groupEnd();
//codigo del circulo
console.group("circulos");
//radio
// const radioCirculo=4;
// console.log("el radio del circulo es: "+radioCirculo);
//diametro
function diametroCirculo(radio) {
    return Number(radio) * 2
}
//console.log("el diametro del circulo es: "+diametroCirculo);
//PI
const PI = Math.PI;
console.log("PI es: " + PI);
//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(Number(radio));
    return diametro * PI
}
//console.log("el perimetro del circulo es: "+perimetroCirculo+" cms");
//area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("el area del circulo es: "+areaCirculo+" cms^2");
console.groupEnd();
//aqui interactuamos con el archivo HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBase");
    const input2 = document.getElementById("InputAltura");
    const value1 = input1.value;
    const value2 = input2.value;
    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
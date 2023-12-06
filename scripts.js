
let planetas = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Neptuno"
];

console.log("Total de planetas: ", planetas.length);

let planeta = {
    nombre: "Tierra",
    distanciaSol: 1,
    tieneAnillos: false,
    continentes: ["America", "Europa", "Asia", "Africa", "Oceania"],
    satelites: [
        {
            nombre: "Luna",
            visitasHumanas: 1
        }
    ]
};
console.log(planeta.satelites[0].visitasHumanas);

planeta.satelites[0].visitasHumanas = 2;

console.log(planeta.satelites[0].visitasHumanas);
console.log(typeof planeta.nombre); //Sirve para saber qué tipo de dato es una variable

const hogar = "Tierra";
console.log(hogar);
//hogar = "Mercurio"; ERROR: no se puede asignar un nuevo valor a una constante. 

planeta.oceanos = 5;

console.log(planeta);

/**
 * Elementos del DOM
 */

document.getElementsByTagName('div'); //Devuelve array de objetos - etiqueta HTML
let flexContainer = document.getElementsByClassName('contenedor-flex'); //Devuelve array de objetos - Clase CSS
document.getElementById('top-nav'); //Devuelve el primer elemento que coincida con el ID especificado

let flexItems = flexContainer[0].getElementsByClassName('flex-item');
console.log(flexItems);

/**
 * Funciones
 */

function saludar() {
    alert('Hola!');
}

function sumar(num) {
    let num2 = 3;
    console.log(num2); //Puedo acceder a num2 porque su scope es local
    return num + num2;
}

// console.log(num2); Acá no funciona num2 porque su scope es dentro de la función sumar

let resultado = sumar(6);
console.log('El resultado es: ', resultado);

/**
 * Eventos
 */
let btn = document.getElementById('btn-saludo');
btn.addEventListener(
    'click',  //Lista de eventos en https://developer.mozilla.org/es/docs/Web/Events
    function() {
        console.log('hola!');
    }
);

/**
 * Resolución ejercicios clase 6
 */

//1
function conocerLargoNombre(nombre) {
    return nombre.length;    
}

let largoNombre = conocerLargoNombre('Carolina');
console.log('El nombre tiene ' + largoNombre + ' caracteres');

//2
let titulo = document.querySelector('h1');
console.log(titulo.innerText);

//3
function cambiarColor(color) {
    titulo.style.color = color;
}
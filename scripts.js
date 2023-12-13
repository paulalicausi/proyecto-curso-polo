
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

/**
 * Clase 7
 */

function colorFrutas() {
    
    let fruta = window.prompt('Ingresa una fruta');

    switch (fruta) {

        case 'manzana':
            color = 'red';
        break;

        case 'kiwi':
            color = 'green';    
        break;

        case 'banana':
            color = 'yellow';    
        break;

        case 'durazno':
            color = 'orange';    
        break;

        case 'arandanos':
            color = 'purple';    
        break;
    
        default:
            color = '';
        break;
    }

    let frutasContainer = document.getElementById('frutas');
    frutasContainer.style.background = color;
}

/**
 * Resolución ejercicios clase 7
 */

//1 
function crearListaSuper() {
    let listaSuper = [
        'Pan',
        'Harina',
        'Manteca',
        'Jabón',
        'Shampoo',
        'Frutas'
    ];
    
    let nuevoArticulo = window.prompt('Ingresa un nuevo artículo para la lista:');
    
    if(listaSuper.includes(nuevoArticulo)) {
        alert('Articulo ya ingresado en la lista!');
    } else {
        listaSuper.push(nuevoArticulo);
        alert('Lista super:' + listaSuper)
    }
}

//2 
function mostrarDia() {
    let hoy = new Date();
    hoy = hoy.getDay();

    switch (hoy) {
        case 0:
            dia = 'Domingo';    
        break;
        case 1:
            dia = 'Lunes';    
        break;
        case 2:
            dia = 'Martes';    
        break;
        case 3:
            dia = 'Miércoles';    
        break;
        case 4:
            dia = 'Jueves';    
        break;
        case 5:
            dia = 'Viernes';    
        break;
        default:
            dia = 'Sabado';
        break;
    }

    document.write('El día de hoy es: ' + dia);
}

//3
function medirPalabra() {
    let palabra = window.prompt('Ingresa una palabra');

    if(palabra.length >= 8) {
        document.write('La palabra tiene igual o más de 8 caracteres');
    } else {
        document.write('La palabra es muy corta');
    }
}

//4 
function esCoordenadaRefugio(num) {

    if(num > 0 && (num % 2 === 0 || num % 3 === 0) && num != 5 && num != 15 ) {
        alert('En esa coordenada hay un refugio!');
    }
    
}
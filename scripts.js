
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
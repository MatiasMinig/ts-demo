//console.log("hola Matias");
//console.log("Adios Matias");

// Declarar Variables:
var nombre = "Matias";
var error: boolean;
error = false;


console.log('Hola, ' + nombre);
console.log(`¿Cómo han ido las vacaciones?, ${nombre}`);

let email = "matias@imaginagroup.com"; // Variable de ámbito local
console.log(`Email de ${nombre} es ${email}`);

// variables que puede cambiar su tipo

var apellido: any = "Matias"; // con any puedo cambiar el tipo de la variable.
apellido = 3;

// Instanciacion de multiples valores.

let a: string, b: boolean, c: number; // instancia de 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;

// Builtin types: number, string, boolean, void, null y undefined

// Tipos mas complejos


// Lista de cadena de texto
let listaTarea: string[] = ["tarea 1", "tarea 2"];

// Combinar tipos en listas
let valores: (string | number | boolean)[] = [false, "hola", true, 56];

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum puestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: puestoCarrera = puestoCarrera.Segundo;

// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);

// Asignacion multiple de variables

let miTarea = {
    titulo: "Mi Tarea",
    estado: Estados.Completado,
    urgencia: 1
}
// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagación)
// En asignacion de variables
let { titulo, estado, urgencia } = miTarea

// En listas
let listaCompraLunes: string[] = ["Leche", "Papas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevo"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
let listaCompraSemanal: string[] = [...listaCompraLunes, ...listaCompraMiercoles];

// En Objetos 
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "bearer12378483"
}
let nuevoEstado = {
    ...estadoApp,
    session: 4
}


// Type de TypeScript

type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}
// ----- Condicionales ------

// Operadores Ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);

// if - else 
if (error) {
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

// if - if-else - else  
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`)
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`)
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`)
}

// Switch 

switch (tarea1.estado) {
    case Estados.Completado:
        console.log("Tarea Completada");
        break;
    case Estados.Incompleto:
        console.log("Tarea No Completada");
        break;
    case Estados.Pendiente:
        console.log("Tarea esta Pendiente de Comprobarse");
        break;
    default:
        console.log("Tarea no Encontrada");
        break;
}

// ** Bucles

let listaTareaNueva: Tarea[] = [
    {
        nombre: "Tarea 1 ",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2 ",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3 ",
        estado: Estados.Incompleto,
        urgencia: 15
    }
]

// For Clasico
for (let index = 0; index < listaTareaNueva.length; index++) {
    const tarea = listaTareaNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// Foreach
listaTareaNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
});

// Bucles while
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia == 20) {
        tarea1.estado = Estados.Completado
        break;
    } else {
        tarea1.urgencia++;
    }
}

// Do While
do {
    tarea1.urgencia++
    tarea1.estado = Estados.Completado
} while (tarea1.estado !== Estados.Completado);


// Funciones

// Creo un funcion que saluda
function saludar() {
    let nombre = "Matias"
    console.log(`Hola ${nombre}`);
}
// Invocación a la funcion
saludar();

/**
 * Funcion que muestra saludo de una persona por consola
 * @param nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludarPersona("Martin");

const persona = "Matias";
saludarPersona(persona);
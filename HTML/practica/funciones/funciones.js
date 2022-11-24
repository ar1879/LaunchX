const cuadrado = function (x){
    return x * x;
};

let numero = 4;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);





const ruido = function () {
    console.log("PUM!")
}


ruido();




const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
};

console.log(exponencial(4,3));




console.log(sumar(5,65));

function sumar(x,y) {
    return x + y;
}




const restar = (a,b) => {
    return a - b;
}

console.log(restar(40,8));




function saludar (quien) {
    console.log("hola " + quien);
}

saludar("explorer");
console.log("Bye");




//Excepciones
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Direccion invalida: " + result)
    
}

function mirar(){
    if (preguntaDireccion("A que lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos"
    }
}

try {
    console.log("mira a " + mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}
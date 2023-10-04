console.log("Hola Mundo");

function add(n1,n2){
    console.log("La suma de los numeros es: " + (n1 + n2));
}

function substract(n1,n2){
    console.log("La resta de los numeros es: " + (n1 - n2));
}

function multiply(n1,n2){
    console.log("La Multiplicacion de los numeros es: " + (n1 * n2));
}

function divide(n1,n2){
    if(n2 === 0){
    
        console.log("ERROR, no es posible efectuar division entre Cero (0)");

    }else{
        console.log("La division de los numeros es: " + (n1 / n2));
    }
    
}

add(5,3);
substract(15,9);
multiply(8,9);
divide(8,2)
//Comentario de una linea para el trabajo numero 5
/*Si la cadena introducida por el usuario es Pepito
Grillo mostraremos un saludo al usuario mediante una ventana emergente.
Puedes usar la instrucción alert() para ello.*/

let miNombre = prompt("Introduzca el nombre de usuario: ", "Pepito Grillo");
if (miNombre === "Pepito Grillo") {
    alert("Buenos días, " + miNombre + ", esto es un mensaje para tí.");
} else {
    alert("Buenos días, " + miNombre + ", saludos desde la clase.");
}
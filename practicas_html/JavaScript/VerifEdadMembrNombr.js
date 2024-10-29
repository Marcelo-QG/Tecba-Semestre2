let nombre = prompt("Ingrese tu nombre");
let edad = Number(prompt("Ingrese tu edad"));
let membresia = prompt("Ingrese tu tipo de membresia (Basico, Premium o VIP):").toLowerCase();

if ( edad < 18) {
    console.log("Acceso restringido por edad");
} else {
    if (membresia === "vip") {
        console.log("Acceso total a todas las areas del club");
    } else if (membresia === "premium") {
        console.log("Acceso a la piscina y gimnasio"); 
    } else if (membresia === "basico") {
        console.log("Acceso solo al area de descanso");
    } else {
        console.log("Tipo de membresia no valido");
    }

}
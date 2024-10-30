let calificacion = Number (prompt("ingrese un numero"))
if (calificacion === 90 && 100){
    console.log("su calificacion es A");
}
else if (calificacion === 80 && 89){
    console.log("su calificacion es B");
}
else if (calificacion === 70 && 79){
    console.log("su calificacion es C");
}
else if (calificacion === 60 && 69){
    console.log("su calificacion es D");
}
else if (calificacion < 60){
    console.log("su calificacion es F");
}
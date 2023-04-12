




const primerNota = document.getElementById("primer_nota")

const segundaNota = document.getElementById("segunda_nota")

const tercerNota = document.getElementById("tercer_nota")

/*var Capturar = function(){
    let lstNumero = document.getElementsByClassName("nota"),
        arrayGuardar = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        arrayGuardar[i] = lstNumero[i].value;
        console.log (lstNumero[i].value);     
        }       
}*/


let promedio = (primerNota + segundaNota + tercerNota) /3;

const btn = document.getElementById("btn")
btn.addEventListener("click", calculoPromedio)

function calculoPromedio () {
    if (promedio<6.5){
        console.log("Reprobado");
    } else if (promedio>=6.5){
        console.log("Aprobado");
    }
}











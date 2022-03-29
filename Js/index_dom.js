import hamburgerMenu from "./menu_hamburger.js";
import clock from "./reloj_alarma.js";


const d=document;
d.addEventListener("DOMContentLoaded", e=>{           //Primero se carga el documento
  hamburgerMenu("#panel-btn","#panel","#a");   //despues ahora si mando llamar la funcion y le paso los parametros

      //Ejercicio 1 Reloj
  clock("#iniciarReloj","#detenerReloj","#mostrarReloj");










});





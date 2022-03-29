import hamburgerMenu from "./menu_hamburger.js";
import {clock,alarm} from "./reloj_alarma.js";
//import alarm from "./reloj_alarma";

const d=document;
d.addEventListener("DOMContentLoaded", e=>{           //Primero se carga el documento
  hamburgerMenu("#panel-btn","#panel","#a");   //despues ahora si mando llamar la funcion y le paso los parametros

  //Ejercicio 1 Reloj
  clock("#iniciarReloj","#detenerReloj","#mostrarReloj");
  alarm("#iniciarAlarma", "#detenerAlarma", "../assets/pianoManAlarm.mp3");

  //Exercise 2







});





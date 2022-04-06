import hamburgerMenu from "./menu_hamburger.js";
import {clock,alarm} from "./reloj_alarma.js";    //Ojo si se importan varias funciones, se utiliza destructuracion y no se exportan funciones por default
import { shortcuts, moveBall } from "./keyboard.js";
import { CuentaReg } from "./count_down.js";
import {btnscroll}  from "./btn_scroll.js";     //como solo es una funcion por default, puede ir o no con {}




const d=document;
d.addEventListener("DOMContentLoaded", e=>{           //Primero se carga el documento
  hamburgerMenu("#panel-btn","#panel","#a");   //despues ahora si mando llamar la funcion y le paso los parametros

  //Ejercicio 1 Reloj
  clock("#iniciarReloj","#detenerReloj","#mostrarReloj");
  alarm("#iniciarAlarma", "#detenerAlarma", "../assets/pianoManAlarm.mp3");

  //Exercise 3
  CuentaReg("muestraCuentaReg","Dec 04, 2022 12:00:00","Termino la cuenta regresiva");     //se pone '#' solo cuando se usa querySelector, 
                                //pero en este caso como usaremos directamente getElementById 'id' en la funcion podemos pasarlo sin #
  
  btnscroll("#btnScroll");

});




                //Exercise 2                    En este caso no se hace delegacion de eventos porque aqui el evento debe asignarse directamente del document o 'nodo raiz'
/*
d.addEventListener("keyup", e =>{
  shortcuts(e);
})

d.addEventListener("keypress", e =>{
  shortcuts(e);
})
*/
d.addEventListener("keydown", e =>{
  shortcuts(e);
  moveBall(e, "#ball", "#stage");
})





export default function responsiveMedia(id, mq, mobileContent, desktopContent){     /**OJO SE EJECUTARA AL CAMIAR DE TAMANIO, NO AL CARGAR*/

  let breakpoint = window.matchMedia(mq);   //1 -Aqui guardamos el tamanio del dispositivo

  function responsive(e){                                           // - 3
    if(e.matches){                                                 //si el evento 'e' tiene el valor de 'mq' sera true 
      document.getElementById(id).innerHTML = desktopContent;       // e insertara en el elemento con el 'id' que me envien 
    }                                                               //el contenido que tiene el parametro desktopContent
    else{
      document.getElementById(id).innerHTML = mobileContent;       // si 'e' no cumple con el valor de 'mq' sera falso      
    }                                                                //e insertara en el elemento con el 'id' que me envien
     //console.log(e.matches, breakpoint);                                         //el contenido que tiene el parametro mobileContent
  }


  
  breakpoint.addEventListener("change",responsive);              //2 -recibe una funcion que va estar evaluando la 'media query (me)' que nos enviaron
  
  responsive(breakpoint);                                     // 4 - mandamos llamar la funcion responsive y le pasamos el parametro breakpoint que usara
}                                                             //para que aparezca al cargar el documento, tambien pudimos haber usado DOMContentLoaded
                                                              //pero como no podemos tener un DOMContentLoaded dentro del DOMContentLoaded del index_Js
                                                              // y tampoco queremos sacar la funcion del js principal lo hacemos asi

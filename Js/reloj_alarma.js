const d=document;


export function clock(startClock, stopClock, showClock){
  let clockTempo;
  
  d.addEventListener("click", e=>{

    if(e.target.matches(startClock)){
    
      clockTempo = setInterval(()=>{
        let time = new Date().toLocaleTimeString('en-US');      //ojo la variable debe estar dentro del interval, si no solo mostrara el segundo en que se ejecuto
        

        document.querySelector(showClock).innerHTML = `<h3>${time}<h3/>`        //selecciona el elemento que tiene el selector que me trajiste  
      },1000);                                                                   // en 'showClock' y agregale un h3 y dentro la variable
      
      e.target.disabled = true;       // deshabilita el elemento que origino el evento en este caso fue el boton 'iniciarReloj'
    }

    if(e.target.matches(stopClock)){
      console.log(e.target);

      clearInterval(clockTempo);
      d.querySelector(startClock).disabled = false;
      d.querySelector(showClock).innerHTML = null;
    }  
  })
}


export function alarm(startAlarm, stopAlarm, audio){
let alarmTempo;
const $alarm=d.createElement("audio");      //la variable se pone con $ al principio porque va guardar un elemento del dom
      $alarm.src=audio;                   //a esa variable creada con el elemento audio entra a su ruta y  
                                             //pegale el archivo de sonido que me estas pasando en el parametro audio

      //<audio src="assets/pianoManAlarm.mp3" controls></audio>  esta etiqueta es la que crearemos pero no la mostraremos en el html

  d.addEventListener("click", e=>{

    if(e.target.matches(startAlarm)){
      alarmTempo = setTimeout(() =>{
        $alarm.play();          //despues de 1 segundo sonara el audio
      },2000);
      
      e.target.disabled = true;     //deshabilita el boton presionado
    }
    
    if(e.target.matches(stopAlarm)){
      $alarm.pause();                                     //tambien es necesario este metodo, si no solo con el de currentTime no funciona bien
      $alarm.currentTime = 0;                             //reinicia el audio que se esta reproduciendo
      d.querySelector(startAlarm).disabled = false;       //habilita de nuevo el boton de start Alarm
    }
    
  })
}
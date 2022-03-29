const d=document;


export default function clock(startClock, stopClock, showClock){
  let clockTempo;
  
  d.addEventListener("click", e=>{

    if(e.target.matches(startClock)){
    
      clockTempo = setInterval(()=>{
        let time = new Date().toLocaleTimeString('en-US');      //ojo la variable debe estar dentro del interval, si no solo mostrara el segundo en que se ejecuto
        console.log(time);

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


export function alarm(startAlarm, stopAlarm, alarm){

}
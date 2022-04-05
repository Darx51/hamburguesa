const d=document;



export const CuentaReg = (id, tiempoPrueba, mesage)=>{

const $countdown = d.getElementById(id);                            //sera una variable que se mostrara en el dom por eso $
const testDate = new Date(tiempoPrueba).getTime();             //esta fecha debera ser igual  no queremos que se actualice

let anios = 1000*60*60*24*365,
    meses = 1000*60*60*24*30,
    dias = 1000*60*60*24,
    horas = 1000*60*60,
    minutos = 1000*60,
    segundos = 1000;

        

let tempo = setInterval(() => {
  
  let tiempoActualEnMilisegundos = new Date().getTime();                    //esta variable debe estar dentro del interval ya que si se estara                                                                    actualizando --conversion a milisegundos
  let tiempoRestante =  testDate - tiempoActualEnMilisegundos ;       //anios transcurridos desde X fecha en milisegundos
  
  /*console.log(tiempoActualEnMilisegundos);
  console.log(testDate);
  console.log(tiempoRestante);
  */
/////////////
  let aniosHumanos = Math.floor(tiempoRestante / anios);
    //console.log(`${aniosHumanos} anios`);
  let mesesHumanos = Math.floor((tiempoRestante % anios ) / meses);
    //console.log(`${mesesHumanos} meses`);
/////////////

  let diasHumanos = Math.floor((tiempoRestante % meses ) / dias),    //Math.floor me devuelve el menor entero mas proximo ojo verlo como en la recta numerica, de -4.  3 me devolvera -5 
    hrsHumanos = ("0"+Math.floor((tiempoRestante % dias) / horas)).slice(-2);       //me devuelve el residuo sobrante de los dias en milisegundos que hay en el tiempo restante y ese residuo lo divido en entre lo que quiero obtener en este caso son horas " y con Math.floor me devuelve el menor entero proximo " 
  let  minutosHumanos = ("0"+ Math.floor((tiempoRestante % horas) / (minutos))).slice(-2);    //me devuelve el residuo sobrante en las horas y ese residuo lo divido en minutos que es el valor que quiero
  let  segundosHumanos  = ("0" + Math.floor((tiempoRestante % minutos)/ segundos)).slice(-2);    //me devuelve el residuo sobrante de minutos en milisegundos y esos los divido en segundos 


  if(testDate > tiempoActualEnMilisegundos){
    $countdown.innerHTML  = `<h3> faltan ${aniosHumanos} anios, ${mesesHumanos} meses,  ${diasHumanos} dias, ${hrsHumanos} horas, ${minutosHumanos} minutos y ${segundosHumanos} segundos </h3> `;
  
    if(tiempoRestante < 0){
      clearInterval(tempo);
      $countdown.innerHTML = `${mesage}`;
    }
  }

  
  else{
    let tiempoContrario =  tiempoActualEnMilisegundos - testDate;
    let aniosH = Math.floor(tiempoContrario / anios);
    let mesesH = Math.floor((tiempoContrario % anios ) / meses);          //el residuo del tiempo en anios lo dividimos por los meses para que me devuelva los meses
    let diasH = Math.floor((tiempoContrario % meses ) / dias);            //el residuo del tiempo en meses lo dividimos por los dias para que me devuelva los dias
    let horasH = Math.floor((tiempoContrario % dias ) / horas);
    /*
    let anios2 = Math.floor(aniosH);
    console.log(aniosH);
    console.log(anios2);
    */
    $countdown.innerHTML=`La fecha ingresada no puede ser menor que la fecha actual, pero si es tu fecha de nacimiento
                          tienes ${aniosH} anios, ${mesesH} meses y ${diasH} dias y ${horasH} hrs de nacido`;
  } 
     // document.querySelector(mostrar).innerHTML = `<h3> faltan  ${diasHumanos} dias, ${hrsHumanos} horas,   </h3> `;
   // document.querySelector(mostrar).innerHTML = `Han pasado <h3>${aniosReal} anios y ${dias} dias desde tu nacimiento Daniel<h3/>`

  }, 1000);
}



















/*
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
*/
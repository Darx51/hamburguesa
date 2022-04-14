
export default function geolocation(id){
  
const $id = document.getElementById(id);

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}


function exito(pos){
  
  var crd = pos.coords;                         //coords es la propiedad que me trae las coordenadas

  console.log('Your actual position is :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`approximately ${crd.accuracy} meters`);
  
  $id.innerHTML =`<p>Your actual position is :</p>
                <ul>
                <li>Latitude :<b> ${crd.latitude}°</b></li>
                <li>Longitude :<b> ${crd.longitude}°</b></li>
                <li>approximately: <b>${crd.accuracy} </b> meters</li>
                </ul>
    <a href="https://www.googlemaps.com/maps/@${crd.latitude},${crd.longitude},15z" target="_blank" rel=""noopener>View in google maps</a>`;

    //target="_blank"                         es para que habra el link del; mapa en otra ventana, no en la actual
    //rel=""noopener                          Impide que la página o ventana que se abrio obtenga algún tipo de acceso a la página original.
}

function error(err){
  $id.innerHTML =`<p>failing to access</p>`
  //console.log(`error HA OCURRIDO UN ERROR ${err}`)
}

navigator.geolocation.getCurrentPosition(exito,error,options);    //recibe 2 funciones y un objeto con opciones


//document.querySelector(btn).addEventListener('click', location);

/*
  function location(){
    const status = document.querySelector(sta);
    const mapLink = document.querySelector(maplnk);

    mapLink.href = '';
    mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(position.coords.latitude);
    console.log(position.coords.longitude);    

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
  }

  document.querySelector(btn).addEventListener('click', location);
*/

}
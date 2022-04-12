
let network;
export default function network_detection(){
  
const isOnline = () =>{
  const $div = document.createElement("div");

  if(navigator.onLine){
    $div.textContent = "Conecction reestablished";
    $div.classList.add("online");
    $div.classList.remove("offline");
  }
  else{
    $div.textContent = "Lost Conecction";
    $div.classList.remove("online");
    $div.classList.add("offline");
  }
                                                              //como esta funcion solo se ejecuta al perder o establecer la conexion a internet
                                                              // insertamos el div afuera de los condicionales
  document.body.insertAdjacentElement("afterbegin", $div);      //cuando se restablece no podemos ver la clase online verde porque 
                                                                 //la que se ejecute primero tendra un z-index de 1000
  
  setTimeout(() => document.body.removeChild($div), 3000);      //solo la mostramos 3 segundos al momento de conectar o desconectar


}                                                              






  window.addEventListener("online",(e)=>{ 
    isOnline();                  //Ojo The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.
  
  
  }                                                 // significa que se ejecuta al perder o conectarse a internet, no al recargar el navegador, ni maximisar etc...
  )

  window.addEventListener("offline", (e)=>{
    isOnline();
    
  });
} 
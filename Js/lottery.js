

export default function loteria(lenguajes, btn, lenp){

  const contenedor=document.querySelector(lenguajes);
  const btnHere=document.querySelector(btn);
  const lenguajesProg2 = document.querySelector(lenp);

  
  document.addEventListener("click", e=>{

    if(e.target.matches.btnHere){
      
    }
    
    //console.log(lenguajesHere.textContent);                 me trae los nombres de los lenguajes
   // console.log(e.target);
  const hijos = contenedor.textContent;
    //console.log(contenedor.firstElementChild);
    //console.log(contenedor.childElement);

    const p = contenedor.querySelector(lenp);
    console.log(p);
    
    //lenguajesProg2.forEach(element => console.log(element));


  }
  )

}

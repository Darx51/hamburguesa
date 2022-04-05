
export default function hamburgerMenu(panelBtn, panel, linkSecction){
  const d = document;
  
  d.addEventListener("click", e =>{   
    //console.log(e.target);    //solo me muestra a que le di click
    
    //click lo asigno a document
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`) ){                           //si lo clickeado coincide con el parametro que me trajiste en panelBtn o en cualquier elemento dentro del 'panelBtn'
      d.querySelector(panel).classList.toggle("is-active");      //busca en el selector el id que me trajiste dentro del parametro panel
      d.querySelector(panelBtn).classList.toggle("is-active");    //busca en el selector el id que me trajiste dentro del parametro panel y lo activa o desactiva
                                                                 // y entra a su lista de clases y con el metodo toggle le vas a intercambiar la clase 'is-active'
      
    } 
    if(e.target.matches(linkSecction)){
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  })
}



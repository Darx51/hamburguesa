

export default function buscarCartas(input,card){
  
  document.addEventListener("keyup",(e)=>{                //al soltar cada tecla y quedar arriba    
    
     if(e.target.matches(input)){                        //si el elmemento clickeado coincide con el parametro input me devuelve true
      //console.log(e.target.matches(input));
      //console.log(d);
  
      if(e.key=== "Escape"){
        e.target.value = "";
      }

      
      document.querySelectorAll(card).forEach((el) =>    // selecciona todas las cartas con el id que me pasaste y para cada carta
      
      el.textContent.toLowerCase().includes(e.target.value)     //si el contenido del texto de la carta incluye el texto del input
        ? el.classList.remove("ocultar")                        //pasa lo escrito a minusculas y si dicha tarjeta  incluye el contenido del input?
                                                                //remueve la clase ocultar para que la targeta se mueste
        : el.classList.add("ocultar")                              // si no coincide agrega la clase ocultar para que se oculte 
                                                                //con order 1 en la clase ocultar se iran recorriendo al final, ya que por default es 0
      );
      
    }
  });
}


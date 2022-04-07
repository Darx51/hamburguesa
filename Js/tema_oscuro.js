
export default function dark_theme(btn, classDark,stage,stageColor){    //OJO 'stageColor' se debe agregar justamente donde esta la clase 'stage'
  const $btnDark = document.querySelector(btn),                 //selectores de html  
        $selectors = document.querySelectorAll("[data-dark]");        //selecciona todos los elementos  del html 
  //console.log($selectors);                                      //que contengan el Data-Atribute 'data-dark' que agregue en el html
  const $stage = document.querySelector(stage);                 //como son variables que cambiaran en el dom se pone $
  


  let sun = "💡",
      moon = "🌙";

  document.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){                    //si el click coincide con lo que me mando en el boton
      //console.log($btnDark.textContent);         //me muestra el 'contenido del boton dentro de la variable $btnDark'
      if($btnDark.textContent===moon){              //si el boton el contenido de $btnDark.textContent es igul a moon    
        $stage.classList.add(stageColor);             // ese codigo es igual a document.querySelector(stage).classList.add("stageColor");
        
        $selectors.forEach(el => {                // recorre todos los selectores y 
          el.classList.add(classDark);            //agregales la clase que me mandaste en 'classDark'
          $btnDark.textContent = sun;             // al boton ahora asignale el icono del sol
        })  
      }  
      
      else{
        $stage.classList.remove(stageColor);        //es igual a document.querySelector(stage).classList.remove("stageColor");

        $selectors.forEach(el => {                 //si el boton el contenido de $btnDark.textContent no es igul a moon    
          el.classList.remove(classDark);
          $btnDark.textContent = moon;
        }) 
      }
      
    }
  })    
}
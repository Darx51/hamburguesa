
export default function dark_theme(btn, classDark){
  const $btnDark = document.querySelector(btn), 
  //selectores de html
  $selectors = document.querySelectorAll("[data-dark]");        //selecciona todos los elementos  del html 
  console.log($selectors);                                      //que contengan el Data-Atribute 'data-dark' que agregue en el html

  let sun = "💡",
      moon = "🌙";

  document.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
     // $btnDark.classList.toggle("classDark");
     console.log($btnDark.textContent);         //me muestra el 'contenido del boton'
    }

  })    
}
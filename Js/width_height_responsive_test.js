
export default function responsive_tester(idForm){
  const $form = document.getElementById(idForm);           //con getElementById no necesita el # 
  let tester;

  document.addEventListener("submit",(e)=>{
    if(e.target === $form){                         //nos daria el mismo resultado que e.target.matches
      e.preventDefault();

      tester = window.open($form.direccion.value,"tester",    //tester es el target, la variable como tal solo necesita esa referencia
                            `innerWidth=${$form.ancho.value},
                            innerHeight=${$form.alto.value}`);   
                                                                    //traemos la 'URL'    
    }                                                                                                                                
  })

  document.addEventListener("click",e=>{
    if(e.target === $form.cerrar){
      //console.log(e.target);
      tester.close();
      //limpiamos
      $form.direccion.value="";
      $form.ancho.value = "";
      $form.alto.value = "";
    }
  })

}
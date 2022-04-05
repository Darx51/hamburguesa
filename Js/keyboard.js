const d=document;       //estas variables deben estar fuera de la funcion, si no solo se movera el objeto 'una sola vez'
let x=0, y=0;      


export function moveBall(e, ball, stage){
 // e.preventDefault();                 //prevenimos el comportamiento por default solo cuando mandamos llamar la funcion 'moveball()'
  
  const $stage = d.querySelector(stage),
        $ball = d.querySelector(ball),         //le ponemos $ porque es una variabel que se mostrara en el dom
        limitBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();

 /*       console.log(limitBall);
        console.log(limitStage);
*/

  console.log(e.keyCode); // tambien podemos evaluarlo solo con el 'key'
  console.log(e.key);
  
  
  switch(e.keyCode){
    
    case 37:// el 37 es el keyCode que nos genera la tecla right    
      if(limitBall.left > limitStage.left){
        x--;        //en X no hay problema porque le dijimos que fuera flex y no genera una barra  de scroll lateral
      }
        
    break;

    case 38://down
    if(limitBall.top > limitStage.top){
      e.preventDefault();           //si continuo precionando hacia arriba o abajo aparece la barra de scroll y previene el comportamiento de quedarse solo en el vh del ejercicio 2
      y--;
    }
  
      
      break;
      
    case 39://left
      if(limitBall.right < limitStage.right){
        x++;       
      }
      
    break;

    case 40://up
    if(limitBall.bottom < limitStage.bottom){
      e.preventDefault();           //si continuo precionando hacia arriba o abajo aparece la barra de scroll y previene el comportamiento de quedarse solo en el vh del ejercicio 2
      y++;
    }
    
    break; 
    default:
    break;      
  }
  $ball.style.transform = `translate(${x*30}px, ${y*25}px) `;     //como es variable del dom tiene las propiedades style y transform del CSS 
}









export const shortcuts = (e) => {
  /*
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  
  if(e.key === "a" && e.altKey){
    alert('you have been lunched an alert');
  }
  if(e.key === "c" && e.altKey){
    alert('you have been lunched a confirm');
  }
  if(e.key === "p" && e.altKey){
    alert('you have been lunched  prompt');
  }
  if(e.key === "p" && e.altKey){
    alert('you have been lunched  prompt');
  }
  if(e.key === "Enter" && e.altKey){
    alert('you have been lunched  prompt with Enter key');
  }
  if(e.key === "Meta" && e.altKey){
    alert('you have been lunched  prompt with Windows Key');
  }
*/
}
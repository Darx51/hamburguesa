


export default function stremVideo(video){
  const $video = document.getElementById(video);

  if(navigator.mediaDevices.getUserMedia){                                // si la funcion (navigator.mediaDevices.getUserMedia) existe?
                                                                          //realiza lo siguiente                  
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })    //notese que es una promesa, ya que se manda llamar a si misma 
      .then( stream =>{                                      //mientras me entrega el resultado 
      console.log(stream);
      $video.srcObject = stream;                   //src debe recibir un link para reproducir, pero como en este caso 'stream' me esta trallendo 
                                                   // un objeto le paso el 'stream' que me esta devolviendo la promesa
      $video.play();                              //para que se vean todos los movimientos de la webcam no solo el 1ro pongo .play()
        
      
    }
  ).catch(err =>{
    $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
    //console.log(`Ha sucedido un error ${err}`);

  } 
  )
  }
}

  
  
  





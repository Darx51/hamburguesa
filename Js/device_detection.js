export default function userDevice(id){
  
  
  const $id = document.getElementById(id);
  //Mobiles
  const isMobile = {                                                 //Funciones flecha y anonima dentro del objeto 'isMobile'
    android:() => navigator.userAgent.match(/android/i),
    ios:() => navigator.userAgent.match(/iphone|ipad|ipod/i),
    windows:() => navigator.userAgent.match(/windows phone/i),
    any:function(){                                                 //OJO si fuera una funcion flecha ()=> 
      return this.android() || this.ios() || this.windows();        // el this haria referencia a la funcion padre 'userDevice()' 
    }                                                               // y no a la funcion 'isMobile'  ya que las funciones ()=>  
  }                                                                // toman el scope {} de la funcion global, y las funciones anonimas no 
  

  const isDesktop = {
    linux:() => navigator.userAgent.match(/linux/i),
    mac:() => navigator.userAgent.match(/mac os/i),
    windows:() => navigator.userAgent.match(/windows nt/i),
    any: function(){
      return this.linux() || this.mac() || this.windows();
    }
  };


  const isBrowser = {
    chrome:() => navigator.userAgent.match(/chrome/i),
    safari:() => navigator.userAgent.match(/safari/i),
    firefox:() => navigator.userAgent.match(/Firefox/i),
    opera:() => navigator.userAgent.match(/Opera/i),
    ie:() => navigator.userAgent.match(/msie|iemobile/i),
    edge:() => navigator.userAgent.match(/Edg/i),
    brave:() => navigator.userAgent.match(/brave/i),
    vivaldi:() => navigator.userAgent.match(/vivaldi/i),
    any: function(){
      return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge() || this. brave() || this.vivaldi();
    }
  };
  
  //console.log(navigator.userAgent);
  //console.log(isMobile.android());                                                        //si isMobile.any() entonces es mobil() si no isDesktop.any()
  $id.innerHTML = `<ul>
                    <li>userAgent: <b>${navigator.userAgent}</b></li>  
                    <li>Platform: <b>${isMobile.any()? isMobile.any() :isDesktop.any()}</b></li>  
                    <li>Browser: <b>${isBrowser.any()}</b></li>  
                  </ul>`;


  /* Contenido Exclusivo*/
  if(isBrowser.chrome()){
    $id.innerHTML += `<p><mark>This text is only visible on chrome</mark></p>`
  }

  if(isBrowser.firefox()){
    $id.innerHTML +=`<p><mark>This text is only visible on firefox</mark></p>`
  }

  if(isDesktop.windows()){
    $id.innerHTML += `<p><mark>This text is only visible on windows</mark></p>`
  }

  if(isDesktop.mac()){
    $id.innerHTML += `<p><mark>This text is only visible on Mac OS</mark></p>`
  }

  if(isMobile.android()){
    $id.innerHTML +=`<p><mark>This text is only visible on android</mark></p>`
   // window.location.href = "https://github.com/Darx51"            al estar en android me redigira a  github
  }

  if(isMobile.ios()){
    $id.innerHTML +=`<p><mark>This text is only visible on iOS</mark></p>`
  }
  /*
  if(isBrowser.edge() && isBrowser.chrome()){
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`
  }
  */

                    /*Redirecciones*/
  /*                  
  if(isMobile.android()){
    window.location.href = "https://github.com/Darx51"        
  } 
  */
}
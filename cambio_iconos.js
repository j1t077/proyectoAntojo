window.onload = function(){

var imagen = document.getElementById('imgDinamica');
imagen.addEventListener('mouseover', function (){
        //Sustituyo el número por el numero de imágenes que necesites
        var rnd = Math.floor((Math.random() * 3) + 1);
        
        switch(rnd){
         case 1:
           this.src='./imagenes/avatar-jorge.png';
           break;
         case 2:
           this.src='./imagenes/jorge-llora.png'';
           break;
         case 3:
           this.src='./imagenes/avatar-jorge.png';
           break;
       }   
});

}
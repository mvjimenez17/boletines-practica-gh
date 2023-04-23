// obtener los elementos de la clase .close

let links = document.querySelectorAll('.close');

//recorrerlos

links.forEach(function(link){
    //agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(e){

       e.preventDefault();
       return false;

       setTimeout(function(){
        location.href = "/boletines-practica-gh";
       },600);

    });



});


// http://laboratoria.cuadra.co:9339/api/v1/students/
var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var cargarPagina = function () {
    cargarAlumnas();
   
};

var cargarAlumnas = function(){
    
     
 $.getJSON(api.url, function (alumnas) {
        alumnas.forEach(function(alumna){
            renderAlumnas(alumna)
        });
    });
       
}


var renderAlumnas = function(alumna){
    var $nombre = alumna.name;
    var $lastName = alumna.pLastName;
    var $last2Name = alumna.mLastName;
    var nombreCompleto  ="";
    
    nombreCompleto += $nombre;
    nombreCompleto += " ";
    nombreCompleto += $last2Name;
    nombreCompleto += " ";
    nombreCompleto += $lastName;
    
    var $containerAsist = $("#asist");
    var $li = $("<li/>");
    var $input =$("<input type='checkbox'> ");
    
    $li.text(nombreCompleto);
    $li.prepend($input);
    
    $containerAsist.append($li)
    
    
    
}
$(document).ready(cargarPagina);
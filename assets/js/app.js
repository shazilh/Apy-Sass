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
    var $lastName2 = alumna.mLastName;
    var nombreCompleto  ="";
    
    nombreCompleto += $nombre;
    nombreCompleto += " ";
    nombreCompleto += $lastName;
    nombreCompleto += " ";
    nombreCompleto += $lastName2;
    
    var $contAsist = $("#asistencia");
    var $li = $("<li/>");
    var $input =$("<input type='checkbox'> ");
    
    $li.text(nombreCompleto);
    $li.append($input);
    
    $contAsist.append($li)
    
    
    
}
$(document).ready(cargarPagina);
function DataModel () {
    this.data = getJSON("../app/components/home/listadoJSON/listado");

}

//function lee_json() {
//    $.getJSON("/datos.json", function(datos) {
//                                  alert("Dato: " + datos["dato"]);
//                                  $.each(datos["primos"], function(idx,primo) {
//                                                              alert("Numero primo: " + primo);
//        });
//    });
//}
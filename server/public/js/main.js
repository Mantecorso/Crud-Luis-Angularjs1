function viewUser(evt, mostrar) {

    var i, cuadro, links;

    cuadro = document.getElementsByClassName("cuadro");
    for (i = 0; i < cuadro.length; i++) {
        cuadro[i].style.display = "none";
    }

    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    document.getElementById(mostrar).style.display = "block";
    evt.currentTarget.className += " active";
}
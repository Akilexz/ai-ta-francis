function validar() {
    var nombre,text;
    nombre=document.getElementById("nombre").value;
    text=document.getElementById("text").value;

    if(nombre ===""){
        alert("el campo nombre esta vacio");
        return false;
    }
}
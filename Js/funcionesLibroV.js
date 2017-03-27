function preview (){

  var comentarioPreview = document.getElementById("caja de comentarios").value;
  var mostrarComentario = document.getElementById("preview");
  mostrarComentario.innerHTML = comentarioPreview;
}

function mostrar(){
     var visualPreview = document.getElementById("preview").cloneNode(true);
     var visualComentario = document.createElement("li");
     var lista = document.createTextNode(visualPreview);
     visualPreview.removeAttribute("id");
     
}

function alinearTexto(){
  var alinearTxt = document.getElementById("preview").style.textAlign;
  preview.style.textAlign = alinearTxt;
}

function colorTexto(){
  var colorTxt = prompt("Ingresa hexadecimal:");
  document.getElementById("preview").style.color = colorTxt; 
}

function fondoTexto(){
  var fondoTxt = prompt("Ingresa hexadecimal:");
  document.getElementById("preview").style.background = fondoTxt; 
}

function sizeChico(){
  document.getElementById("preview").style.fontSize = "small";
}
function sizeMediano(){
    document.getElementById("preview").style.fontSize = "medium";
 }
 function sizeGrande(){
    document.getElementById("preview").style.fontSize = "x-large";
 }




	
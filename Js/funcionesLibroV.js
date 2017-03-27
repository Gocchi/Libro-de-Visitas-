function preview (){

  var comentarioPreview = document.getElementById("caja de comentarios").value;
  var mostrarComentario = document.getElementById("preview");
  mostrarComentario.innerHTML = comentarioPreview;
}

function mostrar(){
     var visualPreview = document.getElementById("preview").cloneNode();
     var visualComentario = document.createElement("li");
     var lista = document.createTextNode(visualPreview);
     
    visualComentario.appendChild(lista);
    comentarios.appendChild(visualComentario);
}

function alinearTexto{
  var alinearTxt = document.getElementById("preview").style.textAlign;}
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

function tamañoTexto (chico, mediano, grande){
  var chico= document.getElementById("preview").style.fontSize = "small";
  var mediano= document.getElementById("preview").style.fontSize = "medium";
  var grande= document.getElementById("preview").style.fontSize = "x-large";
}



	
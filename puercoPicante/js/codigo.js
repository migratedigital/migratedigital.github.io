let navbarSpan = document.getElementById("contenido-nav");
titulo = document.getElementsByClassName("titulo")[0];
let desplegada = false;
function mostrar(){
  let navbar = document.getElementById("navbar");
  let footer = document.getElementById("footer");
  let instruccion = document.getElementById("clic");
  if (desplegada == false){
    navbarSpan.style.display = "inline-block";
    navbar.style.height = "48%";
    instruccion.innerHTML = "Clic para colapsar menú";
    footer.style.display = "none";
    titulo.style.marginBottom = "0.4rem";
    desplegada = true;
  } else {
    navbarSpan.style.display = "none";
    navbar.style.height = "10%";
    instruccion.innerHTML = "Haz clic para ver menú";
    footer.style.display = "inline-block";
    titulo.style.marginBottom = "6.7rem";
    desplegada = false;
  }

}

function efecto(){
  //Se ejecuta hasta que la página cargó
  titulo.style.fontSize = "6.8rem";
  tituloSecundario = document.getElementById("clic");
  tituloSecundario.style.letterSpacing = "-4px";
};

document.addEventListener("DOMContentLoaded",efecto());

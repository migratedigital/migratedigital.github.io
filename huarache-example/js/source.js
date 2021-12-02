
let ua = navigator.userAgent.toLowerCase();
let desplegada = false;

function mostrar() {
  let navbarSpan = document.getElementById("contenido-menu");
  let navbar = document.getElementById("menu");
  let instruccion = document.getElementById("clic");
  //let raya = document.getElementById("raya");
  let atag = document.getElementsByClassName("atag");
  if (desplegada == false) {
    navbar.style.height = "42vh";
    navbarSpan.style.visibility = "visible";
    navbarSpan.className = "hidden";
    //raya.style.borderBottom = "3px dotted #000";
    let i;
    for (i = 0; i < atag.length; i++) {
      atag[i].style.display = "block";
    }
    instruccion.innerHTML = "Toca para colapsar menú";
    desplegada = true;
  } else {
    // si está desplegada la colapsa
    navbarSpan.style.visibility = "hidden";
    navbar.style.height = "8%";
    navbarSpan.className = "";
    //raya.style.borderBottom = "0";
    let i;
    for (i = 0; i < atag.length; i++) {
      atag[i].style.display = "none";
    }
    instruccion.innerHTML = "Toca para ver menú";
    desplegada = false;
  }

}

/* No hacer desplegable el menú al inicio */
//mostrar();

function colapsar() {
  if (desplegada == true) {
    mostrar();
    //console.log("Se activó");
  } else {
    //console.log("No se activó");
  }
}

if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    // Chrome
    function mostrarPrecio(id) {
      console.log("Seleccionado " + id);
    }

  } else {
    // Safari

    letra = document.getElementsByClassName("card");
    descripcion = document.getElementsByClassName("descripcion");
    let i;
    for (i = 0; i < letra.length; i++) {
      letra[i].style.fontSize = "50px";
    }
    for (i = 0; i < descripcion.length; i++) {
      descripcion[i].style.fontSize = "42px";
    }

    function mostrarPrecio(id) {
      let tarjeta = document.getElementById(id);
      let style = document.createElement('style');

    }
  }
}

// const titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego 'El Número Secreto'";
// const texto = document.querySelector(".texto__parrafo");
// texto.innerHTML = "Ingrese un número de 1 a 10";
//let numeroSecreto = numeroSecreto();
let numeroSecreto = GeneroNumeroSecreto();
let intentos = 1;
let listaNumSorteados = [];

function mensajesIniciales() {
  asignarTextoElemento(".texto__parrafo", "Ingrese un número de 1 a 10");
  asignarTextoElemento("h1", "Juego El Número Secreto");
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let inputIngresado = parseInt(
    document.querySelector(".container__input").value
  );
  //console.log(numeroSecreto);
  if (numeroSecreto === inputIngresado) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto > inputIngresado) {
      asignarTextoElemento("p", "el número secreto es mayor al ingresado");
    } else {
      asignarTextoElemento("p", "el número secreto es menor al ingresado");
    }
    intentos++;
    limpiarCampos();
  }
  return;
}

function GeneroNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  // console.log(numeroGenerado);
  // console.log(listaNumSorteados);
  if (listaNumSorteados.length == 10) {
    asignarTextoElemento("p", "Ya se llego al maximo de numeros");
  } else {
    if (listaNumSorteados.includes(numeroGenerado)) {
      return GeneroNumeroSecreto();
    } else {
      listaNumSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCampos() {
  document.querySelector(".container__input").value = "";
}

//todo ACA REINICIAMOS EL JUEGO
function reiniciarJuego() {
  //*limpiar la caja
  limpiarCampos();
  //*indicar en mensaje el intervalo de numero
  mensajesIniciales();
  //*genera numero aleatorio
  numeroSecreto = GeneroNumeroSecreto();
  //*desabilitar el boton de juego nuevo
  document.getElementById("reiniciar").setAttribute("disabled", "");
  //*inicializar la variable de numero de intentos
  intentos = 1;
}

let numeroMaximo = parseInt(prompt("Indique el numero maximo posible/cantidad de juegos "));
let numeroSecreto = 0;
let intento = 1;
let limite = 0;
let listaDeNumerosSorteados =[];
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
  intento = 1;
  limite = Math.floor(numeroMaximo/3)//limite es 1/3 del numero maximo
  asignarTexto('h1','Juego del numero secreto');
  asignarTexto('p',`Escoge un numero del 1 al ${numeroMaximo}, tienes ${limite} ${limite == 1 ? "intento": "intentos"}`);
  numeroSecreto = generarAleatorio();
}

function reiniciarJuego() {
  limpiarCaja()
  condicionesIniciales()
  document.getElementById('reiniciar').setAttribute('disabled',true);
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
      asignarTexto('p',`Acertaste, el número es: ${numeroDeUsuario} lo Hiciste en ${intento} ${intento == 1 ? "intento": "intentos"}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
      intento++;//incrementa el contador
      if (numeroDeUsuario < numeroSecreto) {
          asignarTexto('p',`El numero oculto es mayor a ${numeroDeUsuario}, Te quedan ${limite-intento+1} ${limite-intento+1 == 1 ? "intento": "intentos"}`);
      } else {
        asignarTexto('p',`El numero oculto es menor a ${numeroDeUsuario}, Te quedan ${limite-intento+1} ${limite-intento+1 == 1 ? "intento": "intentos"}`);
      }
      if (intento > limite) {
        asignarTexto('p',`Haz llegado al numero maximo de ${limite} intentos`);
        document.getElementById('reiniciar').removeAttribute('disabled');
      }
      limpiarCaja()
    }
    return;
}

function generarAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    if (listaDeNumerosSorteados.length == numeroMaximo) {
      asignarTexto('p',`Ya he asignado ${numeroMaximo} ${numeroMaximo == 1 ? "numero posible": "numeros posibles"}, No tienes mas juegos, Presiona F5`);
      console.log("yaaaa")
    } else {
    //si el numero generado esta en a lista1
    if (listaDeNumerosSorteados.includes(numeroGenerado)) {
      return generarAleatorio();
    }else{
      listaDeNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
    //si no sigue normal
  }
}


condicionesIniciales()



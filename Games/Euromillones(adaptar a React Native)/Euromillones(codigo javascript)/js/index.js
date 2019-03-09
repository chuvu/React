/*! Alan García Navarro */

// Cuando se pulse al botón Jugar
var jugarButton = document.querySelector(".jugarButton");
jugarButton.addEventListener("click", function() {
  document.querySelector(".jugar").classList.toggle("toggleButton");
});

// Cuando se pulse al botón Instrucciones
var instruccionesButton = document.querySelector(".instruccionesButton");
instruccionesButton.addEventListener("click", function() {
  document.querySelector(".instrucciones").classList.toggle("toggleButton");
});

var numeros = document.querySelector('.numeros');
var numerosCheckedBoxes = [];
var num = 0;
var numerosRellenados = false;

var estrellasCheckedBoxes = [];
var estrellas = document.querySelector('.estrellas');
var numEstrellas = 0;
var estrellasRellenadas = false;

// Inserta 50 checkboxes con los números
for (var i = 1; i <= 50; i++) {
  numeros.innerHTML += '<label><input type="checkbox" value=' + i + ' onchange="limiteSeleccionNumeros(this)"><span>' + i + '</span></label>';
}

// Inserta 11 checkboxes con las estrellas
for (var i = 1; i <= 11; i++) {
  estrellas.innerHTML += '<label><input type="checkbox" value=' + i + ' onchange="limiteSeleccionEstrellas(this)"><span>' + i + '</span></label>';
}

// Función para limitar la selección a 5 números, ni 1 más ni 1 menos
function limiteSeleccionNumeros(esteNumero) {
  var limiteNumero = 5;

  // Si el checkbox actual se ha "marcado"
  if (esteNumero.checked) {
    // Si llega al límite de 5 números seleccionados, el número se deselecciona y avisa al usuario
    if (num == limiteNumero) {
      esteNumero.checked = false;
      num = 5;

      // Muestra un alert() de la librería "SweetAlert"
      swal({
        title: "¡Cuidado!",
        text: "No puedes elegir más de 5 números. Para rectificar, pinche en un número ya seleccionado.",
        type: "warning",
        allowOutsideClick: true
      });
    }
    // Insertamos el valor del checkbox en el array
    else {
      numerosCheckedBoxes.push(esteNumero.value);
      num++;
    }
  }
  // Si el checkbox se desmarca...
  else {
    // Cogemos la posición del array donde se encuentra el elemento actual a ser eliminado
    var pos = numerosCheckedBoxes.indexOf(esteNumero.value);

    // Borramos dicho elemento que se encuentra en esa posición
    numerosCheckedBoxes.splice(pos, 1);

    // Si no se tica, el valor del checkbox pasa a ser false
    esteNumero.checked = false;
    num--;
  }
}

// Lo mismo para limitar el número de estrellas a 2
function limiteSeleccionEstrellas(esteNumero) {
  var limiteEstrellas = 2;

  if (esteNumero.checked) {
    if (numEstrellas == limiteEstrellas) {
      esteNumero.checked = false;
      numEstrellas = 2;

      swal({
        title: "¡Cuidado!",
        text: "No puedes elegir más de 2 estrellas. Para rectificar, pinche en una estrella ya seleccionada.",
        type: "warning",
        allowOutsideClick: true
      });
    } else {
      estrellasCheckedBoxes.push(esteNumero.value);
      numEstrellas++;
    }
  } else {
    var pos = estrellasCheckedBoxes.indexOf(esteNumero.value);
    estrellasCheckedBoxes.splice(pos, 1);
    esteNumero.checked = false;
    numEstrellas--;
  }
}

// Ordena los números de menor a mayor
function ordenarNumeros(a, b) {
  return a - b;
}

var confirmarBoleto = document.querySelector(".confirmarBoleto");
confirmarBoleto.disabled = false;

// Cuando se pulse en el botón "¡SUERTE!"
confirmarBoleto.addEventListener("click", function() {
  if (num == 5) {
    numerosCheckedBoxes.sort(ordenarNumeros);
    numerosRellenados = true;
  }

  if (numEstrellas == 2) {
    estrellasCheckedBoxes.sort(ordenarNumeros);
    estrellasRellenadas = true;
  }

  // Comprobamos que se han rellenado los 5 números y las 2 estrellas para comenzar a jugar
  if (numerosRellenados == true && estrellasRellenadas == true) {
    jugarEuromillon();
    confirmarBoleto.disabled = true;
    document.querySelector(".mensajeAciertos").style.display = "block";
    document.querySelector(".jugarEuromillon").style.display = "block";
  } else {
    swal({
      title: "¡Cuidado!",
      text: "Tienes que elegir obligatoriamente 5 números y 2 estrellas.",
      type: "warning",
      allowOutsideClick: true
    });
  }
});

function jugarEuromillon() {
  var tuCombinacion = document.querySelector(".tuCombinacion");
  var combinacionGanadora = document.querySelector(".combinacionGanadora");

  // Accede a la segunda celda de todas las filas de la tabla
  var todosLosPremios = document.querySelectorAll(".tablaPremios td:nth-child(2)");

  var tuCombinacionArray = [];
  var combinacionGanadoraArray = [];
  var numerosGanadoresArray = [];
  var estrellasGanadorasArray = [];
  var numeroAleatorio = 0;
  var numerosAcertados = 0;
  var estrellasAcertadas = 0;
  var totalAciertos = "";
  var pos = 0;

  numerosCheckedBoxes.forEach(function() {
    // Genera números aleatorios entre 1 y 50 y los metemos en el array
    numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    numerosGanadoresArray.push(parseInt(numeroAleatorio));
  });

  estrellasCheckedBoxes.forEach(function() {
    // Genera estrellas aleatorias entre 1 y 11 y los metemos en el array
    numeroAleatorio = Math.floor(Math.random() * 11) + 1;
    estrellasGanadorasArray.push(parseInt(numeroAleatorio));
  });

  // Ordenamos de menor a mayor los números y las estrellas aleatorias ganadoras
  numerosGanadoresArray.sort(ordenarNumeros);
  estrellasGanadorasArray.sort(ordenarNumeros);

  // Combinamos los números y las estrellas en un mismo array
  tuCombinacionArray = numerosCheckedBoxes.concat(estrellasCheckedBoxes);
  combinacionGanadoraArray = numerosGanadoresArray.concat(estrellasGanadorasArray);

  // Genera un nuevo número aleatorio en caso de duplicidad de números en el array
  regenerarNumeroAleatorio();

  // Después del 5º número, añade el caracter "+" para saber que los 2 últimos números son estrellas
  tuCombinacionArray.splice(5, 0, " + ");
  combinacionGanadoraArray.splice(5, 0, " + ");

  // Muestra tanto tus números como los generados aleatoriamente
  combinacionGanadoraArray.forEach(function(combGanadora, i) {
    combinacionGanadora.innerHTML += combGanadora + " ";
    tuCombinacion.innerHTML += tuCombinacionArray[i] + " ";
  });

  // Averigua el número de aciertos de los números
  numerosGanadoresArray.forEach(function(numGanadores, i) {
    numerosCheckedBoxes.forEach(function(numSeleccionados, j) {
      if (numGanadores == numSeleccionados) {
        numerosAcertados++;
      }
    });
  });

  // Averigua el número de estrellas acertadas
  estrellasGanadorasArray.forEach(function(estrellasGanadoras, i) {
    estrellasCheckedBoxes.forEach(function(estrellasSeleccionadas, j) {
      if (estrellasGanadoras == estrellasSeleccionadas) {
        estrellasAcertadas++;
      }
    });
  });

  // Muestra el número de aciertos
  totalAciertos = numerosAcertados + "+" + estrellasAcertadas;
  document.querySelector(".mensajeAciertos").innerHTML = "Has acertado " + totalAciertos;

  for (var i = 0; i < todosLosPremios.length; i++) {
    // Si el valor del atributo "data-aciertos" es igual a los aciertos...
    if (todosLosPremios[i].dataset.aciertos == totalAciertos) {
      // A esa fila se le añade la clase ".acierto" y se iluminará de verde
      todosLosPremios[i].parentElement.classList.add("acierto");
      pos = i;
    }
  }

  // Cuando se pulse en el botón reintentar, todos los valores se reinician
  document.querySelector(".reintentar").addEventListener("click", function() {
    todosLosPremios[pos].parentElement.classList.remove("acierto");
    reiniciar();
  });

  function reiniciar() {
    numerosCheckedBoxes.length = 0;
    num = 0;
    numerosRellenados = false;

    estrellasCheckedBoxes.length = 0;
    numEstrellas = 0;
    estrellasRellenadas = false;

    tuCombinacionArray.length = 0;
    combinacionGanadoraArray.length = 0;
    numerosGanadoresArray.length = 0;
    estrellasGanadorasArray.length = 0;
    todosLosPremios.length = 0;

    numeroAleatorio = 0;
    numerosAcertados = 0;
    estrellasAcertadas = 0;
    totalAciertos = "";

    numeros.innerHTML = "";
    estrellas.innerHTML = "";
    combinacionGanadora.innerHTML = "";
    tuCombinacion.innerHTML = "";

    // Inserta 50 checkboxes con los números
    for (var i = 1; i <= 50; i++) {
      numeros.innerHTML += '<label><input type="checkbox" name="numero" value=' + i + ' onchange="limiteSeleccionNumeros(this)"><span>' + i + '</span></label>';
    }

    // Inserta 11 checkboxes con los números, que serán las estrellas
    for (var i = 1; i <= 11; i++) {
      estrellas.innerHTML += '<label><input type="checkbox" name="estrellas" value=' + i + ' onchange="limiteSeleccionEstrellas(this)"><span>' + i + '</span></label>';
    }

    confirmarBoleto.disabled = false;
    document.querySelector(".mensajeAciertos").style.display = "none";
    document.querySelector(".jugarEuromillon").style.display = "none";
  }

  // Genera un nuevo número aleatorio en caso de duplicidad de números en el array
  function regenerarNumeroAleatorio() {
    for (var i = 0; i < numerosGanadoresArray.length; i++) {
      if (numerosGanadoresArray[i] == numerosGanadoresArray[i + 1]) {
        numerosAleatoriosGanador = Math.floor(Math.random() * 50) + 1;
        numerosGanadoresArray.splice(i, 1, numerosAleatoriosGanador);
      }
    }

    for (var j = 0; j < estrellasGanadorasArray.length; j++) {
      if (estrellasGanadorasArray[j] == estrellasGanadorasArray[j + 1]) {
        estrellasAleatoriasGanador = Math.floor(Math.random() * 11) + 1;
        estrellasGanadorasArray.splice(j, 1, estrellasAleatoriasGanador);
      }
    }
  }
}
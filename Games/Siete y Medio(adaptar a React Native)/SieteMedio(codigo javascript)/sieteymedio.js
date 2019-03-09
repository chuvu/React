var juego_finalizado;
var array_cartas = new Array(41);
var carta;
var palo;
var paloFinal;
var cartaFinal;


function sieteymedio() {

	juego_finalizado = 0;
	document.getElementById("puntosBanca").value = "";
	document.getElementById("puntosJugador").value = "";
	document.getElementById('cartasBanca').innerHTML = "";
	document.getElementById('cartasJugador').innerHTML = "";
}

function nueva_mano() {
	
	if (juego_finalizado != 0) // Bukatu gabeko partida
	{
		alert("Termina la mano!");
		return;
	}
	else {

		limpia_vector();
		document.getElementById("puntosBanca").value = "";
		document.getElementById("puntosJugador").value = "";
		document.getElementById('cartasBanca').innerHTML = "";
		document.getElementById('cartasJugador').innerHTML = "";
		document.getElementById('puntosJugador').value = repartir("jugador"); // Jokalariaren lehen karta
		juego_finalizado = 1;
	}
}

function limpia_vector() { // bektore garbiketa

	for (var i = 0; i < 40; i++) {
		array_cartas[i] = "";
	}
}

function repartir(player) {
	
	no_repetida();
	if(player == "jugador")
		document.getElementById("cartasJugador").innerHTML += '<img class="cartas" src="/'+paloFinal+'/'+cartaFinal+'.jpg">';
	else				// Si reparte la carta a la banca, se muestra en su casilla el nombre de la carta y su palo
		document.getElementById("cartasBanca").innerHTML += '<img class="cartas" src="/'+paloFinal+'/'+cartaFinal+'.jpg">';
	return valor_carta(carta);
}

function no_repetida() {
	
	var sw = 1;
	do {
		carta = barajar(9);
		palo = sacapalo();
		if (palo == "oros") {
			if (array_cartas[carta] != "X")
			{
				array_cartas[carta] = "X";
				sw = 0;
			}
		}
		else if (palo == "copas") {
			if (array_cartas[carta] != "X") {
				array_cartas[carta] = "X";
				sw = 0;
			}
		}
		else if (palo == "espadas") {
			if (array_cartas[carta] != "X") {
				array_cartas[carta] = "X";
				sw = 0;
			}
		}
		else {
			if (array_cartas[carta] != "X") {
				array_cartas[carta] = "X";
				sw = 0;
			}
		}
	} while (sw == 1) // Sale del bucle cuando la carta no se ha repartido ya anteriormente en la misma mano

	cartaFinal = carta; // Gerorako karta
	paloFinal = palo;
	
}

function barajar(max) {
	var num = Math.random() * max;
	return Math.round(num) + 1;
}

function sacapalo() {
	palo = barajar(4);
	if (palo == 1) return "bastos";
	if (palo == 2) return "oros";
	if (palo == 3) return "copas";
	else return "espadas";
}

function valor_carta(carta) {
	if (carta > 7) return 0.5;
	return carta;
}

function kartaBanka() {
	if (juego_finalizado == 0) // Si la mano ha finalizado y se pulsa "Plantarse"		
		return;
	
	document.getElementById('puntosBanca').value = repartir(); // Bankuko lehen karta
	
	while (document.getElementById('puntosBanca').value < document.getElementById('puntosJugador').value && document.getElementById('puntosBanca').value < 7.5) { // Saca cartas mientras que tiene un valor inferior al del jugador y hasta 7.5
		document.getElementById('puntosBanca').value = parseFloat(document.getElementById('puntosBanca').value) + repartir();
	}
	
}



function kartaBat() { //Beste karta bat

	if (juego_finalizado == 0)
	{
		alert("Reparte una nueva mano");
		return;
	}
	else // Si no había finalizado la mano
		document.getElementById('puntosJugador').value = parseFloat(document.getElementById('puntosJugador').value) + repartir("jugador");
	if (document.getElementById('puntosJugador').value > 7.5) // Si se pasa de 7.5
	{
		alert("Te has pasado, gana la banca!");
		juego_finalizado = 0; // Fin de la mano
	}
}

function irabazle() {
	
	if (juego_finalizado == 0)
	{
		alert("Nueva mano");
		return;
	}
	if (document.getElementById('puntosBanca').value > 7.5) // Si la banca tiene más de 7.5 se pasó y pierde
	{
		alert("Ganaste! La banca se ha pasado!");
		juego_finalizado = 0;
	}
	else if (document.getElementById('puntosBanca').value == document.getElementById('puntosJugador').value) // Si banca y jugador empatan, gana la banca
	{
		alert("Juego empatado! Gana la banca!");
		juego_finalizado = 0;
	}
	else // En el caso de que la banca tenga mayor valor total sin pasarse de 7.5
	{
		alert("Gana la banca! Prueba de nuevo!");
		juego_finalizado = 0;
	}
}


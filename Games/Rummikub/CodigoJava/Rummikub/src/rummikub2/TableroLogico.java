package rummikub2;

import java.util.ArrayList;

public class TableroLogico{ // Matriz de 15x15, cada casilla es una instancia de ficha logica
	private 
		FichaLogica [][] tablero;  // tablero que recoge la informacion antes de validad (movimientos del jugador)
		FichaLogica [][] tablerotemp;  // tablero al cual se van a pasar todos los datos en caso de que validar este bien
		ArrayList<FichaLogica> ultimoIngreso; // con cada jugada, aqui se almacenaran las fichas ingresadas para despues devolverlas si es que validar no esta bien				
		
		void hacerCopia(){
			for(int i = 0; i < tablero.length; i++){
				for(int j = 0; j < tablero[i].length; j++){
					tablerotemp[i][j] = tablero[i][j];
				}
			}
		}
		void restaurarCopia(){
			for(int i = 0; i < tablerotemp.length; i++){
				for(int j = 0; j < tablerotemp[i].length; j++){
					tablero[i][j] = tablerotemp[i][j];
				}
			}
		}
	public
		TableroLogico(){
			tablero = new FichaLogica[15][15];
			tablerotemp = new FichaLogica[15][15];
			ultimoIngreso = new ArrayList<>();
			iniciarTableroLogico();
		}
		final void iniciarTableroLogico(){ // Inicia todo el tablero, en cada casilla una instancia de ficha logica con los valores por defecto
			for(int i = 0; i < 15; i++){   // valor -1, color "NULL" 
				for(int j = 0; j < 15; j++){ // esto para evitar los "null Pointer exception"
					tablero[i][j] = new FichaLogica(); // se inician los dos tableros...
					tablerotemp[i][j] = new FichaLogica(); // <<<---
				}
			}
		}
		void printTablero(){
			for(int i = 0; i < tablero.length; i++){
				for(int j = 0; j < tablero[i].length; j++){
					System.out.print("[ " + tablero[i][j].getValorFicha() + "," + tablero[i][j].getColor() + " ]");
				}
				System.out.println("                ");
			}
			System.out.println('\n');
		}
		FichaLogica getFicha(int x,int y){ // get: retorna la ficha logica en la posicion x,y (a esta ficha se le puese sacar el valor y color)
			return this.tablero[x][y];
		}
		void insertarFicha(int x, int y, FichaLogica pFicha){  // set: inseta la ficha en la matriz en la posicion x,y
			this.tablero[x][y] = pFicha;
		}
		void insertarUltimoIngreso(Integer pValor, String pColor){ // para ir insertando en el arrayList de la ultima jugada hecha  (ArrayList ultimoIngreso)
			FichaLogica pFicha = new FichaLogica(pValor, pColor);
			this.ultimoIngreso.add(pFicha);				// este se ejecuta cuando sse ejecuta el insertar ficha (aun no implementado)
		}
		ArrayList<FichaLogica> regresarUltimoIngreso(){ // retorna el arrayList con todas las fichas ingresadas en la jugada realizada
			ArrayList<FichaLogica> temp = this.ultimoIngreso;  // se va a utilizar para 
			ultimoIngreso = new ArrayList<>(); // reinicia este arrayList para ser utilizado en la proxima jugada
			return temp;					// tambien hay que reiniciarlo cuando validar de bien
		}
		ArrayList<FichaLogica> validar(){ // valida las fichas en el tablero (reglas del rummikub
			ArrayList<FichaLogica> temporal = new ArrayList<>(); // arrayList temporal, guarda cada jugada individual
			ArrayList<ArrayList<FichaLogica>> resultado = new ArrayList<>(); //ArrayList de todas las jugadas VALIDAS en el tablero
			boolean banderaTableroBien = true;
			boolean banderaJugadasBien = true;
			for(int i = 0; i < tablero.length; i++){
				for(int j = 0; j < tablero[i].length; j++){
					if(!(tablero[i][j].getColor().equals("NULL"))){  // si se encuentra la primera ficha la anade al temporal
						temporal.add(tablero[i][j]);
					}
					else if(tablero[i][j].getColor().equals("NULL") && (temporal.size() > 0 && temporal.size() < 3) ){ // si se encontro un NULL y hay algo en el temporal
						temporal = new ArrayList<>();																// quiere decir que hay 1 o 2 fichas solas en el tablero
						banderaTableroBien = false;																	//(jugada no valida) y cambia la bandera
					}																								// con esto no entra en la parte de validar las jugadas
					else if(tablero[i][j].getColor().equals("NULL") && temporal.size() >= 3){ // cuando se encuentre el primer NULL despues de haberse encontrado 
						resultado.add(temporal);										// las fichas, pregunta si es temp tiene una jugada (minimo 3 fichas)
						temporal = new ArrayList<>();									// agrega la jugada al resultado
					}
					else{
						temporal = new ArrayList<>(); // sino entro en ninguno de los casos anteriores reinicia el temporal
					}
				}
			}												
			if(banderaTableroBien){ // si arriba los grupos de jugadas estan bien (minimo 3 fichas por grupo) entonces evaluelas  
				for(ArrayList<FichaLogica> Arreglo : resultado){
					if(Arreglo.size() <= 4){   // en este caso puede ser una serie o una escalera (consultar enunciado de la progra)						
						boolean banderaTemp = false;
						int numero = -1;
						ArrayList<Integer> listaColores = new ArrayList<>();
						ArrayList<Integer> listaTemp = new ArrayList<>();
						for(FichaLogica FichaEnArreglo : Arreglo){
							if(!banderaTemp){
								numero = FichaEnArreglo.getValorFicha();
								listaTemp.add(FichaEnArreglo.getValorFicha());
								listaColores.add(FichaEnArreglo.getColor().length());
								banderaTemp = true;				
							}
							else if(banderaTemp && FichaEnArreglo.getColor().length() == listaColores.get(0) && FichaEnArreglo.getValorFicha() - 1 == numero){				
								listaTemp.add(FichaEnArreglo.getValorFicha());
								numero = FichaEnArreglo.getValorFicha();
							}
							else if(banderaTemp && !listaColores.contains(FichaEnArreglo.getColor().length()) && FichaEnArreglo.getValorFicha() == numero){
								listaTemp.add(FichaEnArreglo.getValorFicha());					
								listaColores.add(FichaEnArreglo.getColor().length());
								numero = FichaEnArreglo.getValorFicha();
								
							}
						}
						if(listaTemp.size() != Arreglo.size()){
							banderaJugadasBien = false;
							System.out.println("Entre en false por que una o mas jugadas de serie o escalera (caso <= 4) estan mal hechas.");
						}
						else{					
							System.out.println("Todas las jugadas de caso <= 4 (puede ser serie o escalera) estan bien.");
						}
					}
					else if(Arreglo.size() > 4){   // en este caso solo puede ser una escalera						
						boolean banderaTemp = false;
						int numero = -1;
						String color = Arreglo.get(0).getColor();
						ArrayList<Integer> listaTemp = new ArrayList<>();
						for(FichaLogica FichaEnArreglo : Arreglo){
							if(!banderaTemp){
								numero = FichaEnArreglo.getValorFicha();								
								listaTemp.add(FichaEnArreglo.getValorFicha());
								banderaTemp = true;
							}
							else if(banderaTemp && FichaEnArreglo.getColor().length() == color.length() && FichaEnArreglo.getValorFicha() - 1 == numero){
								listaTemp.add(FichaEnArreglo.getValorFicha());
								numero = FichaEnArreglo.getValorFicha();
							}
						}
						if(listaTemp.size() != Arreglo.size()){
							banderaJugadasBien = false;
							System.out.println("Entre en false por que una o mas jugadas de escalera (caso > 4) estan mal hechas.");
						}
						else{
							System.out.println("Todas las jugadas de escalera estan bien.");
						}
					}
				}
			}			
			if(banderaJugadasBien && banderaTableroBien){
				hacerCopia();
				ultimoIngreso = new ArrayList<>();
				System.out.println("Entre en hacer copia #######");
				System.out.println(">> Todas las jugadas en el tablero estan bien <<");
			}
			else{
				System.out.println("Entre en resturar copia #######");
				restaurarCopia();
				System.out.println(">> Hay una o mas jugadas malas en el tablero <<");
			}
			System.out.println("Bandera tablero: " + banderaTableroBien + "," + "Bandera jugadas:" + banderaJugadasBien);
			System.out.println("Tamano lista de ultimo ingreso: " + ultimoIngreso.size());
			for(FichaLogica ficha : ultimoIngreso){ // devuelve todas las fichas que se ingresaron SI HAY UNA JUGADA MALA
				System.out.println("Color: " + ficha.getColor() + "Valor: " +  ficha.getValorFicha());
			}
			System.out.println(">>>>>>>>>> <<<<<<<<<<");
			System.out.println("");
			System.out.println("");
		return regresarUltimoIngreso(); // aqui si todo esta bien, esta variable estaria vacia, sino estaria llena de las jugadas que hizo el jugador actual
		}
}

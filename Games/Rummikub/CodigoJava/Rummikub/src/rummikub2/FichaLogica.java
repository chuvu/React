package rummikub2;

import java.util.HashMap;

public class FichaLogica { 
	private
		Integer valorFicha;
		String colorFicha;
		HashMap<String,Integer> relacionValores;
	public
		FichaLogica(){
			valorFicha = -1;
			colorFicha = "NULL";
			relacionValores = new HashMap<>();
			iniciarHashMap();
		}
		FichaLogica(Integer pValor, String pColor){
			this.valorFicha = pValor;
			this.colorFicha = pColor;
		}
		void iniciarHashMap(){
			String[] nombreColores = {"/imagen/verde0","/imagen/amarillo0","/imagen/rojo0","/imagen/celeste0"};
			String[] nombreColores2 = {"/imagen/verde","/imagen/amarillo","/imagen/rojo","/imagen/celeste"};
			for(int i = 0; i < 4; i++){
				for(int j = 1; j <= 9; j++){
					relacionValores.put((nombreColores[i] + Integer.toString(j) + ".png"), j);
				}
				for(int j = 10; j <= 13; j++){
					relacionValores.put((nombreColores2[i] + Integer.toString(j) + ".png"), j);
				}
			}
		}
		final Integer getValorHash(String pColor){
			 return relacionValores.get(pColor);
		}
		Integer getValorFicha(){
			return this.valorFicha;
		}
		String getColor(){
			return this.colorFicha;
		}
		void setValorFicha(Integer pValor){
			this.valorFicha = pValor;
		}
		void setColor(String pColor){
			this.colorFicha = pColor;
		}
}

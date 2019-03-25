package rummikub2;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;


public class Tablero extends JFrame{    
    
    private String boton;
    private JButton [][] tablero = new JButton [15][15];
    TableroLogico matrizTableroLogico = new TableroLogico(); //TableroLogico[15][15];
    private JFrame ventana = new JFrame();
    private String[][] auxTablero = new String [15][15];
    private String[][] auxTablero1 = new String [15][15];
    
    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////////GET Y SET//////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    public String[][] getAuxTablero1() {
        return auxTablero1;
    }

    public void setAuxTablero1(String[][] auxTablero1) {
        this.auxTablero1 = auxTablero1;
    }
    
    public JButton[][] getMatrizTablero(){
        return tablero;
    }

    public void setTablero(JButton[][] tablero,int i, int j, String imagen) {
        this.tablero[i][j].setIcon(new ImageIcon(getClass().getResource((String) imagen)));
    }

    public void setMatrizTablero(JButton[][] matrizTablero, int i, int j, int contNombre, int aux){
        this.tablero[i][j] = new JButton();
        this.tablero[i][j].setName(Integer.toString(contNombre));
        this.tablero[i][j].setBounds(70*aux,0,70,70);
        this.tablero[i][j].setIcon(new ImageIcon(getClass().getResource(Datos.MADERA)));
        ventana.getContentPane().add(this.tablero[i][j]);
    }
    
     public String[][] getAuxTablero() {
        return auxTablero;
    }

    public void setAuxTablero(String[][] auxTablero, int i, int j, String ficha) {//va ingresando en la matriz auxiliar las jugadas de la principal
        auxTablero[i][j] = ficha;
    }
    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////////   FIN   //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
  
    
    Tablero(){
        ventana = new JFrame("Rummikub");
        ventana.setSize(1000, 1000);
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setLocation(10,10);
        ventana.setLayout(null);
        ventana.getContentPane().setLayout(new GridLayout(15,15));
        MatrizAux();
            int contNombre=0;
            
            for (int i=0;i<15;i++){
                int aux=0;
                for(int j=0;j<15;j++){
                    setMatrizTablero(tablero, i, j, contNombre, aux);
                    setAuxTablero(auxTablero, i, j, Datos.MADERA);
                    aux++;
                    contNombre++;
                }   
            }
            ventana.setVisible(true);
    }
    
    public void PosicionImagen(int posicion,String letra){
        int i=posicion/15;//divide la posicion para tener i
        int j=posicion%15;//saca el modulo para tener j
        System.out.println(" Letra: " + letra);
        if(letra != null){
            setTablero(tablero, i, j, letra);//ingresa una imagen al tablero //nueva forma de pasar imagenes ya q estan privadas
            setAuxTablero(auxTablero, i, j, letra);//matriz auxiliar
        }       
    }
    
    
    public void accion(String letra){
		if(letra.equals(Datos.COMODIN)){
			Integer[] fichaNumero = {1,2,3,4,5,6,7,8,9,10,11,12,13};
			String[] fichaColor = {"rojo", "verde", "celeste", "amarillo"};
			Object elegirComodinColor = JOptionPane.showInputDialog(null, "Cual  color quiere usar como comodin", "Rummikub", JOptionPane.QUESTION_MESSAGE, null, fichaColor, fichaColor[0]);
			Object elegirComodinNumero = JOptionPane.showInputDialog(null, "Cual numero quiere usar como comodin", "Rummikub", JOptionPane.QUESTION_MESSAGE, null, fichaNumero, fichaNumero[0]);
			if(Integer.parseInt((String)elegirComodinNumero.toString()) < 10){
				letra = "/imagen/" + elegirComodinColor.toString() + "0" + Integer.parseInt((String)elegirComodinNumero.toString()) + ".png";
			}
			else{
				letra = "/imagen/" + elegirComodinColor.toString() + Integer.parseInt((String)elegirComodinNumero.toString()) + ".png";
			}
		}
	int i = 0;
	int j = 0;
        final String[] imagenes = new String[1];
        final int condicion = 0;
        for (i=0;i<15;i++){
            for(j=0;j<15;j++){
		tablero[i][j].addActionListener(new ActionListener(){
                    @Override
                    public void actionPerformed(ActionEvent e){
                        boton = ((JButton)e.getSource()).getName();//escuchar a los botones del atril posiciones
                        //System.out.println("----->"+boton);
                        int indiceI = (Integer.parseInt(boton))/15; //divide la posicion para tener i
                        int indiceJ = (Integer.parseInt(boton))%15; //saca el modulo para tener j
                        
                        ///////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////Mover dentro del tablero////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////
                        //System.out.println(getAuxTablero()[indiceI][indiceJ]);
                        
                        //OJO SOLO PARA CRIS
                        //OJO SOLO PARA CRIS
                        //SI QUITA ESTE IF:  //se la vera con paez!!!!
                        //asi q usted decide
                        if(imagenes[0]==null){//pregunta si va selecciono una imagendentro del tablero si no entra aca
                            if(getAuxTablero()[indiceI][indiceJ].equals(Datos.MADERA) == false){//para poder mover una imagen tiene q ser diferente de la imagen madera, si es diferente entonces
                               imagenes[0] = getAuxTablero()[indiceI][indiceJ];//guarda en un auxiliar la imagen encontrada
                               setAuxTablero(auxTablero, indiceI, indiceJ, Datos.MADERA);
                               matrizTableroLogico.getFicha(indiceI,indiceJ).setColor("NULL");
                               tablero[indiceI][indiceJ].setName(boton);
                               PosicionImagen(Integer.parseInt(boton),Datos.MADERA);//quita la imagen q vamos a mover y pone de madera(obvio la imagen queda guardada en variable imagenes)
                               matrizTableroLogico.getFicha(indiceI, indiceJ).setValorFicha(-1);
                            }
                        }
                            else if(imagenes[0]!=null){//si ya la encontro entonces tiene q decir para donde la quiere mover
                                System.out.println("entro a la parte de va");
                                System.out.println(imagenes[0]);
                                PosicionImagen(Integer.parseInt(boton), (String)imagenes[0]);//mueve la imagen
                                validaciones(indiceI, indiceJ, imagenes[0]);
                                imagenes[0] = null;//regresa a null la imagen encontrada
                        }
                        ///////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////Fin de mover en tablero////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////
                    }
                });
				
            }
        }
        if(boton != null ){ // ESTO EVITA CAERLE ENCIMA A UNA FICHA EN EL TABLERO <<<<<<<<<<<<<<<<
            int indiceI = (Integer.parseInt(boton))/15; //divide la posicion para tener i
            int indiceJ = (Integer.parseInt(boton))%15; //saca el modulo para tener j
            if(matrizTableroLogico.getFicha(indiceI,indiceJ).getValorFicha() == -1){
                validaciones(indiceI, indiceJ, letra);//guarda en tablero logico la jugada, ademas cambia la imagen en el atril :)
            }
	}
    }
    private void validaciones(int indiceI, int indiceJ, String letra){//para tenerlo mas ordenado lo hice una funcion!!!!!!!!!!!
        if(matrizTableroLogico.getFicha(indiceI,indiceJ).getValorFicha() == -1){//aveces pasa que el boton es null y puede dar error
            System.out.println("hola entro a la validaccion espero q no entre cando no tenga eq entrar xD");
                PosicionImagen(Integer.parseInt(boton),letra);//manda la letra a cambiar y la posicion en el tablero.	
		matrizTableroLogico.getFicha(indiceI, indiceJ).setColor(letra);
		matrizTableroLogico.getFicha(indiceI, indiceJ).setValorFicha(matrizTableroLogico.getFicha(indiceI, indiceJ).getValorHash(letra));
                matrizTableroLogico.insertarUltimoIngreso(matrizTableroLogico.getFicha(indiceI, indiceJ).getValorHash(letra), letra);
                
            }
    
    }
    
    public boolean TurnoInicial30(){
		ArrayList<Integer> coordenadasI = new ArrayList<>();
		ArrayList<Integer> coordenadasj = new ArrayList<>();
        int cont=0;
        for (int i=0;i<15;i++){
            for(int j=0;j<15;j++){
                if (auxTablero[i][j]!=auxTablero1[i][j]){
                    System.out.println("valoor "+matrizTableroLogico.getFicha(i, j).getValorFicha());
                    cont+=matrizTableroLogico.getFicha(i, j).getValorFicha();
					coordenadasI.add(i);
					coordenadasj.add(j);
                }
            }
        }
        if (cont>=30){
            return true;
        }else{
			for(int i = 0; i < coordenadasI.size(); i++){
				FichaLogica fichaTemp = new FichaLogica(-1, "NULL");
				matrizTableroLogico.insertarFicha(coordenadasI.get(i), coordenadasj.get(i), fichaTemp);
			}
            return false;
        }
    }
    
    public void copiarTablerosAux(){
        for(int i=0; i<15; i++){
            for(int j=0; j<15; j++){
                auxTablero1[i][j]=auxTablero[i][j];
                
            }
        }
    }
    
    private void MatrizAux(){
        for (int i=0; i<15; i++){
            for (int j=0; j<15; j++){
                auxTablero1[i][j]=Datos.MADERA;
            }
        }
    }
    
}
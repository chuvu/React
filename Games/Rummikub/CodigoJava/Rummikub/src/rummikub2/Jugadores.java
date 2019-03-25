package rummikub2;

//import java.awt.event.ActionEvent;  <--- CRIS COMENTÓ ESTA LÍNEA ... <---JOSE PABLO ESTUVO AQUI :)
//import java.awt.event.ActionListener;  <--- CRIS COMENTÓ ESTA LÍNEA ... <---JOSE PABLO ESTUVO AQUI :)
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;


public class Jugadores extends Tablero{
    
    private int jugadores;//lleva la cantidad de jugadores  
    private JFrame ventanaJugador = new JFrame();//nombre de la ventana
    private JButton[][] botones = new JButton[1][24];//botones de Atril
    private JButton[] opciones = new JButton[2];//botones opcionales pasar y validar
    public String[][] jugadoresFichasImagenes= new String[4][24];//fichas de los jugadores guardadas por filas jugador1 fila 0...etc 
    //para saber cual fila es la correcta se utilicza actual 
    private int[] turnoInicial = {1,1,1,1};
    private String[][] jugadoresFichasImagenesAux = new String[4][24];//botones de Atril aux

    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////////GET Y SET//////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
        
    public int getJugadores() {
        return jugadores;
    }
    
    public void setJugadores(int jugadores) {    
        this.jugadores = jugadores;
    }

    public JButton[][] getBotones() {
        return botones;
    }

    private void setBotones(JButton[][] botones,int j, int contNombre,int aux, int cero_uno){
        
        if(cero_uno==1){//crea los botones de la primera fila
            this.botones[0][j]= new JButton();//crea los botones
            this.botones[0][j].setName(Integer.toString(contNombre));
            this.botones[0][j].setBounds(70*j,0,70,70);//localizacion y tamaño de los botones en la ventana
            ventanaJugador.getContentPane().add(this.botones[0][j]);//agrega botones creados ala  ventana
        }else if(cero_uno == 0){//crea los botones de la segunda fila
            this.botones[0][j]= new JButton();//crea los botones
            this.botones[0][j].setName(Integer.toString(contNombre));
            this.botones[0][j].setBounds(70*aux,70,70,70);//localizacion y tamaño de los botones en la ventana
            ventanaJugador.getContentPane().add(this.botones[0][j]);//agrega botones creados ala  ventana
        }                           
        
    }
    
    private void setCambiarBotones(JButton[][] botones, int i, int j, String imagen){//lo que pasa de parametro es la matriz, i y j de la matriz y la imagen a la que va a cambiar
        this.botones[i][j].setIcon(new ImageIcon(getClass().getResource((imagen))));//guarda una imagen
    }
    
    public JButton[] getOpciones() {
        return opciones;//regresa opciones
    }

    private void setOpciones(JButton[] opciones, int cero_uno) {
        if(cero_uno==1){//si es 1no entonces crea el boton pasar
            this.opciones[1]= new JButton("Pasar turno");
            this.opciones[1].setBounds(120, 140, 120, 40);
            ventanaJugador.getContentPane().add(this.opciones[1]);
            
        }else if(cero_uno == 0){//si es 0 crea el boton validar
            this.opciones[0]= new JButton("Validar jugada");
            this.opciones[0].setBounds(0, 140, 120, 40);
            ventanaJugador.getContentPane().add(this.opciones[0]);
            
        } 
    }

    
    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////////   FIN   //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////    
    
    public int[][] fichas ={ {2,2,2,2,2,2,2,2,2,2,2,2,2}, //matriz de la canidad de fichas funciona en conjunto con la matris de las imagenes de las fichas 
                             {2,2,2,2,2,2,2,2,2,2,2,2,2},
                             {2,2,2,2,2,2,2,2,2,2,2,2,2},
                             {2,2,2,2,2,2,2,2,2,2,2,2,2}
                            };
    ///////////////////////////////////////Herencia de matriz tablero/////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public String[][] imagenes ={ {Datos.VERDE_1, Datos.VERDE_2, Datos.VERDE_3, Datos.VERDE_4, Datos.VERDE_5, Datos.VERDE_6, Datos.VERDE_7, Datos.VERDE_8, Datos.VERDE_9, Datos.VERDE_10, Datos.VERDE_11, Datos.VERDE_12, Datos.VERDE_13 }, 
                                  {Datos.AMARILLO_1, Datos.AMARILLO_2, Datos.AMARILLO_3, Datos.AMARILLO_4, Datos.AMARILLO_5, Datos.AMARILLO_6, Datos.AMARILLO_7, Datos.AMARILLO_8, Datos.AMARILLO_9,  Datos.AMARILLO_10, Datos.AMARILLO_11, Datos.AMARILLO_12, Datos.AMARILLO_13},
                                  {Datos.ROJO_1, Datos.ROJO_2, Datos.ROJO_3, Datos.ROJO_4, Datos.ROJO_5, Datos.ROJO_6, Datos.ROJO_7, Datos.ROJO_8, Datos.ROJO_9, Datos.ROJO_10, Datos.ROJO_11, Datos.ROJO_12, Datos.ROJO_13 }, 
                                  {Datos.CELESTE_1, Datos.CELESTE_2, Datos.CELESTE_3, Datos.CELESTE_4, Datos.CELESTE_5, Datos.CELESTE_6, Datos.CELESTE_7, Datos.CELESTE_8, Datos.CELESTE_9, Datos.CELESTE_10, Datos.CELESTE_11, Datos.CELESTE_12, Datos.CELESTE_13 },
                                    };//matriz con las imagenes de las fichas 
    
    public int comodines=2;//int que lleva la cantidad de comodines disponibles
    int actual=0;//para llevar el jugador actual 
    
Jugadores(){
    //ventanaJugador.setSize(70*12+16, 169+40);
    ventanaJugador.setSize(845, 209);
    ventanaJugador.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    ventanaJugador.setLocation(1000,200);
    ventanaJugador.setLayout(null);
    ventanaJugador.setVisible(true);
	ventanaJugador.setResizable(false);
	//boolean bandera = true;
	Integer[] opcionesJugadores = {2,3,4};
	ImageIcon icon = new ImageIcon("logoJuego.png");
	Object eleccion = JOptionPane.showInputDialog(null, "¿Cantidad de jugadores para esta partida?", "Rummikub", JOptionPane.QUESTION_MESSAGE, icon, opcionesJugadores, opciones[0]);
	setJugadores(Integer.parseInt((String)eleccion.toString()));
       
	
    PrepararTurnos(jugadores);
    
    
    ventanaJugador.setTitle("Jugador "+(actual+1));
    
    int contNombre=0; //contador para el nombre de los botones 
               
    for (int j=0;j<12;j++){//ciclo para la primera fila de los botones del atril
        
        setBotones(botones, j, contNombre,0,1);
        contNombre++;  
    }
    int aux=0;
    for (int j=12;j<24;j++){ //for para la segunda fila de los botones del atril 
        
        setBotones(botones, j, contNombre,aux,0);
        contNombre++;
        aux+=1;
    }
    ImprimirTablero();//
    
    setOpciones(opciones, 1);
    setOpciones(opciones, 0);
            
    ventanaJugador.setVisible(true);   
        
    }
private void PrepararTurnos(int jugadores){//Guarda en la matriz de los fichas de los jugadores las 13 fichas segun la cantidad de jugadores
    
    for (int jug=0; jug<jugadores;jug++){//ciclo para hacerlo segun la cantidad de jugadores 
        for (int k=0; k<14; k++){//ciclo para las primeras 13 fichas iniciales para cada jugador
            
            boolean stop=true;
            while(stop != false){ //busca una ficha valida con valores mayor a 0 en la cantidad respectiva para esa ficha 
                Random rnd = new Random();
                
                int i = rnd.nextInt(4); //random para sacar ficha al azar 
                int j = rnd.nextInt(14);
                if(j==13){                         //si j es 13 se toma como un comodin 
                    if(comodines!=0){
                        comodines-=1;
                        jugadoresFichasImagenes[jug][k]=Datos.COMODIN;
                        jugadoresFichasImagenesAux[jug][k]=Datos.COMODIN;
                        stop=false;
                    }    
                }else{                          
                    if (fichas[i][j]!=0){
                        fichas[i][j]-=1;
                        jugadoresFichasImagenes[jug][k]=imagenes[i][j];
                        jugadoresFichasImagenesAux[jug][k]=imagenes[i][j];
                        stop=false;
                    }
                }
            }
        }
    }
}


void Pasar(){   //funcion para pasar de turno agrega una ficha mas en una posicion vacia del atril del jugador y prepara el atril del siguiente jugador 
    boolean stop=true;
    int i=0;
    int j=0;
    
    ventanaJugador.setTitle("Jugador "+(actual+1));
    while(stop !=false){
        Random rnd = new Random();
                
        i = rnd.nextInt(3);
        j = rnd.nextInt(13);
        if(j==13){
            if(comodines!=0){
                comodines-=1;
               
                stop=false;
                }    
        }else{
            if (fichas[i][j]!=0){;
                fichas[i][j]-=1;
                stop=false;
            }
        }
    }
    
    for(int h=0; h<24;h++){
        if (jugadoresFichasImagenes[actual][h]==null){
            
            jugadoresFichasImagenes[actual][h]=imagenes[i][j];
            jugadoresFichasImagenesAux[actual][h]=imagenes[i][j];
            h=33;
        
        }
    }
    if (actual+1<jugadores){
        actual+=1;
    }else{
        actual=0;
    }
	matrizTableroLogico.printTablero(); 
}

void ImprimirTablero(){//funcion para cambiar el atril despues de cada turno a las fichas del jugador actual 
    for (int i=0; i<24; i++){
        if (jugadoresFichasImagenes[actual][i]!=null){
            
            setCambiarBotones(botones, 0, i, (String)jugadoresFichasImagenes[actual][i]);//nueva forma de pasar imagenes ya que esta privadas
        }else{
            
            setCambiarBotones(botones, 0, i, Datos.MADERA);//nueva forma de pasar imagenes ya q estan privadas
        }
    }
}

public void botones(){
        int j=0;   
        accion("");
        getOpciones()[0].addActionListener(new ActionListener(){
                            @Override
                            public void actionPerformed(ActionEvent e){//escuchar a los botones del atril posiciones.
                                                    if(turnoInicial[actual]<30 && TurnoInicial30()==true){
                                                        turnoInicial[actual]=44;
                                                        System.out.println("treinta");
                                                        System.out.println(""+matrizTableroLogico.validar().size());
                                                        if (matrizTableroLogico.validar().size()!=0){
                                                            System.out.println("novalido30");
                                                            TableroNoValido();
                                                            Atrilbueno(1);
                                                            Pasar();
                                                            ImprimirTablero();
                                                        }else{
                                                            System.out.println("si valido30");
                                                            copiarTablerosAux();
                                                            Atrilbueno(2);
                                                            Pasar();                                                            
                                                            ImprimirTablero();
                                                        }
                                                    }else if(turnoInicial[actual]==44){
                                                        if (matrizTableroLogico.validar().size()!=0){
                                                            System.out.println("novalido");
                                                            TableroNoValido();
                                                            Atrilbueno(1);
                                                            Pasar();
                                                            ImprimirTablero();
                                                        }else{
                                                        
                                                            System.out.println("si valido");
                                                            copiarTablerosAux();
                                                            Atrilbueno(2);
                                                            Pasar();
                                                            ImprimirTablero();
                                                        }
                                                    }else{
                                                        System.out.println("NONOVALIDO");
                                                        TableroNoValido();
                                                        Atrilbueno(1);
                                                            Pasar();
                                                            ImprimirTablero();
                                                    }
                            }
                            });
        getOpciones()[1].addActionListener(new ActionListener(){
                            @Override
                            public void actionPerformed(ActionEvent e){//escuchar a los botones del atril posiciones
                                TableroNoValido();
                                Atrilbueno(1);
                                Pasar();//pasa el turno al siguiente jugador.
                                ImprimirTablero();//imprime el tablero con las siguientes imagenes del siguiente jugador.
                            }
                            });
        for(j=0;j<24;j++){
                        getBotones()[0][j].addActionListener(new ActionListener(){
                            @Override
                            public void actionPerformed(ActionEvent e){//escuchar a los botones del atril posiciones

                                String nombre = ((JButton)e.getSource()).getName();//Dice el numero de la ficha en el atril
                                int numero = Integer.parseInt(nombre);//convertir el numero de la posicion de ficha
                                quitarImagen(numero);
                                accion(jugadoresFichasImagenes[actual][numero]);//AQUI CAMBIAR DE BOTON EN EL TABLERO
                                jugadoresFichasImagenes[actual][numero]=null;
                            }
                        });

                    }
}
        
    
   
    
    public void quitarImagen(int pos){
        
        setCambiarBotones(botones, 0, pos, Datos.MADERA);//nueva forma de pasar imagenes ya q estan privadas
    }

private void TableroNoValido(){
        for(int i=0; i<15; i++){
            for(int j=0; j<15; j++){
                if (getAuxTablero1()[i][j]!=null){
                    getMatrizTablero()[i][j].setIcon(new ImageIcon(getClass().getResource((String)getAuxTablero1()[i][j])));
                    getAuxTablero()[i][j]=getAuxTablero1()[i][j];
                    
                }else{
                    getMatrizTablero()[i][j].setIcon(new ImageIcon(getClass().getResource((String)Datos.MADERA)));

                }
            }
        }
    }

private void Atrilbueno(int tip){
    for (int j=0; j<24; j++){
        if (jugadoresFichasImagenes[actual][j]!=jugadoresFichasImagenesAux[actual][j] && tip==1){
            jugadoresFichasImagenes[actual][j]=jugadoresFichasImagenesAux[actual][j];
        }else if(tip==2){
            jugadoresFichasImagenesAux[actual][j]=jugadoresFichasImagenes[actual][j];
        }
    }
}
}







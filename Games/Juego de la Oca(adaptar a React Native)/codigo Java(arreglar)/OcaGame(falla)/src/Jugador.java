import java.awt.Graphics2D;
import java.awt.Image;
import javax.swing.ImageIcon;
import java.io.File;
import java.util.ArrayList;

public class Jugador
{
    private Graphics2D g;
    
    private int casilla;
    private int casillat;
    private int id;
    
    private ArrayList<Jugador> jugadores;
    
    public boolean pasapozo;
    private boolean muerto;
    
    private int turnos_atrapado;
    private boolean pozo;
    private boolean meta;
    
    private int coordenadas_x[] = new int[] {
    80, 240, 320, 380, 440, 500, 560, 620, 680,
    720, 720, 720, 720, 720, 720, 720, 720, 720,
    700, 600, 520, 440, 380, 320, 260, 200, 120, 60,
    60, 60, 60, 60, 60, 60, 60, 60,
    130, 200, 270, 340, 410, 460, 530, 600, 620,
    620, 620, 620, 620, 620,
    520, 460, 400, 340, 280, 220,
    180, 180, 180, 180,
    240, 300, 400
    };
    
    private int coordenadas_y[] = new int[] {
    720, 720, 720, 720, 720, 720, 720, 740, 700,
    640, 560, 480, 420, 360, 320, 260, 180, 120,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    140, 200, 270, 340, 410, 470, 540, 620,
    600, 600, 600, 600, 600, 600, 600, 600,
    520, 440, 380, 320, 260, 180,
    180, 180, 180, 180, 180, 180,
    250, 310, 370, 430, 450, 450, 350
    };
    
    
    public Jugador(int id) {
        this.id = id;
        casilla = 1;
        casillat = 1;
        
        pasapozo = false;
        muerto = false;
          
        pozo = false;
        meta = false;
        turnos_atrapado = 0;
    }
    
    public void config(ArrayList<Jugador> j) {
        this.jugadores = j;
    }
    
    public boolean pasopozo() {
        boolean temp = pasapozo;
        pasapozo = false;
        return temp;
    }
    
    public boolean mover(int tirada) {
        if (turnos_atrapado>0) {
            if (pozo) {
                for (Jugador j: jugadores) {
                    if (j==this) {continue;} else {
                        if (j.pasopozo()) {
                            pozo = false;
                            turnos_atrapado = 0;
                        }
                    }
                }
            }
            turnos_atrapado--;
            return true;
        }
        if ((casillat+tirada) > 63) {
            int aux = ((casillat+tirada)-63);
            casillat = 63-aux;
        } else {
            casillat+=tirada;
        }
        switch (casillat) {
            case 5: Sonido.oca(); casillat = 9;
            break;
            case 6: Sonido.puente(); casillat = 12;
            break;
            case 12: Sonido.puente(); casillat = 6;
            break;
            case 9: Sonido.oca(); casillat = 14;
            break;
            case 14: Sonido.oca(); casillat = 18;
            break;
            case 18: Sonido.oca(); casillat = 23;
            break;
            case 19: Sonido.pena(); posada(); return true;
            case 23: Sonido.oca(); casillat = 27;
            break;
            case 26: Sonido.dado(); casillat = 53;
            break;
            case 27: Sonido.oca(); casillat = 32;
            break;
            case 31: Sonido.pena(); pozo(); return true;
            case 32: Sonido.oca(); casillat = 36;
            break;
            case 36: Sonido.oca(); casillat = 41;
            break;
            case 41: Sonido.oca(); casillat = 45;
            break;
            case 42: Sonido.pena(); casillat = 30; return true;
            case 45: Sonido.oca(); casillat = 50;
            break;
            case 50: Sonido.oca(); casillat = 54;
            break;
            case 52: Sonido.pena(); prision(); return true;
            case 53: Sonido.dado(); casillat = 26;
            break;
            case 54: Sonido.oca(); casillat = 59;
            break;
            case 58: Sonido.muerte(); muerto = true; casillat = 1; return true;
            case 59: Sonido.oca(); casillat = 54;
            break;
            case 63: Sonido.bien(); meta();
            break;
            default: return true;
            
        }
        return false;
    }
    
    public boolean animando() {
        return (casilla != casillat);
    }
    
    private void posada() {
        Sonido.pena();
        turnos_atrapado = 2;
    }

    private void prision() {
        Sonido.pena();
        turnos_atrapado = 3;
    }
    
    private void pozo() {
        Sonido.pena();
        pozo = true;
        turnos_atrapado = 4;
    }
    
    private void meta() {
        Sonido.bien();
        meta = true;
    }
    
    public boolean draw(Graphics2D g) {
        if (casilla == 63 && meta == true) {
        return false;
        }
        if (casilla == 31) {pasapozo=true;}
        if (casilla == 1) {muerto = false;}
        if (casilla != casillat) {
            if (casillat > casilla) {
                casilla++;
            } else {
                casilla--;
            }
            Sonido.mover();
        }
        String file;
        switch (id) {
            case 0: file = "/img/player0.png";
            break; 
            case 1: file = "/img/player1.png";
            break;
            case 2: file = "/img/player2.png";
            break;
            case 3: file = "/img/player3.png";
            break;
            default: file = "/img/player0.png";
        }
        File f = new File(file);
        if(f.exists() && !f.isDirectory()) {    
            Image img = new ImageIcon(file).getImage();
            g.drawImage(img, getcasillax(), getcasillay(), 40, 40, null);
            try {
                if (muerto) {Thread.sleep(20);} else {
                Thread.sleep(150);}
            } catch (InterruptedException ie) {} 
            return true;
        } else {
            System.out.println("Archivo "+ f.getName() + " no encontrado");
            return false;
        }
    }
    
    private int getcasillax() {
        try {
            return coordenadas_x[casilla-1];
        } catch (ArrayIndexOutOfBoundsException a) {
            System.out.println("ARRAY OUT OF BOUNDS CASILLA: "+ casilla);
            return 0;}
    }
    private int getcasillay() {
        try {
            return coordenadas_y[casilla-1];
        } catch (ArrayIndexOutOfBoundsException a) {            
            System.out.println("ARRAY OUT OF BOUNDS CASILLA: "+ casilla);
            return 0;
        }
    }
}
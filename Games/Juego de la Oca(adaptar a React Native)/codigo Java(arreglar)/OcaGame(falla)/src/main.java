import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.ArrayList;

public class main extends JPanel implements KeyListener {

    private boolean END;
    private Dado dado;
    private ArrayList<Jugador> jugadores = new ArrayList<>();
    private int turno;
    
    public main(int jugadores) {
        dado = new Dado();
        for (int i = 0; i < jugadores; i++) {
            this.jugadores.add(new Jugador(i));
        }
        addKeyListener(this);
        setFocusable(true);
        requestFocusInWindow();
        END = false;
        turno = 0;
    }
    
    public boolean end() {
        return END;
    }
    
    @Override 
    public void paint(Graphics e) {
        super.paint(e);
        Graphics2D g2d = (Graphics2D)e;
        dado.config(g2d);
        if (!Mapa.draw(g2d)) {
            END = true;
        }
        dado.draw(g2d);
        for (Jugador j: jugadores) {
            j.config(jugadores);
            if (!j.draw(g2d)) {
                END = true;
            }
        }
        try {
            Thread.sleep(10);
        } catch (InterruptedException ie) {} 
    }

    @Override
    public void keyPressed(KeyEvent e) {
    
     int key = e.getKeyCode();
    
     if (key == KeyEvent.VK_SPACE) {
         for (Jugador j: jugadores) {
             if (j.animando()) {return;}
         }
         if (jugadores.get(turno).mover(dado.tirar())) {
             if (turno >= (jugadores.size()-1)) {
                 turno = 0;
             } else {
                 turno++;
             }
         }
     }     
    }
     
    @Override
    public void keyReleased(KeyEvent e) {
    }
     
    @Override
    public void keyTyped(KeyEvent e) {
    }
        
    public static void main(String[] args) {
        JFrame frame = new JFrame("Juego de la Oca");
        frame.setSize(1030,847);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        main panel = new main(2);
        frame.add(panel);
        frame.setVisible(true);
        
        while (!panel.end()) {
            panel.repaint();
        }
        System.out.println("FINAL");
    }
}

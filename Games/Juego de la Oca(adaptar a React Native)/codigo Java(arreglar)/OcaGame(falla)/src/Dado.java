import java.io.File;
import java.awt.Image;
import javax.swing.ImageIcon;
import java.awt.Graphics2D;
import java.util.concurrent.ThreadLocalRandom;

public class Dado
{
    private String tirada = "";
    private int tiradan;
    private Graphics2D animator;
    
    private String strings[] = {
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png"
    };
    
    public Dado() {
        tiradan = tirar();
    }
    
    public void config(Graphics2D g) {
        if (animator==null) {
            animator = g;
        }
    }
        
    public boolean draw(Graphics2D g) {
            File f = new File(tirada);
            if(f.exists() && !f.isDirectory()) {    
                Image img = new ImageIcon(tirada).getImage();
                g.drawImage(img, 805, 0, null);
                return false;
            } else {
                System.out.println("Archivo "+ f.getName() + " no encontrado");
                return false;
            }
    }
    
    public int tirar() {
        Sonido.tirar();
        tiradan = ThreadLocalRandom.current().nextInt(1, 6 + 1);
        switch (tiradan) {
            case 1: tirada = "img/1.png";
            break;
            case 2: tirada = "img/2.png";
            break;
            case 3: tirada = "img/3.png";
            break;
            case 4: tirada = "img/4.png";
            break;
            case 5: tirada = "img/5.png";
            break;
            case 6: tirada = "img/6.png";
            break;
            default: tirada = "img/1.png";
        }
        return tiradan;
    }
}
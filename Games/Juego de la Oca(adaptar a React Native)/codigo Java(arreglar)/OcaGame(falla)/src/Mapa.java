import java.io.File;
import java.awt.Image;
import javax.swing.ImageIcon;
import java.awt.Graphics2D;
public class Mapa
{
    public static boolean draw(Graphics2D g) {
        File f = new File("/img/BG.jpg");
        if(f.exists() && !f.isDirectory()) {    
            Image img = new ImageIcon("/img/BG.jpg").getImage();
            g.drawImage(img, 0, 0, null);
            return true;
        } else {
            System.out.println("Archivo "+ f.getName() + " no encontrado");
            return false;
        }
    }
}

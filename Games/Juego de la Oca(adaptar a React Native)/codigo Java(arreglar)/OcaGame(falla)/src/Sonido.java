import javax.sound.sampled.*;
import java.io.File;

public class Sonido
{
   public Sonido() {}
   
   public static void oca() {play("/videoaudio/oca.wav");}
   public static void puente() {play("/videoaudio/puente.wav");}
   public static void dado() {play("/videoaudio/dado.wav");}
   public static void pena() {play("/videoaudio/pena.wav");}
   public static void muerte() {play("/videoaudio/restart.wav");}
   public static void bien() {play("/videoaudio/bien.wav");}
   public static void mover() {play("/videoaudio/mover.wav");}
   public static void tirar() {play("/videoaudio/dado_efecto.wav");}
   
    public static void play(String file)
    {
        try
        {
            Clip clip = AudioSystem.getClip();
            clip.open(AudioSystem.getAudioInputStream(new File(file)));
            clip.start();
        }
        catch (Exception exc)
        {
        }
    }
}

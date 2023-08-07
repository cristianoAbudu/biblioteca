package GUI;
/*
 * Created on 20/04/2006
 *
 */


import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JProgressBar;

import util.BibliotecaFuncoes;




public class Conectando {

    private JFrame jFrame = null;  //  @jve:decl-index=0:visual-constraint="44,20"
    private JPanel jContentPane = null;
    private JLabel jLabel = null;
    private JProgressBar jProgressBar = null;
    public Conectando() {
        super();
        jFrame = getJFrame();
    }

    /**
     * This method initializes jFrame	
     * 	
     * @return javax.swing.JFrame	
     */
    private JFrame getJFrame() {
        if (jFrame == null) {
            jFrame = new JFrame();
            jFrame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
            jFrame.setSize(new java.awt.Dimension(414,177));
            jFrame.setResizable(false);
            jFrame.setUndecorated(true);
            jFrame.setTitle("Estabelecendo conexão com banco de dados");
            BibliotecaFuncoes.estilizarJFrame(jFrame);
            jFrame.setContentPane(getJContentPane());
            jFrame.setVisible(true);
        }
        return jFrame;
    }

    /**
     * This method initializes jContentPane	
     * 	
     * @return javax.swing.JPanel	
     */
    private JPanel getJContentPane() {
        if (jContentPane == null) {
            jLabel = new JLabel();
            jLabel.setBounds(new java.awt.Rectangle(30,45,345,16));
            jLabel.setForeground(java.awt.Color.blue);
            jLabel.setFont(new java.awt.Font("Dialog", java.awt.Font.BOLD, 14));
            jLabel.setText("Estabelecendo conexão com o banco de dados...");
            jContentPane = new JPanel();
            jContentPane.setLayout(null);
            jContentPane.add(jLabel, null);
            jContentPane.add(getJProgressBar(), null);
        }
        return jContentPane;
    }
    
    public void dispose() {
        jFrame.dispose();
    }

    /**
     * This method initializes jProgressBar	
     * 	
     * @return javax.swing.JProgressBar	
     */
    private JProgressBar getJProgressBar() {
        if (jProgressBar == null) {
            jProgressBar = new JProgressBar();
            jProgressBar.setBounds(new java.awt.Rectangle(15,90,375,20));
            jProgressBar.setIndeterminate(true);
        }
        return jProgressBar;
    }

}

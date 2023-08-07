package util;



import java.awt.BorderLayout;
import java.awt.Dimension;

import javax.swing.JFileChooser;
import javax.swing.JInternalFrame;
import javax.swing.JPanel;
public class PatchSetter{
	JFileChooser jFileChooser = null;
	Serializador serializador;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="125,46"
	private JPanel jContentPane = null;
	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	private JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setSize(new Dimension(318, 128));
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}
	/**
	 * This method initializes jContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jContentPane = new JPanel();
			jContentPane.setLayout(new BorderLayout());
		}
		return jContentPane;
	}
	
}

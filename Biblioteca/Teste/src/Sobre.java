package src;


import java.awt.Dimension;
import java.awt.Rectangle;

import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
public class Sobre {

	private JInternalFrame SobreInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="139,22"
	private JPanel jPanel = null;
	private JLabel jLabel = null;
	private JButton jButton = null;
	/**
	 * This method initializes SobreInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getSobreInternalFrame() {
		if (SobreInternalFrame == null) {
			SobreInternalFrame = new JInternalFrame();
			SobreInternalFrame.setSize(new Dimension(335, 162));
			SobreInternalFrame.setClosable(true);
			SobreInternalFrame.setContentPane(getJPanel());
			SobreInternalFrame.setTitle("Sobre o Biblioteca v1.0");
		}
		return SobreInternalFrame;
	}
	/**
	 * This method initializes jPanel	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel() {
		if (jPanel == null) {
			jLabel = new JLabel();
			jLabel.setBounds(new Rectangle(1, 21, 324, 70));
			jLabel.setHorizontalAlignment(SwingConstants.CENTER);
			jLabel.setHorizontalTextPosition(SwingConstants.CENTER);
			jLabel.setText("Sobre a Biblioteca v1.0");
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.add(jLabel, null);
			jPanel.add(getJButton(), null);
		}
		return jPanel;
	}
	/**
	 * This method initializes jButton	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton() {
		if (jButton == null) {
			jButton = new JButton();
			jButton.setBounds(new Rectangle(251, 104, 71, 21));
			jButton.setText("OK");
			jButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					SobreInternalFrame.setVisible(false);
				}
			});
		}
		return jButton;
	}

}

package GUI;


import java.awt.Dimension;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import java.awt.event.KeyEvent;
public class SobreGUI {

	private JInternalFrame SobreInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="139,22"
	private JPanel jPanel = null;
	private JLabel jLabel = null;
	private JButton jButton = null;
	private JLabel jLabel1 = null;
	private JLabel jLabel11 = null;
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
			SobreInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/sobreHelp.gif")));
			SobreInternalFrame.setContentPane(getJPanel());
			SobreInternalFrame.setTitle("Sobre a Biblioteca");
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
			jLabel11 = new JLabel();
			jLabel11.setBounds(new Rectangle(1, 87, 324, 17));
			jLabel11.setHorizontalAlignment(SwingConstants.CENTER);
			jLabel11.setHorizontalTextPosition(SwingConstants.CENTER);
			jLabel11.setText("Protegido de acordo com os termos da lei.");
			jLabel11.setDisplayedMnemonic(KeyEvent.VK_UNDEFINED);
			jLabel1 = new JLabel();
			jLabel1.setBounds(new Rectangle(1, 64, 324, 17));
			jLabel1.setHorizontalAlignment(SwingConstants.CENTER);
			jLabel1.setHorizontalTextPosition(SwingConstants.CENTER);
			jLabel1.setText("Invenire Internacional Informática");
			jLabel1.setDisplayedMnemonic(KeyEvent.VK_UNDEFINED);
			jLabel = new JLabel();
			jLabel.setBounds(new Rectangle(1, 21, 324, 21));
			jLabel.setHorizontalAlignment(SwingConstants.CENTER);
			jLabel.setHorizontalTextPosition(SwingConstants.CENTER);
			jLabel.setDisplayedMnemonic(KeyEvent.VK_UNDEFINED);
			jLabel.setText("Biblioteca v1.0");
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.setBorder(BorderFactory.createEmptyBorder(0, 0, 0, 0));
			jPanel.add(jLabel, null);
			jPanel.add(getJButton(), null);
			jPanel.add(jLabel1, null);
			jPanel.add(jLabel11, null);
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

package GUI;



import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JPanel;
import javax.swing.border.BevelBorder;
import javax.swing.border.TitledBorder;

import bd.entidades.Item;

import util.BibliotecaFuncoes;
import util.ExportaItem;

import controladores.ControladorItem;

public class ExportaItemGUI {

	private BibliotecaGUI chamadoPor;  //  @jve:decl-index=0:
	private JPanel jPanel = null;
	private JPanel jPanel2 = null;
	private JButton JButton = null;
	private JComboBox choice = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="1,10"
	private BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private ControladorItem controlador = new ControladorItem();
	private Item item;
	
	private int select = 1; /* RadioButtons começam com "Titulo" 
	selecionado
	
	1: título
	2: editora
	3: autor
	
	9: código - bem diferente pois
	   chama um método diferente
	   no controlador
	   */
	/**
	 * This method initializes jPanel	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel() {
		if (jPanel == null) {
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			jPanel.add(getJPanel2(), null);
		}
		return jPanel;
	}
	/**
	 * This method initializes jPanel2	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel2() {
		if (jPanel2 == null) {
			jPanel2 = new JPanel();
			jPanel2.setLayout(null);
			jPanel2.setBounds(new Rectangle(5, 5, 265, 69));
			jPanel2.setBorder(BorderFactory.createTitledBorder(null, "Exportar para arquivo \'.txt\':", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel2.add(getButton(), null);
			jPanel2.add(choice, null);
		}
		return jPanel2;
	}
	/**
	 * This method initializes button	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getButton() {
		if (JButton == null) {
			JButton = new JButton();
			JButton.setBounds(new Rectangle(166, 42, 90, 21));
			JButton.setText("Exportar");
			JButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					if (choice.getSelectedIndex()!=0){
					ExportaItem exportador = new ExportaItem();
					exportador.exporta(getJInternalFrame(), item);
					}
					else
					{
												
					}
				}
			});
			
		}
		return JButton;
	}
	/**
	 * This method initializes choice	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getChoice() {
		if (choice == null) {
			choice = new JComboBox(new java.lang.String[] {"Tudo", "Apenas Selecionado"});
			choice.setBounds(new Rectangle(5, 18, 253, 21));
		}
		return choice;
	}
	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setBounds(new Rectangle(0, 0, 283, 110));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Exportar Itens");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/busca.gif")));
			jInternalFrame.setContentPane(getJPanel());
			
		}
		return jInternalFrame;
	}
	public ExportaItemGUI(BibliotecaGUI ChamadoPor, Item item){
		chamadoPor = ChamadoPor;
		this.item = item;
	}
}

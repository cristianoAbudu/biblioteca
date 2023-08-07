

package src;


import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.TitledBorder;

///BRAZILLLA!!!

public class BuscaItemGUI {

	private JPanel jPanel = null;
	private JRadioButton titleButton = null;
	private JRadioButton editoraButton = null;
	private JRadioButton autorButton = null;
	private JRadioButton codigoButton = null;
	private JLabel titulo = null;
	private JLabel label1 = null;
	private JLabel label2 = null;
	private JLabel label3 = null;
	private JPanel busUsuario = null;
	private JPanel jPanel2 = null;
	private JTextField jTextoField = null;
	private JButton JButton = null;
	private JComboBox choice = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="1,10"
	private BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private ControladorItem controlador = new ControladorItem();
	
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
			label3 = new JLabel();
			label3.setText("Código");
			label3.setBounds(new Rectangle(161, 49, 82, 15));
			label2 = new JLabel();
			label2.setText("Autor");
			label2.setBounds(new Rectangle(161, 28, 82, 15));
			label1 = new JLabel();
			label1.setText("Editora");
			label1.setBounds(new Rectangle(39, 49, 82, 15));
			titulo = new JLabel();
			titulo.setText("Título");
			titulo.setBounds(new Rectangle(39, 28, 82, 15));
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			jPanel.add(getBusUsuario(), null);
			jPanel.add(getJPanel2(), null);
			jPanel.add(getChoice(), null);
		}
		return jPanel;
	}
	/**
	 * This method initializes titleButton	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getTitleButton() {
		if (titleButton == null) {
			titleButton = new JRadioButton();
			titleButton.setBounds(new Rectangle(19, 30, 21, 21));
			titleButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=1;/*titulo está selecionado quando select=1*/
					codigoButton.setSelected(false);
					autorButton.setSelected(false);
					titleButton.setSelected(true);
					editoraButton.setSelected(false);
				}
			});
		}
		return titleButton;
	}
	/**
	 * This method initializes editoraButton	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getEditoraButton() {
		if (editoraButton == null) {
			editoraButton = new JRadioButton();
			editoraButton.setBounds(new Rectangle(19, 47, 21, 21));
			editoraButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=2;/*editora está selecionado quando select=2*/
					codigoButton.setSelected(false);
					autorButton.setSelected(false);
					titleButton.setSelected(false);
					editoraButton.setSelected(true);
				}
			});
		}
		return editoraButton;
	}
	/**
	 * This method initializes autorButton	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getAutorButton() {
		if (autorButton == null) {
			autorButton = new JRadioButton();
			autorButton.setBounds(new Rectangle(142, 30, 21, 21));
			autorButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=3;/*autor está selecionado quando select=3*/
					codigoButton.setSelected(false);
					autorButton.setSelected(true);
					titleButton.setSelected(false);
					editoraButton.setSelected(false);
				}
			});
		}
		return autorButton;
	}
	/**
	 * This method initializes codigoButton	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getCodigoButton() {
		if (codigoButton == null) {
			codigoButton = new JRadioButton();
			codigoButton.setBounds(new Rectangle(142, 47, 21, 21));
			codigoButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					select=9;/*código está selecionado quando select=9*/
					LimpaTextoNumero();
					codigoButton.setSelected(true);
					autorButton.setSelected(false);
					titleButton.setSelected(false);
					editoraButton.setSelected(false);
					}
			});
		}
		return codigoButton;
	}
	/**
	 * This method initializes busUsuario	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getBusUsuario() {
		if (busUsuario == null) {
			busUsuario = new JPanel();
			busUsuario.setLayout(null);
			busUsuario.setBounds(new Rectangle(5, 31, 265, 81));
			busUsuario.setBorder(BorderFactory.createTitledBorder(null, "Tipo da busca", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			busUsuario.add(label2, null);
			busUsuario.add(label3, null);
			busUsuario.add(getCodigoButton(), null);
			busUsuario.add(getAutorButton(), null);
			busUsuario.add(titulo, null);
			busUsuario.add(getTitleButton(), null);
			busUsuario.add(getEditoraButton(), null);
			busUsuario.add(label1, null);
		}
		return busUsuario;
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
			jPanel2.setBounds(new Rectangle(5, 114, 265, 69));
			jPanel2.setBorder(BorderFactory.createTitledBorder(null, "Parâmetro da busca", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel2.add(getJTextoField(), null);
			jPanel2.add(getButton(), null);
		}
		return jPanel2;
	}
	/**
	 * This method initializes jTextoField	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextoField() {
		if (jTextoField == null) {
			jTextoField = new JTextField();
			jTextoField.setBounds(new Rectangle(5, 18, 253, 21));
		}
		return jTextoField;
	}
	/**
	 * This method initializes button	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getButton() {
		if (JButton == null) {
			JButton = new JButton();
			JButton.setBounds(new Rectangle(185, 42, 71, 21));
			JButton.setText("Buscar");
			JButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					boolean OK;
					String[] Erro = new String[1];
					Erro[0]="";
					if (select!=9){
						OK=validador.validaCampoTexto(jTextoField, "O campo selecionado", Erro);
						if (OK){
							int chosedTipo =  (Integer)choice.getSelectedIndex()+1;
							controlador.BuscarNome(chosedTipo,select,
													jTextoField.getText()
													);
						}
						else{
							validador.dialogoErroPreenchimento(Erro[0]);
						}
					}
					else{
						OK = validador.validaCampoNumero(jTextoField, "Código", Erro);
						if (OK){
							controlador.BuscarNumero(choice.getSelectedIndex(),Integer.parseInt(jTextoField.getText()));
						}
						else{
							validador.dialogoErroPreenchimento(Erro[0]);
						}
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
			choice = controlador.getTiposCombo();
			choice.setBounds(new Rectangle(5, 5, 265, 21));
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
			jInternalFrame.setBounds(new Rectangle(0, 0, 283, 219));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Buscar Itens");
			jInternalFrame.setContentPane(getJPanel());
			
		}
		return jInternalFrame;
	}
	public BuscaItemGUI(){
		ButtonGroup grupo = new ButtonGroup();
		grupo.add(codigoButton);
		grupo.add(autorButton);
		grupo.add(titleButton);
		grupo.add(editoraButton);
	}
	void LimpaTextoNumero(){//limpa quando muda de numero pra texto ou vice versa.
		if (select==9){
			jTextoField.setText(null);
		}
	}
}

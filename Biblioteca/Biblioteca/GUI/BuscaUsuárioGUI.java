package GUI;


import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.TitledBorder;

import bd.DadosTabela;

import util.BibliotecaFuncoes;

import controladores.ControladorUsuário;


public class BuscaUsuárioGUI {
	
	private BibliotecaGUI chamadoPor;
	private JPanel jPanel = null;
	private JRadioButton jNomeButton9 = null;
	private JRadioButton jCadastroButton1 = null;
	private JRadioButton jCpfButton2 = null;
	private JRadioButton jRgButton3 = null;
	private JLabel label = null;
	private JLabel label1 = null;
	private JLabel label2 = null;
	private JLabel label3 = null;
	private JPanel jPanel1 = null;
	private JPanel jPanel2 = null;
	private JTextField jTextoField = null;
	private JButton buttonBuscar = null;
	private ControladorUsuário controlador = new ControladorUsuário();
	private BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private int select=9; /*RadioButtons começam com "nome" 
	selecionado
	
	1: cadastro
	2: cpf
	3: rg
	
	9: nome - bem diferente pois
	   chama um método diferente
	   no controlador*/
	//private String jTextoListener;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="74,36"
	/**
	 * This method initializes jPanel	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	public JPanel getJPanel() {
		if (jPanel == null) {
			label3 = new JLabel();
			label3.setText("RG");
			label3.setBounds(new Rectangle(179, 49, 45, 15));
			label2 = new JLabel();
			label2.setText("CPF");
			label2.setBounds(new Rectangle(179, 28, 68, 15));
			label1 = new JLabel();
			label1.setText("Cadastro");
			label1.setBounds(new Rectangle(39, 49, 63, 15));
			label = new JLabel();
			label.setText("Nome");
			label.setBounds(new Rectangle(39, 28, 44, 15));
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			jPanel.setBackground(new Color(238, 238, 238));
			jPanel.add(getJPanel1(), null);
			jPanel.add(getJPanel2(), null);
		}
		return jPanel;
	}
	/**
	 * This method initializes jNomeButton9	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getJNomeButton9() {
		if (jNomeButton9 == null) {
			jNomeButton9 = new JRadioButton();
			jNomeButton9.setBounds(new Rectangle(19, 30, 21, 21));
			jNomeButton9.setBackground(new Color(238, 238, 238));
			jNomeButton9.setSelected(true);
			jNomeButton9.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					select=9; // Nome está selecionado quando select=9
					LimpaTextoNumero();
					jRgButton3.setSelected(false);
					jCpfButton2.setSelected(false);
					jNomeButton9.setSelected(true);
					jCadastroButton1.setSelected(false);
				}
			});
		}
		return jNomeButton9;
	}
	/**
	 * This method initializes jCadastroButton1	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getJCadastroButton1() {
		if (jCadastroButton1 == null) {
			jCadastroButton1 = new JRadioButton();
			jCadastroButton1.setBounds(new Rectangle(19, 47, 21, 21));
			jCadastroButton1.setBackground(new Color(238, 238, 238));
			jCadastroButton1.setSelected(false);
			jCadastroButton1.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=1; // Cadastro está selecionado quando select=1
					jRgButton3.setSelected(false);
					jCpfButton2.setSelected(false);
					jNomeButton9.setSelected(false);
					jCadastroButton1.setSelected(true);
				}
			});
		}
		return jCadastroButton1;
	}
	/**
	 * This method initializes jCpfButton2	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getJCpfButton2() {
		if (jCpfButton2 == null) {
			jCpfButton2 = new JRadioButton();
			jCpfButton2.setBounds(new Rectangle(160, 30, 21, 21));
			jCpfButton2.setBackground(new Color(238, 238, 238));
			jCpfButton2.setSelected(false);
			jCpfButton2.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=2; // CPF está selecionado quando select=2
					jRgButton3.setSelected(false);
					jCpfButton2.setSelected(true);
					jNomeButton9.setSelected(false);
					jCadastroButton1.setSelected(false);
				}
			});
		}
		return jCpfButton2;
	}
	/**
	 * This method initializes jRgButton3	
	 * 	
	 * @return javax.swing.JRadioButton	
	 */
	private JRadioButton getJRgButton3() {
		if (jRgButton3 == null) {
			jRgButton3 = new JRadioButton();
			jRgButton3.setBounds(new Rectangle(160, 47, 21, 21));
			jRgButton3.setBackground(new Color(238, 238, 238));
			jRgButton3.setSelected(false);
			jRgButton3.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					LimpaTextoNumero();
					select=3;/*RG está selecionado quando select=3*/
					jRgButton3.setSelected(true);
					jCpfButton2.setSelected(false);
					jNomeButton9.setSelected(false);
					jCadastroButton1.setSelected(false);
					
				}
			});
		}
		return jRgButton3;
	}
	
	

	/**
	 * This method initializes jPanel1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	

	
	private JPanel getJPanel1() {
		if (jPanel1 == null) {
			jPanel1 = new JPanel();
			jPanel1.setLayout(null);
			jPanel1.setBounds(new Rectangle(4, 4, 265, 81));
			jPanel1.setBorder(BorderFactory.createTitledBorder(null, "Buscar no campo", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel1.setBackground(new Color(238, 238, 238));
			jPanel1.add(label2, null);
			jPanel1.add(label3, null);
			jPanel1.add(getJRgButton3(), null);
			jPanel1.add(getJCpfButton2(), null);
			jPanel1.add(label, null);
			jPanel1.add(getJNomeButton9(), null);
			jPanel1.add(getJCadastroButton1(), null);
			jPanel1.add(label1, null);
		}
		return jPanel1;
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
			jPanel2.setBounds(new Rectangle(4, 89, 265, 69));
			jPanel2.setBorder(BorderFactory.createTitledBorder(null, "Buscar o texto", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel2.setBackground(new Color(238, 238, 238));
			jPanel2.add(getJTextoField(), null);
			jPanel2.add(getButtonBuscar(), null);
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
			jTextoField.setBounds(new Rectangle(5, 18, 253, 20));
		}
		return jTextoField;
	}
	/**
	 * This method initializes buttonBuscar	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getButtonBuscar() {
		if (buttonBuscar == null) {
			buttonBuscar = new JButton();
			buttonBuscar.setText("Buscar");
			buttonBuscar.setBounds(new Rectangle(185, 42, 71, 21));
			buttonBuscar.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					boolean OK;
					String[] Erro = new String[1];
					Erro[0]="";
					if (select==9){
						OK=validador.validaCampoTexto(jTextoField, "Nome", Erro);
						
						if (OK){
							DadosTabela dados = controlador.BuscarNome(jTextoField.getText());
							chamadoPor.MostraTabelaResultados(dados,
									"Busca Usuário pelo texto "+jTextoField.getText(),
									"Usuário", null);
														
						}
						
					}
					else {
						OK = validador.validaCampoNumero(jTextoField, "O campo selecionado", Erro);
						if(OK){
							DadosTabela dados = 
							controlador.BuscarNumero(select,
									Integer.parseInt(jTextoField.getText()));
							chamadoPor.MostraTabelaResultados(dados,
									"Busca Usuário pelo número "+jTextoField.getText(),
									"Usuário", null);
						}
						else validador.dialogoErroPreenchimento(Erro[0]);
					}
					
				}
			});
		}
		return buttonBuscar;
	}

	public BuscaUsuárioGUI(BibliotecaGUI ChamadoPor){
		chamadoPor = ChamadoPor;
		ButtonGroup grupo = new ButtonGroup();
		grupo.add(jRgButton3);
		grupo.add(jCpfButton2);
		grupo.add(jNomeButton9);
		grupo.add(jCadastroButton1);
	}
	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setSize(new Dimension(282, 193));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Buscar Usuários");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/busca.gif")));
			jInternalFrame.setContentPane(getJPanel());
		}
		return jInternalFrame;
	}
	void LimpaTextoNumero(){//limpa quando muda de numero pra texto ou vice versa.
		if (select==9){
			jTextoField.setText(null);
		}
	}

}

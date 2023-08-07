package GUI;



import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import bd.DadosTabela;

import util.BibliotecaFuncoes;

import controladores.ControladorEmprestimo;

public class BuscaEmpr�stimoGUI {
	
	private BibliotecaGUI chamadoPor = null;
	private String[] Erro = new String[1];
	private BibliotecaFuncoes valida = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private JPanel jContentPane = null;
	private JTabbedPane painelAbas = null;
	private JPanel porUsu�rioTab = null;
	private JLabel carteirinhaLabel = null;
	private JTextField carteirinhaText = null;
	private JPanel porItemTab = null;
	private JLabel tituloLabel = null;
	private JTextField codigoTxt = null;
	private JPanel BuscaEmpr�stimo = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="104,17"
	private JPanel jContentPane1 = null;
	private JButton porUsrOK = null;
	private JButton porItemOK = null;
	@SuppressWarnings("unused")
	private final String[] ordem = {"Novos primeiro", "Antigos primeiro"};
	@SuppressWarnings("unused")
	private final String[] vetMeses = {"Janeiro",
				            "Fevereiro",
				            "Mar�o",
				            "Abril",
				            "Maio",
				            "Junho",
				            "Julho",
				            "Agosto",
				            "Setembro",
				            "Outubro",
				            "Novembro",
				            "Dezembro"};
		
	private ControladorEmprestimo busca = new ControladorEmprestimo();  //  @jve:decl-index=0:
	//private ControladorItem items = new ControladorItem();  //  @jve:decl-index=0:
	
	//private BaseItem base = new BaseItem();  //  @jve:decl-index=0:
	private JButton listaUsuarios = null;
	private JButton listaItens = null;
	
	
	/**
	 * 
	 * This method initializes jContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jContentPane = new JPanel();
			jContentPane.setLayout(null);
			jContentPane.setBackground(new Color(238, 238, 238));
			jContentPane.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.RAISED));
			jContentPane.add(getBuscaEmpr�stimo(), null);
		}
		return jContentPane;
	}

	/**
	 * This method initializes painelAbas	
	 * 	
	 * @return javax.swing.JTabbedPane	
	 */
	private JTabbedPane getPainelAbas() {
		if (painelAbas == null) {
			painelAbas = new JTabbedPane();
			painelAbas.setBackground(new Color(212, 208, 200));
			painelAbas.setBounds(new Rectangle(4, 16, 282, 175));
			painelAbas.addTab("Por Usu�rio", null, getPorUsu�rioTab(), null);
			painelAbas.addTab("Por Item", null, getPorItemTab(), null);
		}
		return painelAbas;
	}

	/**
	 * This method initializes porUsu�rioTab	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPorUsu�rioTab() {
		if (porUsu�rioTab == null) {
			carteirinhaLabel = new JLabel();
			carteirinhaLabel.setBounds(new Rectangle(15, 24, 105, 15));
			carteirinhaLabel.setText("Carteirinha");
			carteirinhaLabel.setName("nascimento");
			porUsu�rioTab = new JPanel();
			porUsu�rioTab.setLayout(null);
			porUsu�rioTab.setBackground(new Color(238, 238, 238));
			porUsu�rioTab.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			porUsu�rioTab.add(carteirinhaLabel, null);
			porUsu�rioTab.add(getCarteirinhaText(), null);
			porUsu�rioTab.add(getPorUsrOK(), null);
			porUsu�rioTab.add(getListaUsuarios(), null);
		}
		return porUsu�rioTab;
	}

	/**
	 * This method initializes carteirinhaText	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCarteirinhaText() {
		if (carteirinhaText == null) {
			carteirinhaText = new JTextField();
			carteirinhaText.setBounds(new Rectangle(15, 42, 253, 21));
			carteirinhaText.setText("");
		}
		return carteirinhaText;
	}

	/**
	 * This method initializes porItemTab	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPorItemTab() {
		if (porItemTab == null) {
			tituloLabel = new JLabel();
			tituloLabel.setBounds(new Rectangle(15, 24, 73, 15));
			tituloLabel.setText("C�digo");
			porItemTab = new JPanel();
			porItemTab.setLayout(null);
			porItemTab.setBackground(new Color(238, 238, 238));
			porItemTab.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			porItemTab.add(tituloLabel, null);
			porItemTab.add(getCodigoTxt(), null);
			porItemTab.add(getPorItemOK(), null);
			porItemTab.add(getListaItens(), null);
		}
		return porItemTab;
	}

	/**
	 * This method initializes codigoTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCodigoTxt() {
		if (codigoTxt == null) {
			codigoTxt = new JTextField();
			codigoTxt.setBounds(new Rectangle(15, 42, 253, 21));
			codigoTxt.setText("");
		}
		return codigoTxt;
	}

	/**
	 * This method initializes BuscaEmpr�stimo	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getBuscaEmpr�stimo() {
		if (BuscaEmpr�stimo == null) {
			BuscaEmpr�stimo = new JPanel();
			BuscaEmpr�stimo.setLayout(null);
			BuscaEmpr�stimo.setBackground(new Color(238, 238, 238));
			BuscaEmpr�stimo.setBorder(BorderFactory.createTitledBorder(null, "", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			BuscaEmpr�stimo.setBounds(new Rectangle(5, 4, 287, 193));
			BuscaEmpr�stimo.add(getPainelAbas(), null);
		}
		return BuscaEmpr�stimo;
	}

	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setSize(new Dimension(305, 228));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Buscar Empr�stimos");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/busca.gif")));
			jInternalFrame.setContentPane(getJContentPane1());
		}
		return jInternalFrame;
	}

	/**
	 * This method initializes jContentPane1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane1() {
		if (jContentPane1 == null) {
			jContentPane1 = new JPanel();
			jContentPane1.setLayout(new BorderLayout());
			jContentPane1.add(getJContentPane(), BorderLayout.CENTER);
		}
		return jContentPane1;
	}

	/**
	 * This method initializes porUsrOK	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getPorUsrOK() {
		if (porUsrOK == null) {
			porUsrOK = new JButton();
			porUsrOK.setBounds(new Rectangle(195, 120, 71, 21));
			porUsrOK.setText("Buscar");
			porUsrOK.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					Erro[0]="";
					boolean OK = true;
					OK=valida.validaCampoNumeroNaoObrigatorio(carteirinhaText, "Carteirinha", Erro);
					if (carteirinhaText.getText().length()==0){
						Erro[0]+="Favor preencher o n�mero da carteirinha.";
					}
					if (OK && carteirinhaText.getText().length()!=0 ){
						DadosTabela dados = busca.BuscarUsuario(Long.parseLong(carteirinhaText.getText()));
						chamadoPor.MostraTabelaResultados(dados,
								"Emprestimos cadastrados para o Usu�rio de carteirinha "+
								carteirinhaText.getText(),
								"Empr�stimo", null);
					}
					else {
						valida.dialogoErroPreenchimento(Erro[0]);
					}
				}
			});
		}
		return porUsrOK;
	}

	/**
	 * This method initializes porItemOK	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getPorItemOK() {
		if (porItemOK == null) {
			porItemOK = new JButton();
			porItemOK.setBounds(new Rectangle(195, 120, 71, 21));
			porItemOK.setText("Buscar");
			porItemOK.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					boolean OK=true;
					//String[] Erro = new String[1];
					//Erro[0]="";
					//OK=valida.validaCampoNumero(codigoTxt, "C�digo", Erro);
					if (OK){
						DadosTabela dados = busca.BuscarItem(codigoTxt.getText());
						chamadoPor.MostraTabelaResultados(dados,
								"Resultados da busca de Empr�stimos do item com c�digo "+codigoTxt.getText(),
								"Empr�stimo", null);
					}
					else valida.dialogoErroPreenchimento(Erro[0]);
				}
			});
		}
		return porItemOK;
	}

	/**
	 * This method initializes jComboBox	
	 * 	
	 * @return javax.swing.JComboBox	
	 */
	BuscaEmpr�stimoGUI(BibliotecaGUI ChamadoPor){
		chamadoPor = ChamadoPor;
	}

	/**
	 * This method initializes listaUsuarios	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getListaUsuarios() {
		if (listaUsuarios == null) {
			listaUsuarios = new JButton();
			listaUsuarios.setBounds(new Rectangle(15, 120, 168, 21));
			listaUsuarios.setText("Listar Usu�rios Cadastrados");
			listaUsuarios.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					chamadoPor.listaUsuarios();
				}
			});
		}
		return listaUsuarios;
	}

	/**
	 * This method initializes listaItens	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getListaItens() {
		if (listaItens == null) {
			listaItens = new JButton();
			listaItens.setBounds(new Rectangle(15, 120, 168, 21));
			listaItens.setText("Listar Itens Cadastrados");
			listaItens.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					chamadoPor.listaItens();
				}
			});
		}
		return listaItens;
	}
}

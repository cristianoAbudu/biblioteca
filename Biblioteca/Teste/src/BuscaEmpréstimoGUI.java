package src;


import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;
public class BuscaEmpréstimoGUI {

	private String[] Erro = new String[1];
	private BibliotecaFuncoes valida = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private JPanel jContentPane = null;
	private JTabbedPane painelAbas = null;
	private JPanel porUsuárioTab = null;
	private JLabel carteirinhaLabel = null;
	private JLabel nomeLabel = null;
	private JTextField rgText = null;
	private JTextField carteirinhaText = null;
	private JTextField nomeTxt1 = null;
	private JPanel porItemTab = null;
	private JLabel autorLabel = null;
	private JLabel tituloLabel = null;
	private JTextField autorText = null;
	private JTextField tituloTxt = null;
	private JLabel rgLabel = null;
	private JLabel cpfLabel = null;
	private JTextField cpfText = null;
	private JLabel tipoLabel = null;
	private JComboBox selectTipo = null;
	private JPanel BuscaEmpréstimo = null;
	private JPanel porDataTab = null;
	private JLabel diaLabel = null;
	private JTextField diaTxt = null;
	private JComboBox mesSelect = null;
	private JTextField anoTxt = null;
	private JLabel mesLabel = null;
	private JLabel anoLabel = null;
	private JComboBox OrdemSelect = null;
	private JLabel ordenarPorLabel = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="104,17"
	private JPanel jContentPane1 = null;
	private JButton porUsrOK = null;
	private JButton porItemOK = null;
	private JButton porDataOK = null;
	
	private String[] ordem = {"Novos primeiro", "Antigos primeiro"};
	private String[] vetMeses = {"Janeiro",
				            "Fevereiro",
				            "Março",
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
	private ControladorItem items = new ControladorItem();  //  @jve:decl-index=0:
	
	private BaseItem base = new BaseItem();  //  @jve:decl-index=0:
	
	
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
			jContentPane.add(getBuscaEmpréstimo(), null);
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
			painelAbas.addTab("Por Usuário", null, getPorUsuárioTab(), null);
			painelAbas.addTab("Por Item", null, getPorItemTab(), null);
			painelAbas.addTab("Por Data", null, getPorDataTab(), null);
		}
		return painelAbas;
	}

	/**
	 * This method initializes porUsuárioTab	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPorUsuárioTab() {
		if (porUsuárioTab == null) {
			cpfLabel = new JLabel();
			cpfLabel.setBounds(new Rectangle(153, 78, 115, 15));
			cpfLabel.setText("CPF");
			rgLabel = new JLabel();
			rgLabel.setBounds(new Rectangle(153, 24, 109, 15));
			rgLabel.setText("R.G.");
			rgLabel.setName("nascimento");
			nomeLabel = new JLabel();
			nomeLabel.setBounds(new Rectangle(15, 24, 47, 15));
			nomeLabel.setText("Nome");
			carteirinhaLabel = new JLabel();
			carteirinhaLabel.setBounds(new Rectangle(15, 78, 105, 15));
			carteirinhaLabel.setText("Carteirinha");
			carteirinhaLabel.setName("nascimento");
			porUsuárioTab = new JPanel();
			porUsuárioTab.setLayout(null);
			porUsuárioTab.setBackground(new Color(238, 238, 238));
			porUsuárioTab.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			porUsuárioTab.add(carteirinhaLabel, null);
			porUsuárioTab.add(nomeLabel, null);
			porUsuárioTab.add(getRgText(), null);
			porUsuárioTab.add(getCarteirinhaText(), null);
			porUsuárioTab.add(getNomeTxt1(), null);
			porUsuárioTab.add(rgLabel, null);
			porUsuárioTab.add(cpfLabel, null);
			porUsuárioTab.add(getCpfText(), null);
			porUsuárioTab.add(getPorUsrOK(), null);
		}
		return porUsuárioTab;
	}

	/**
	 * This method initializes rgText	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getRgText() {
		if (rgText == null) {
			rgText = new JTextField();
			rgText.setBounds(new Rectangle(153, 42, 115, 21));
		}
		return rgText;
	}

	/**
	 * This method initializes carteirinhaText	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCarteirinhaText() {
		if (carteirinhaText == null) {
			carteirinhaText = new JTextField();
			carteirinhaText.setBounds(new Rectangle(15, 96, 115, 21));
			carteirinhaText.setText("");
		}
		return carteirinhaText;
	}

	/**
	 * This method initializes nomeTxt1	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNomeTxt1() {
		if (nomeTxt1 == null) {
			nomeTxt1 = new JTextField();
			nomeTxt1.setBounds(new Rectangle(15, 42, 115, 21));
			nomeTxt1.setText("");
		}
		return nomeTxt1;
	}

	/**
	 * This method initializes porItemTab	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPorItemTab() {
		if (porItemTab == null) {
			tipoLabel = new JLabel();
			tipoLabel.setBounds(new Rectangle(153, 78, 58, 15));
			tipoLabel.setText("Tipo");
			tipoLabel.setName("nascimento");
			tituloLabel = new JLabel();
			tituloLabel.setBounds(new Rectangle(15, 24, 73, 15));
			tituloLabel.setText("Título");
			autorLabel = new JLabel();
			autorLabel.setBounds(new Rectangle(15, 78, 75, 15));
			autorLabel.setText("Autor");
			autorLabel.setName("nascimento");
			porItemTab = new JPanel();
			porItemTab.setLayout(null);
			porItemTab.setBackground(new Color(238, 238, 238));
			porItemTab.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			porItemTab.add(autorLabel, null);
			porItemTab.add(tituloLabel, null);
			porItemTab.add(getAutorText(), null);
			porItemTab.add(getTituloTxt(), null);
			porItemTab.add(tipoLabel, null);
			porItemTab.add(getSelectTipo(), null);
			porItemTab.add(getPorItemOK(), null);
		}
		return porItemTab;
	}

	/**
	 * This method initializes autorText	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getAutorText() {
		if (autorText == null) {
			autorText = new JTextField();
			autorText.setBounds(new Rectangle(15, 96, 115, 21));
			autorText.setText("");
		}
		return autorText;
	}

	/**
	 * This method initializes tituloTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getTituloTxt() {
		if (tituloTxt == null) {
			tituloTxt = new JTextField();
			tituloTxt.setBounds(new Rectangle(15, 42, 253, 21));
			tituloTxt.setText("");
		}
		return tituloTxt;
	}

	/**
	 * This method initializes cpfText	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCpfText() {
		if (cpfText == null) {
			cpfText = new JTextField();
			cpfText.setBounds(new Rectangle(153, 96, 115, 21));
		}
		return cpfText;
	}

	/**
	 * This method initializes selectTipo	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getSelectTipo() {
		if (selectTipo == null) {
			selectTipo =  items.getTiposCombo();
			selectTipo.setBounds(new Rectangle(153, 96, 115, 21));
			
			
		}
		return selectTipo;
	}

	/**
	 * This method initializes BuscaEmpréstimo	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getBuscaEmpréstimo() {
		if (BuscaEmpréstimo == null) {
			BuscaEmpréstimo = new JPanel();
			BuscaEmpréstimo.setLayout(null);
			BuscaEmpréstimo.setBackground(new Color(238, 238, 238));
			BuscaEmpréstimo.setBorder(BorderFactory.createTitledBorder(null, "", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			BuscaEmpréstimo.setBounds(new Rectangle(5, 4, 287, 193));
			BuscaEmpréstimo.add(getPainelAbas(), null);
		}
		return BuscaEmpréstimo;
	}

	/**
	 * This method initializes porDataTab	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPorDataTab() {
		if (porDataTab == null) {
			ordenarPorLabel = new JLabel();
			ordenarPorLabel.setBounds(new Rectangle(15, 78, 107, 15));
			ordenarPorLabel.setText("Ordenar por:");
			anoLabel = new JLabel();
			anoLabel.setBounds(new Rectangle(203, 22, 55, 17));
			anoLabel.setText("Ano");
			mesLabel = new JLabel();
			mesLabel.setBounds(new Rectangle(80, 24, 105, 16));
			mesLabel.setText("Mês");
			diaLabel = new JLabel();
			diaLabel.setBounds(new Rectangle(15, 24, 48, 15));
			diaLabel.setText("Dia");
			porDataTab = new JPanel();
			porDataTab.setLayout(null);
			porDataTab.setBackground(new Color(238, 238, 238));
			porDataTab.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			porDataTab.add(diaLabel, null);
			porDataTab.add(getDiaTxt(), null);
			porDataTab.add(getMesSelect(), null);
			porDataTab.add(getAnoTxt(), null);
			porDataTab.add(mesLabel, null);
			porDataTab.add(getOrdemSelect(), null);
			porDataTab.add(ordenarPorLabel, null);
			porDataTab.add(anoLabel, null);
			porDataTab.add(getPorDataOK(), null);
		}
		return porDataTab;
	}

	/**
	 * This method initializes diaTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getDiaTxt() {
		if (diaTxt == null) {
			diaTxt = new JTextField();
			diaTxt.setBounds(new Rectangle(15, 42, 51, 21));
			diaTxt.setText("");
		}
		return diaTxt;
	}

	/**
	 * This method initializes mesSelect	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getMesSelect() {
		if (mesSelect == null) {
			mesSelect =  new JComboBox (vetMeses);	
			mesSelect.setBounds(new Rectangle(80, 42, 115, 21));
		}
		return mesSelect;
	}

	/**
	 * This method initializes anoTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getAnoTxt() {
		if (anoTxt == null) {
			anoTxt = new JTextField();
			anoTxt.setBounds(new Rectangle(203, 42, 65, 21));
			anoTxt.setText("");
		}
		return anoTxt;
	}

	/**
	 * This method initializes OrdemSelect	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getOrdemSelect() {
		if (OrdemSelect == null) {
			OrdemSelect =  new JComboBox (ordem);
			OrdemSelect.setBounds(new Rectangle(15, 96, 253, 21));
			}
		return OrdemSelect;
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
			jInternalFrame.setTitle("Buscar Empréstimos");
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
					
					OK=valida.validaCampoTexto(nomeTxt1, "Nome", Erro);
					OK=valida.validaCampoNumero(rgText, "RG", Erro);
					OK=valida.validaCampoNumero(carteirinhaText, "Carteirinha", Erro);
					OK=valida.validaCampoNumero(cpfText, "CPF", Erro);
					
					if (nomeTxt1.getText().length()==0 &&
							rgText.getText().length()==0 &&
							carteirinhaText.getText().length()==0 &&
							cpfText.getText().length()==0
														){
						OK = false;
						Erro[0]+="Preencha ao menos um campo.";
					}
					
					if (OK){					
						busca.BuscarUsuario(nomeTxt1.getText(),
										Integer.parseInt(rgText.getText()),
										Integer.parseInt(carteirinhaText.getText()),
										Integer.parseInt(cpfText.getText()));
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
					boolean OK=false;
					String[] Erro = new String[1];
					Erro[0]="";
					if (tituloTxt.getText().length()!=0){
						OK = valida.validaCampoTexto(tituloTxt, "Título", Erro);
					}
					if (autorText.getText().length()!=0){
						OK = valida.validaCampoTexto(autorText, "Autor", Erro);
					}
					if(Erro[0].length()==0){
						Erro[0] = "Favor preencher ao menos um campo.";
					}
					if (OK){
						busca.BuscarItem(tituloTxt.getText(), autorText.getText(), selectTipo.getSelectedIndex());
					}
					else valida.dialogoErroPreenchimento(Erro[0]);
				}
			});
		}
		return porItemOK;
	}

	/**
	 * This method initializes porDataOK	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getPorDataOK() {
		if (porDataOK == null) {
			porDataOK = new JButton();
			porDataOK.setBounds(new Rectangle(195, 120, 71, 21));
			porDataOK.setText("Buscar");
			porDataOK.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					boolean OK = false;
					String[] Erro = new String[1];
					Data dia = new Data();
					OK=valida.validaCampoNumero(diaTxt, "Dia", Erro);
					OK=valida.validaCampoNumero(anoTxt, "Ano", Erro);
					if (OK){
						dia.setDia(Integer.parseInt(diaTxt.getText()));
						dia.setMes(mesSelect.getSelectedIndex()+1);
						dia.setDia(Integer.parseInt(diaTxt.getText()));
					}
					OK=dia.ValidaData(dia);
					if(dia.ValidaData(dia)==false){
						Erro[0]+="\nData Inválida";
					}
					if(OK){
						busca.BuscarData(
							Integer.parseInt(diaTxt.getText()),
										mesSelect.getSelectedIndex()+1,
										//começa com zero o endereço
										Integer.parseInt(anoTxt.getText()),
										OrdemSelect.getSelectedIndex());
//										//0=novos, 1=antigos
					}
					else{
						valida.dialogoErroPreenchimento(Erro[0]);
					}
				}
			});
		}
		return porDataOK;
	}

	/**
	 * This method initializes jComboBox	
	 * 	
	 * @return javax.swing.JComboBox	
	 */
	

}

package GUI;
/*NECESSÁRIO DEFINIR O DONO DE 'jErroDialog' e 
 * Adicionar as opções aos Choosers Sexo e Estado,
 * Passando seus valores como strings.
 * 
 * Inicializar o JInternalFrame corretamente
*/


import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Rectangle;
import java.awt.event.KeyEvent;
import java.sql.Connection;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import bd.entidades.Usuario;

import util.BibliotecaFuncoes;
import util.Data;

import controladores.ControladorEmprestimo;
import controladores.ControladorUsuário;
public class EditaUsuárioGUI extends JInternalFrame {
	private ControladorEmprestimo preenchedor = new ControladorEmprestimo();  //  @jve:decl-index=0:
	private Usuario usuario = new Usuario();  //  @jve:decl-index=0:
	private BibliotecaFuncoes dialogos = new BibliotecaFuncoes();
	private String[] estadosBR ={
									"São Paulo",
									"Acre",
									"Alagoas",
									"Amapá",
									"Amazonas",
									"Bahia",
									"Ceará",
									"Distrito",
									"Goiás",
									"Espírito Santo",
									"Maranhão",
									"Mato Grosso",
									"Mato Grosso do Sul",
									"Minas Gerais",
									"Pará",
									"Paraiba",
									"Paraná",
									"Pernambuco",
									"Piauí",
									"Rio de Janeiro",
									"Rio Grande do Norte",
									"Rio Grande do Sul",
									"Rondônia",
									"Rorâima",
									"Santa Catarina",
									"Sergipe",
									"Tocantins"
														};
	

	private JPanel jCadatroContentPane = null;
	private JTabbedPane painelAbas = null;
	private JPanel pessoal = null;
	private JLabel nascimento1 = null;
	private JLabel nome1 = null;
	private JComboBox Sexo = null;
	private JLabel tel1 = null;
	private JTextField Rg = null;
	private JTextField DiaNascimento = null;
	private JTextField Nome = null;
	private JPanel endereco = null;
	private JButton OKbutton = null;
	private JLabel nascimento = null;
	private JLabel nome = null;
	private JLabel tel = null;
	private JTextField Cidade = null;
	private JTextField Endereço = null;
	private JButton Cancelarbutton = null;
	private JLabel nascimento11 = null;
	private JLabel tel11 = null;
	private JTextField Cpf = null;
	private JLabel nascimento21 = null;
	private JLabel nascimento3 = null;
	private JComboBox Estado = null;
	private JTextField Telefone = null;
	private JPanel pessoal1 = null;
	private JTextField MesNascimento = null;
	private JTextField AnoNascimento = null;
	private JLabel label2 = null;
	private JLabel label21 = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="-20,-8"
	private JPanel cadUsuarioInternalFrame = null;
	private Connection Conexao;
	private long NumeroDaCarteirinha;
	
	BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	ControladorUsuário controlador = new ControladorUsuário();  //  @jve:decl-index=0:


	private JLabel eMailLabel = null;


	private JTextField Email = null;


	private JTextArea Observacoes = null;


	private JLabel carteirinhaLabel = null;


	private JTextField carteirinhaTxt = null;


	private JButton buscaCarteirinha = null;


	public EditaUsuárioGUI(Connection conexao, long codigo){
		NumeroDaCarteirinha = codigo;
		Conexao = conexao;
		getJInternalFrame();
		preencheTela();		
	}
	
	/**
	 * This method initializes jCadatroContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJCadatroContentPane() {
		if (jCadatroContentPane == null) {
			carteirinhaLabel = new JLabel();
			carteirinhaLabel.setBounds(new Rectangle(10, 15, 108, 15));
			carteirinhaLabel.setText("Carteirinha:");
			carteirinhaLabel.setName("nascimento");
			jCadatroContentPane = new JPanel();
			jCadatroContentPane.setLayout(null);
			jCadatroContentPane.setBackground(new Color(238, 238, 238));
			jCadatroContentPane.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.RAISED));
			jCadatroContentPane.add(getOKbutton(), null);
			jCadatroContentPane.add(getCancelarbutton(), null);
			jCadatroContentPane.add(carteirinhaLabel, null);
			jCadatroContentPane.add(getCarteirinhaTxt(), null);
			jCadatroContentPane.add(getBuscaCarteirinha(), null);
			jCadatroContentPane.add(getPessoal1(), null);
		}
		return jCadatroContentPane;
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
			painelAbas.setBounds(new Rectangle(0, 0, 282, 263));
			painelAbas.addTab("Dados Pessoais", null, getPessoal(), null);
			painelAbas.addTab("Endereço", null, getEndereco(), null);
		}
		return painelAbas;
	}

	/**
	 * This method initializes pessoal	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPessoal() {
		if (pessoal == null) {
			eMailLabel = new JLabel();
			eMailLabel.setBounds(new Rectangle(15, 186, 103, 15));
			eMailLabel.setText("E-mail");
			eMailLabel.setName("nascimento");
			label21 = new JLabel();
			label21.setBounds(new Rectangle(83, 96, 13, 21));
			label21.setText("/");
			label2 = new JLabel();
			label2.setBounds(new Rectangle(43, 96, 11, 21));
			label2.setText("/");
			tel11 = new JLabel();
			tel11.setBounds(new Rectangle(150, 132, 115, 15));
			tel11.setDisplayedMnemonic(KeyEvent.VK_UNDEFINED);
			tel11.setText("CPF*");
			nascimento11 = new JLabel();
			nascimento11.setBounds(new Rectangle(15, 132, 109, 15));
			nascimento11.setText("R.G.*");
			nascimento11.setName("nascimento");
			tel1 = new JLabel();
			tel1.setBounds(new Rectangle(150, 78, 63, 15));
			tel1.setText("Sexo*");
			nome1 = new JLabel();
			nome1.setBounds(new Rectangle(15, 24, 47, 15));
			nome1.setText("Nome*");
			nascimento1 = new JLabel();
			nascimento1.setBounds(new Rectangle(15, 78, 105, 15));
			nascimento1.setText("Nascimento*");
			nascimento1.setName("nascimento");
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			pessoal.add(nascimento1, null);
			pessoal.add(nome1, null);
			pessoal.add(getSexo(), null);
			pessoal.add(tel1, null);
			pessoal.add(getRg(), null);
			pessoal.add(getDiaNascimento(), null);
			pessoal.add(getNome(), null);
			pessoal.add(nascimento11, null);
			pessoal.add(tel11, null);
			pessoal.add(getCpf(), null);
			pessoal.add(getMesNascimento(), null);
			pessoal.add(getAnoNascimento(), null);
			pessoal.add(label2, null);
			pessoal.add(label21, null);
			pessoal.add(eMailLabel, null);
			pessoal.add(getEmail(), null);
		}
		return pessoal;
	}

	/**
	 * This method initializes Sexo	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getSexo() {
		if (Sexo == null) {
			String[] sexos = {"Masculino","Feminino"};
			Sexo = new JComboBox(sexos);
			Sexo.setBounds(new Rectangle(150, 96, 115, 21));
		}
		return Sexo;
	}

	/**
	 * This method initializes Rg	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getRg() {
		if (Rg == null) {
			Rg = new JTextField();
			Rg.setBounds(new Rectangle(15, 150, 115, 21));
			Rg.setEditable(true);
		}
		return Rg;
	}

	/**
	 * This method initializes DiaNascimento	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getDiaNascimento() {
		if (DiaNascimento == null) {
			DiaNascimento = new JTextField();
			DiaNascimento.setBounds(new Rectangle(15, 96, 27, 21));
			DiaNascimento.setEditable(true);
			DiaNascimento.setText("dd");
		}
		return DiaNascimento;
	}

	/**
	 * This method initializes Nome	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNome() {
		if (Nome == null) {
			Nome = new JTextField();
			Nome.setBounds(new Rectangle(15, 42, 253, 21));
			Nome.setEditable(true);
		}
		return Nome;
	}

	/**
	 * This method initializes endereco	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getEndereco() {
		if (endereco == null) {
			nascimento3 = new JLabel();
			nascimento3.setBounds(new Rectangle(153, 186, 58, 15));
			nascimento3.setText("Estado");
			nascimento3.setName("nascimento");
			nascimento21 = new JLabel();
			nascimento21.setBounds(new Rectangle(15, 132, 103, 15));
			nascimento21.setText("Observações");
			nascimento21.setName("nascimento");
			tel = new JLabel();
			tel.setBounds(new Rectangle(15, 186, 59, 15));
			tel.setText("Telefone");
			nome = new JLabel();
			nome.setBounds(new Rectangle(15, 24, 73, 15));
			nome.setText("Endereço");
			nascimento = new JLabel();
			nascimento.setBounds(new Rectangle(15, 78, 75, 15));
			nascimento.setText("Cidade");
			nascimento.setName("nascimento");
			endereco = new JPanel();
			endereco.setLayout(null);
			endereco.setBackground(new Color(238, 238, 238));
			endereco.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			endereco.add(nascimento, null);
			endereco.add(nome, null);
			endereco.add(tel, null);
			endereco.add(getCidade(), null);
			endereco.add(getEndereço(), null);
			endereco.add(nascimento21, null);
			endereco.add(nascimento3, null);
			endereco.add(getEstado(), null);
			endereco.add(getTelefone(), null);
			endereco.add(getObservacoes(), null);
		}
		return endereco;
	}

	/**
	 * This method initializes OKbutton	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getOKbutton() {
		if (OKbutton == null) {
			OKbutton = new JButton();
			OKbutton.setActionCommand("adicionar");
			OKbutton.setText("Atualizar");
			OKbutton.setBounds(new Rectangle(61, 330, 85, 21));
			OKbutton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					/**/String nome			=	Nome.getText()					, //Validação dos dados
							endereco		=	Endereço.getText()				,
							cidade			=	Cidade.getText()				,
							estado			=	(String)Estado.getSelectedItem(),
							email			=	Email.getText()					,
							observacoes		=	Observacoes.getText()			,
							telefone		=	Telefone.getText()				;
						long carteirinha	=	Long.parseLong(carteirinhaTxt.getText());
					String Erro[] = new String[1];
					Erro[0] = "";
					boolean OK=true;
					Data nascimento = new Data();
					OK=validador.validaCampoNumero(DiaNascimento, "Dia do Nascimento", Erro);
					OK=validador.validaCampoNumero(MesNascimento, "Mes de Nascimento", Erro);
					OK=validador.validaCampoNumero(AnoNascimento, "Ano de Nascimento", Erro);
					
					if (OK){
						nascimento=nascimento.Preenche(DiaNascimento.getText(),					
													MesNascimento.getText(),
													AnoNascimento.getText());
					};
					boolean nascimentoOK = nascimento.ValidaData(nascimento);	
					
					OK=validador.validaCampoTexto(Nome, "Nome", Erro);
					OK=validador.validaCampoTexto(Endereço, "Endereço", Erro);
					OK=validador.validaCampoTexto(Cidade, "Cidade", Erro);
					
					OK=validador.validaCampoNumeroNaoObrigatorio(Telefone, "Telefone", Erro);
					
					OK=validador.validaCampoNumeroNaoObrigatorio(Rg, "RG", Erro);
					OK=validador.validaCampoNumeroNaoObrigatorio(Cpf, "CPF", Erro);
					
					String rg="",	
							cpf="";
					if(OK){
						rg  = Rg.getText() ;
						cpf = Cpf.getText();
					}
					if (nome.length()==0				|
							AnoNascimento.getText().length()!=4	|
							nascimentoOK==false){
						OK=false;
						
						if (nome.length()==0){
							Erro[0]+="Favor preencher Nome\n";
						}
						if (nascimentoOK==false){
							Erro[0]+="Favor preencher corretamente a Data do Nascimento";
						}
						if (AnoNascimento.getText().length()!=4){
							Erro[0]+="Ano de Nascimento deve estar no formato 'aaaa'";
						}
						
					}
					if (OK==true){ //Se os dados estão corretos, valida o cadastro.
						System.out.println(Sexo.getSelectedIndex());
						String Sexos = "Masculino";
			        	if (Sexo.getSelectedIndex() == 1){
			        		Sexos="Feminino";
			        	}
			        	System.out.println(Sexos);
						System.out.println("dados corretos, vai para controlador");
						controlador.Atualizar(carteirinha,
								nome,
								Sexos,
								endereco,
								cidade,
								estado,
								email,
								observacoes,
								telefone,
								nascimento,
								rg,
								cpf);
					}
					else {
						validador.dialogoErroPreenchimento(Erro[0]);
					}
					

				/**/}
			});
		}
		return OKbutton;
	}

	/**
	 * This method initializes Cidade	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCidade() {
		if (Cidade == null) {
			Cidade = new JTextField();
			Cidade.setBounds(new Rectangle(15, 96, 253, 21));
			Cidade.setText("");
		}
		return Cidade;
	}

	/**
	 * This method initializes Endereço	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getEndereço() {
		if (Endereço == null) {
			Endereço = new JTextField();
			Endereço.setBounds(new Rectangle(15, 42, 253, 21));
			Endereço.setText("");
		}
		return Endereço;
	}

	/**
	 * This method initializes Cancelarbutton	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getCancelarbutton() {
		if (Cancelarbutton == null) {
			Cancelarbutton = new JButton();
			Cancelarbutton.setBounds(new Rectangle(169, 330, 85, 21));
			Cancelarbutton.setText("Fechar");
			Cancelarbutton.setActionCommand("adicionar");
			Cancelarbutton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					getJInternalFrame().doDefaultCloseAction();
				}
			});
		}
		return Cancelarbutton;
	}

	/**
	 * This method initializes Cpf	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCpf() {
		if (Cpf == null) {
			Cpf = new JTextField();
			Cpf.setBounds(new Rectangle(150, 150, 115, 21));
			Cpf.setEditable(true);
		}
		return Cpf;
	}

	/**
	 * This method initializes Estado	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getEstado() {
		if (Estado == null) {
			Estado = new JComboBox(estadosBR);
			Estado.setBounds(new Rectangle(153, 204, 115, 21));
		}
		return Estado;
	}

	/**
	 * This method initializes Telefone	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getTelefone() {
		if (Telefone == null) {
			Telefone = new JTextField();
			Telefone.setBounds(new Rectangle(15, 204, 115, 20));
			Telefone.setText("");
		}
		return Telefone;
	}

	/**
	 * This method initializes pessoal1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPessoal1() {
		if (pessoal1 == null) {
			pessoal1 = new JPanel();
			pessoal1.setLayout(null);
			pessoal1.setBackground(new Color(238, 238, 238));
			pessoal1.setBorder(BorderFactory.createTitledBorder(null, "", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			pessoal1.setBounds(new Rectangle(10, 60, 280, 264));
			pessoal1.add(getPainelAbas(), null);
		}
		return pessoal1;
	}

	/**
	 * This method initializes MesNascimento	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getMesNascimento() {
		if (MesNascimento == null) {
			MesNascimento = new JTextField();
			MesNascimento.setBounds(new Rectangle(56, 96, 27, 21));
			MesNascimento.setEditable(true);
			MesNascimento.setText("mm");
		}
		return MesNascimento;
	}

	/**
	 * This method initializes AnoNascimento	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getAnoNascimento() {
		if (AnoNascimento == null) {
			AnoNascimento = new JTextField();
			AnoNascimento.setBounds(new Rectangle(92, 96, 38, 21));
			AnoNascimento.setEditable(true);
			AnoNascimento.setText("aaaa");
		}
		return AnoNascimento;
	}
	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setSize(new Dimension(308, 396));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Atualizar Cadastro de Usuário");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			jInternalFrame.setContentPane(getCadUsuarioInternalFrame());
		}
		return jInternalFrame;
	}

	/**
	 * This method initializes cadUsuarioInternalFrame	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getCadUsuarioInternalFrame() {
		if (cadUsuarioInternalFrame == null) {
			cadUsuarioInternalFrame = new JPanel();
			cadUsuarioInternalFrame.setLayout(new BorderLayout());
			cadUsuarioInternalFrame.add(getJCadatroContentPane(), BorderLayout.CENTER);
		}
		return cadUsuarioInternalFrame;
	}

	/**
	 * This method initializes Email	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getEmail() {
		if (Email == null) {
			Email = new JTextField();
			Email.setBounds(new Rectangle(15, 204, 253, 21));
			Email.setText("");
		}
		return Email;
	}

	/**
	 * This method initializes Observacoes	
	 * 	
	 * @return javax.swing.JTextArea	
	 */
	private JTextArea getObservacoes() {
		if (Observacoes == null) {
			Observacoes = new JTextArea();
			Observacoes.setBounds(new Rectangle(15, 150, 253, 33));
			Observacoes.setRows(50);
			Observacoes.setLineWrap(true);
		}
		return Observacoes;
	}

	/**
	 * This method initializes carteirinhaTxt	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getCarteirinhaTxt() {
		if (carteirinhaTxt == null) {
			carteirinhaTxt = new JTextField();
			carteirinhaTxt.setBounds(new Rectangle(9, 29, 187, 21));
			carteirinhaTxt.setEditable(true);
			carteirinhaTxt.setText("");
			if (NumeroDaCarteirinha != -1){
				System.out.println("PREENCHENDO COM "+NumeroDaCarteirinha);
				carteirinhaTxt.setText(String.valueOf(NumeroDaCarteirinha));
			}
		}
		return carteirinhaTxt;
	}

	/**
	 * This method initializes buscaCarteirinha	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getBuscaCarteirinha() {
		if (buscaCarteirinha == null) {
			buscaCarteirinha = new JButton();
			buscaCarteirinha.setText("Buscar");
			buscaCarteirinha.setBounds(new Rectangle(210, 29, 75, 21));
			buscaCarteirinha.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("PuxandoUsuario do BD");
					boolean OK=true;
					String[] Erro = new String[1];
					Erro[0] = "";
					OK=validador.validaCampoNumero(carteirinhaTxt, "Carteirinha só aceita números", Erro);
					if (OK){
						preencheTela();
					}
					else {
						validador.dialogoErroPreenchimento(Erro[0]);
					}
					
				}
			});
		}
		return buscaCarteirinha;
	}

	private void preencheTela() {
		usuario = preenchedor.PreencheUsuario(Long.parseLong(carteirinhaTxt.getText()));
		Nome.setText(usuario.getNome());
		//DiaNascimento.setText(String.valueOf(usuario.getNascimento().getDia()));
		System.out.println(usuario.getNascimento().getDia());
		Rg.setText(usuario.getRg());
		Cpf.setText(usuario.getCpf());
		//MesNascimento.setText(String.valueOf(usuario.getNascimento().getMes()));
		//AnoNascimento.setText(String.valueOf(usuario.getNascimento().getAno()));
		Email.setText(usuario.getEmail());
		Cidade.setText(usuario.getCidade());
		Endereço.setText(usuario.getEndereco());
		Telefone.setText(usuario.getTelefone());
		Observacoes.setText(usuario.getObservacao());
		DiaNascimento.setText(String.valueOf(usuario.getNascimento().getDia()));
		MesNascimento.setText(String.valueOf(usuario.getNascimento().getMes()));
		AnoNascimento.setText(String.valueOf(usuario.getNascimento().getAno()+1900));						
		if (usuario.getSexo().equalsIgnoreCase("Masculino")){
			Sexo.setSelectedIndex(0);
		}
		else{
			Sexo.setSelectedIndex(1);
		}	
	}
}

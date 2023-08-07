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
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import bd.ExecutadorSQL;
import bd.entidades.Usuario;

import util.BibliotecaFuncoes;

import controladores.ControladorUsuário;

public class ListaUsuárioGUI extends JInternalFrame {

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
	//private TabelaResultados origem;
	private BibliotecaGUI chamadoPor;
	private JPanel jCadatroContentPane = null;
	private JTabbedPane painelAbas = null;
	private JPanel pessoal = null;
	private JLabel nascimento1 = null;
	private JLabel nome1 = null;
	private JLabel tel1 = null;
	private JTextField Rg = null;
	private JTextField DiaNascimento = null;
	private JTextField Nome = null;
	private JPanel endereco = null;
	private JButton Editarbutton = null;
	private JLabel nascimento = null;
	private JLabel nome = null;
	private JLabel tel = null;
	private JTextField Cidade = null;
	private JTextField Endereço = null;
	private JButton Fecharbutton = null;
	private JLabel nascimento11 = null;
	private JLabel tel11 = null;
	private JTextField Cpf = null;
	private JLabel nascimento21 = null;
	private JLabel nascimento3 = null;
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
	private BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private ControladorUsuário controlador = new ControladorUsuário();  //  @jve:decl-index=0:
	private JLabel eMailLabel = null;
	private JTextField Email = null;
	private JTextArea Observacoes = null;
	private Usuario usuario = new Usuario();  //  @jve:decl-index=0:
	private JTextField Sex = null;
	private JTextField Estado1 = null;
	private long codigo;

	public ListaUsuárioGUI(String cod, BibliotecaGUI telaPrincipal){
		chamadoPor = telaPrincipal;
		codigo = Long.parseLong(cod);
		//System.out.println("\n\n\nMOSTRANDO USUARIO CARTEIRINHA"+cod+"\n\n");
		ExecutadorSQL executador = new ExecutadorSQL();
		String sql = "SELECT * FROM USUARIO WHERE CARTEIRINHA ="+codigo;
		usuario = executador.RetornaUsuarioSQL(sql);
		//System.out.println("\n\n\nMOSTRANDO USUARIO "+usuario.getNome()+"\n\n");
	}
	
	/**
	 * This method initializes jCadatroContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJCadatroContentPane() {
		if (jCadatroContentPane == null) {
			jCadatroContentPane = new JPanel();
			jCadatroContentPane.setLayout(null);
			jCadatroContentPane.setBackground(new Color(238, 238, 238));
			jCadatroContentPane.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.RAISED));
			jCadatroContentPane.add(getEditarbutton(), null);
			jCadatroContentPane.add(getPessoal1(), null);
			jCadatroContentPane.add(getFecharbutton(), null);
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
			painelAbas.setBounds(new Rectangle(4, 4, 282, 263));
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
			tel11.setText("CPF");
			nascimento11 = new JLabel();
			nascimento11.setBounds(new Rectangle(15, 132, 109, 15));
			nascimento11.setText("R.G.");
			nascimento11.setName("nascimento");
			tel1 = new JLabel();
			tel1.setBounds(new Rectangle(150, 78, 63, 15));
			tel1.setText("Sexo");
			nome1 = new JLabel();
			nome1.setBounds(new Rectangle(15, 24, 47, 15));
			nome1.setText("Nome");
			nascimento1 = new JLabel();
			nascimento1.setBounds(new Rectangle(15, 78, 105, 15));
			nascimento1.setText("Nascimento");
			nascimento1.setName("nascimento");
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createBevelBorder(BevelBorder.RAISED));
			pessoal.add(nascimento1, null);
			pessoal.add(nome1, null);
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
			pessoal.add(getSex(), null);
		}
		return pessoal;
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
			Rg.setEditable(false);
			Rg.setText(usuario.getRg());
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
			DiaNascimento.setEditable(false);
			DiaNascimento.setText(String.valueOf(usuario.getNascimento().getDia()));
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
			Nome.setEditable(false);
			Nome.setText(usuario.getNome());
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
			endereco.add(getTelefone(), null);
			endereco.add(getObservacoes(), null);
			endereco.add(getEstado1(), null);
		}
		return endereco;
	}

	/**
	 * This method initializes Editarbutton	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getEditarbutton() {
		if (Editarbutton == null) {
			Editarbutton = new JButton();
			Editarbutton.setActionCommand("adicionar");
			Editarbutton.setText("Editar");
			Editarbutton.setBounds(new Rectangle(55, 283, 71, 21));
			Editarbutton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("chamaEdicao()");
					System.out.println("Alterar Usuário");
					chamadoPor.editaGUI("Usuário", String.valueOf(codigo));
					getJInternalFrame().doDefaultCloseAction();
				}
			});
		}
		return Editarbutton;
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
			Cidade.setEditable(false);
			Cidade.setText(usuario.getCidade());
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
			Endereço.setEditable(false);
			Endereço.setText(usuario.getEndereco());
		}
		return Endereço;
	}

	/**
	 * This method initializes Fecharbutton	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getFecharbutton() {
		if (Fecharbutton == null) {
			Fecharbutton = new JButton();
			Fecharbutton.setBounds(new Rectangle(169, 283, 71, 21));
			Fecharbutton.setText("Fechar");
			Fecharbutton.setActionCommand("adicionar");
			Fecharbutton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					getJInternalFrame().doDefaultCloseAction();
				}
			});
		}
		return Fecharbutton;
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
			Cpf.setEditable(false);
			Cpf.setText(usuario.getCpf());
		}
		return Cpf;
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
			Telefone.setEditable(false);
			Telefone.setText(usuario.getTelefone());
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
			pessoal1.setBounds(new Rectangle(5, 4, 287, 271));
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
			MesNascimento.setEditable(false);
			MesNascimento.setText(String.valueOf(usuario.getNascimento().getMes()));
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
			AnoNascimento.setEditable(false);
			AnoNascimento.setText(String.valueOf(usuario.getNascimento().getAno()+1900));
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
			jInternalFrame.setSize(new Dimension(308, 346));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Dados de "+usuario.getNome());
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/seedata.gif")));
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
			Email.setEditable(false);
			Email.setText(usuario.getEmail());
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
			Observacoes.setEditable(false);
			Observacoes.setLineWrap(true);
			Observacoes.setText(usuario.getObservacao());
		}
		return Observacoes;
	}

	/**
	 * This method initializes Sex	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getSex() {
		if (Sex == null) {
			Sex = new JTextField();
			Sex.setBounds(new Rectangle(150, 96, 115, 21));
			Sex.setEditable(false);
			Sex.setText(usuario.getSexo());
		}
		return Sex;
	}

	/**
	 * This method initializes Estado1	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getEstado1() {
		if (Estado1 == null) {
			Estado1 = new JTextField();
			Estado1.setBounds(new Rectangle(150, 204, 115, 20));
			Estado1.setEditable(false);
			Estado1.setText(usuario.getEstado());
		}
		return Estado1;
	}
}

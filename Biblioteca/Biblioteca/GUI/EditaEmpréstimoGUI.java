package GUI;
/*Colocar todos os campos exceto "Carteirinha" e
 *"Cógido do produto" para ler do banco de dados
 *a partir dos códigos digitados. 
*/


import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;
import java.util.Date;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSpinner;
import javax.swing.JTextField;
import javax.swing.SpinnerModel;
import javax.swing.SpinnerNumberModel;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import bd.entidades.Emprestimo;
import bd.entidades.Item;
import bd.entidades.Usuario;

import util.BibliotecaFuncoes;

import controladores.ControladorEmprestimo;

public class EditaEmpréstimoGUI {
	
	private JPanel jContentPane = null;
	private JButton adicionar2 = null;
	private JButton adicionar21 = null;
	private JPanel pessoal = null;
	private JPanel jPanel1 = null;
	private JTextField codigoTxt = null;
	private JLabel nome12 = null;
	private JLabel nascimento13 = null;
	private JTextField nomeTxt = null;
	private JTextField emprestadoEmTxt = null;
	private JLabel nome121 = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="97,12"
	private JButton jButton1 = null;
	private ControladorEmprestimo controlador = new ControladorEmprestimo();  //  @jve:decl-index=0:
	private BibliotecaFuncoes funcoes = new BibliotecaFuncoes();  //  @jve:decl-index=0:

	private JSpinner  duracaoJspinner;
	private SpinnerModel duracaoSpinnerModel;  //  @jve:decl-index=0:
	private Date devolve;  //  @jve:decl-index=0:
	private Usuario usuario = new Usuario();  //  @jve:decl-index=0:
	private Item item = new Item();  //  @jve:decl-index=0:
	private Emprestimo emprestimo;  //  @jve:decl-index=0:
	private JPanel jPanel2 = null;
	private JLabel nascimento11 = null;
	private boolean OK = false;
	private JTextField tituloTxt = null;
	private JLabel nascimento131 = null;
	private long codigo;
	/**
	 * This method initializes jContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
		
	private SpinnerModel getDuracao(){
		if (duracaoSpinnerModel==null){
			 duracaoSpinnerModel = new SpinnerNumberModel(
					 5,//inicial
					 1,//mínimo
					 30,//máximo
					 1)//incremento
			 		 ;
		}
		return duracaoSpinnerModel;
	}
	
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jContentPane = new JPanel();
			jContentPane.setLayout(null);
			jContentPane.setBackground(new Color(238, 238, 238));
			jContentPane.setBorder(BorderFactory.createEtchedBorder(EtchedBorder.RAISED));
			jContentPane.add(getAdicionar2(), null);
			jContentPane.add(getAdicionar21(), null);
			jContentPane.add(getPessoal(), null);
		}
		return jContentPane;
	}

	/**
	 * This method initializes adicionar2	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getAdicionar2() {
		if (adicionar2 == null) {
			adicionar2 = new JButton();
			adicionar2.setActionCommand("adicionar");
			adicionar2.setText("Porrogar");
			adicionar2.setBounds(new Rectangle(48, 250, 85, 21));
			adicionar2.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					if(OK){
						Object intero = duracaoJspinner.getValue();
						intero.toString();
						
						controlador.Editar(emprestimo, codigoTxt.getText(),
								Integer.parseInt((duracaoJspinner.getValue()).toString()));
					}
					else{
						funcoes.dialogoErroPreenchimento(
								"Ao digitar o código," +
								"é preciso clicar em 'Buscar' para confirmar" +
								"os dados, e só então clicar em 'OK'.");
					}
				}
			});
		}
		return adicionar2;
	}

	/**
	 * This method initializes adicionar21	
	 * 	
	 * @return java.awt.Button	
	 */
	@SuppressWarnings("deprecation")
	private JButton getAdicionar21() {
		if (adicionar21 == null) {
			adicionar21 = new JButton();
			adicionar21.setBounds(new Rectangle(156, 250, 85, 21));
			adicionar21.setText("Cancelar");
			adicionar21.setActionCommand("adicionar");
			adicionar21.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					getJInternalFrame().doDefaultCloseAction();
				}
			});
		}
		return adicionar21;
	}

	/**
	 * This method initializes pessoal	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getPessoal() {
		if (pessoal == null) {
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createTitledBorder(null, "", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			pessoal.setBounds(new Rectangle(5, 4, 287, 236));
			pessoal.add(getJPanel1(), null);
			pessoal.add(getJPanel2(), null);
		}
		return pessoal;
	}

	/**
	 * This method initializes jPanel1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel1() {
		if (jPanel1 == null) {
			nascimento131 = new JLabel();
			nascimento131.setBounds(new Rectangle(16, 99, 117, 17));
			nascimento131.setText("Título do Item");
			nascimento131.setName("nascimento");
			nome121 = new JLabel();
			nome121.setBounds(new Rectangle(151, 19, 98, 17));
			nome121.setText("Emprestado em");
			nascimento13 = new JLabel();
			nascimento13.setBounds(new Rectangle(16, 59, 112, 15));
			nascimento13.setText("Nome do Usuário");
			nascimento13.setName("nascimento");
			nome12 = new JLabel();
			nome12.setBounds(new Rectangle(16, 19, 107, 15));
			nome12.setText("Código");
			jPanel1 = new JPanel();
			jPanel1.setLayout(null);
			jPanel1.setBounds(new Rectangle(3, 3, 282, 177));
			jPanel1.setBorder(BorderFactory.createTitledBorder(null, "Empréstimo", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel1.setBackground(new Color(238, 238, 238));
			jPanel1.add(getCodigoTxt(), null);
			jPanel1.add(nome12, null);
			jPanel1.add(nascimento13, null);
			jPanel1.add(getNomeTxt(), null);
			jPanel1.add(getEmprestadoEmTxt(), null);
			jPanel1.add(nome121, null);
			jPanel1.add(getJButton1(), null);
			jPanel1.add(getTituloTxt(), null);
			jPanel1.add(nascimento131, null);
		}
		return jPanel1;
	}

	/**
	 * This method initializes codigoTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCodigoTxt() {
		if (codigoTxt == null) {
			codigoTxt = new JTextField();
			codigoTxt.setBounds(new Rectangle(16, 37, 115, 21));
			codigoTxt.setText("");
			if (codigo != -1){ 
				codigoTxt.setText(String.valueOf(codigo));
			}
		}
		return codigoTxt;
	}

	/**
	 * This method initializes nomeTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNomeTxt() {
		if (nomeTxt == null) {
			nomeTxt = new JTextField();
			nomeTxt.setBounds(new Rectangle(16, 77, 253, 21));
			nomeTxt.setEditable(false);
			nomeTxt.setText("");
		}
		return nomeTxt;
	}

	/**
	 * This method initializes emprestadoEmTxt	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getEmprestadoEmTxt() {
		if (emprestadoEmTxt == null) {
			emprestadoEmTxt = new JTextField();
			emprestadoEmTxt.setBounds(new Rectangle(151, 37, 115, 21));
			emprestadoEmTxt.setEditable(false);
			emprestadoEmTxt.setText("");
		}
		return emprestadoEmTxt;
	}

	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setBounds(new Rectangle(0, 0, 303, 310));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Porrogar Empréstimo");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}

	/**
	 * This method initializes jButton1	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton1() {
		if (jButton1 == null) {
			jButton1 = new JButton();
			jButton1.setBounds(new Rectangle(203, 153, 71, 21));
			jButton1.setText("Buscar");
			jButton1.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					String[] Erro = new String[1];
					OK = funcoes.validaCampoNumero(codigoTxt, "Carteirinha", Erro);					
					if (OK){	
						emprestimo = controlador.PreencheEmprestimo(Long.parseLong(codigoTxt.getText()));
						if (emprestimo != null){
							nomeTxt.setText(controlador.PreencheUsuario(emprestimo.getCarteirinha()).getNome());
							tituloTxt.setText(controlador.PreencheItem(emprestimo.getCodigoItem()).getTitulo());
							
							emprestadoEmTxt.setText(emprestimo.getEmprestadoDia().toLocaleString());
							codigoTxt.setEditable(false);
							jButton1.setEnabled(false);
							OK=true;
						}
						
					}
					else{
						String notFound = "Não Encontrado";
						codigoTxt.setText(notFound);
						nomeTxt.setText(notFound);
						tituloTxt.setText(notFound);
						emprestadoEmTxt.setText(notFound);
						funcoes.dialogoErroPreenchimento(Erro[0]);
					}
				}
			});
		}
		return jButton1;
	}

	/**
	 * This method initializes jPanel2	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel2() {
		if (jPanel2 == null) {
			nascimento11 = new JLabel();
			nascimento11.setBounds(new Rectangle(80, 22, 55, 17));
			nascimento11.setText("dias");
			nascimento11.setName("nascimento");
			devolve = new Date();
			duracaoJspinner = new JSpinner(getDuracao());
			duracaoJspinner.setBounds(new Rectangle(16, 21, 58, 21));
			};
			jPanel2 = new JPanel();
			jPanel2.setLayout(null);
			jPanel2.setBounds(new Rectangle(3, 184, 281, 51));
			jPanel2.setBackground(new Color(238, 238, 238));
			jPanel2.setBorder(BorderFactory.createTitledBorder(null, "Porrogar por", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel2.add(duracaoJspinner);
			jPanel2.add(nascimento11, null);
		
		return jPanel2;
	}

	/**
	 * This method initializes tituloTxt	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getTituloTxt() {
		if (tituloTxt == null) {
			tituloTxt = new JTextField();
			tituloTxt.setBounds(new Rectangle(16, 117, 253, 21));
			tituloTxt.setEditable(false);
			tituloTxt.setText("");
		}
		return tituloTxt;
	}

	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}
	public EditaEmpréstimoGUI(long Codigo){
		codigo = Codigo;
	}
}

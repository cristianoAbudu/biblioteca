package src;
/*Colocar todos os campos exceto "Carteirinha" e
 *"Cógido do produto" para ler do banco de dados
 *a partir dos códigos digitados. 
*/

import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;
public class CadastroEmpréstimoGUI {

	private JPanel jContentPane = null;
	private JButton adicionar2 = null;
	private JButton adicionar21 = null;
	private JPanel pessoal = null;
	private JLabel nascimento1 = null;
	private JLabel nome1 = null;
	private JTextField nasc1 = null;
	private JTextField nomeTxt1 = null;
	private JTextField telefone11111 = null;
	private JLabel nome11 = null;
	private JTextField nasc11 = null;
	private JLabel nascimento12 = null;
	private JPanel jPanel = null;
	private JPanel jPanel1 = null;
	private JTextField nomeTxt11 = null;
	private JLabel nome12 = null;
	private JLabel nascimento13 = null;
	private JTextField nasc12 = null;
	private JTextField nomeTxt111 = null;
	private JLabel nome121 = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="97,12"
	private JButton jButton = null;
	private JButton jButton1 = null;
	private ControladorEmprestimo controlador = new ControladorEmprestimo();  //  @jve:decl-index=0:
	private BibliotecaFuncoes funcoes = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private boolean UserReady = false,
					ItemReady = false;
	private Usuario usuario = new Usuario();
	private Item item = new Item();
	/**
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
			adicionar2.setText("OK");
			adicionar2.setBounds(new Rectangle(48, 274, 71, 21));
			adicionar2.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					if(ItemReady && UserReady){
						controlador.Formata(usuario, item);
					}
					else{
						funcoes.dialogoErroPreenchimento(
								"Ao digitar a carteirinha e o código," +
								"é preciso clicar em 'Achar' para confirmar" +
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
			adicionar21.setBounds(new Rectangle(156, 274, 71, 21));
			adicionar21.setText("Cancelar");
			adicionar21.setActionCommand("adicionar");
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
			nascimento12 = new JLabel();
			nascimento12.setText("Autor");
			nascimento12.setBounds(new Rectangle(151, 62, 107, 15));
			nascimento12.setName("nascimento");
			nome11 = new JLabel();
			nome11.setText("Tipo do Item");
			nome11.setBounds(new Rectangle(151, 21, 110, 17));
			nome1 = new JLabel();
			nome1.setText("Código do Item");
			nome1.setBounds(new Rectangle(16, 21, 115, 15));
			nascimento1 = new JLabel();
			nascimento1.setText("Título");
			nascimento1.setBounds(new Rectangle(16, 62, 75, 15));
			nascimento1.setName("nascimento");
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createTitledBorder(null, "", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			pessoal.setBounds(new Rectangle(5, 4, 287, 269));
			pessoal.add(getJPanel1(), null);
			pessoal.add(getJPanel(), null);
		}
		return pessoal;
	}

	/**
	 * This method initializes nasc1	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNasc1() {
		if (nasc1 == null) {
			nasc1 = new JTextField();
			nasc1.setText("");
			nasc1.setEditable(false);
			nasc1.setBounds(new Rectangle(16, 80, 115, 21));
		}
		return nasc1;
	}

	/**
	 * This method initializes nomeTxt1	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNomeTxt1() {
		if (nomeTxt1 == null) {
			nomeTxt1 = new JTextField();
			nomeTxt1.setText("");
			nomeTxt1.setBounds(new Rectangle(16, 39, 115, 21));
		}
		return nomeTxt1;
	}

	/**
	 * This method initializes telefone11111	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getTelefone11111() {
		if (telefone11111 == null) {
			telefone11111 = new JTextField();
			telefone11111.setBounds(new Rectangle(151, 39, 115, 21));
			telefone11111.setEditable(false);
		}
		return telefone11111;
	}

	/**
	 * This method initializes nasc11	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNasc11() {
		if (nasc11 == null) {
			nasc11 = new JTextField();
			nasc11.setText("");
			nasc11.setEditable(false);
			nasc11.setBounds(new Rectangle(151, 80, 115, 21));
		}
		return nasc11;
	}

	/**
	 * This method initializes jPanel	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel() {
		if (jPanel == null) {
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.setBounds(new Rectangle(3, 134, 281, 131));
			jPanel.setBorder(BorderFactory.createTitledBorder(null, "Item", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel.setBackground(new Color(238, 238, 238));
			jPanel.add(getNomeTxt1(), null);
			jPanel.add(nome1, null);
			jPanel.add(nascimento1, null);
			jPanel.add(getNasc1(), null);
			jPanel.add(nascimento12, null);
			jPanel.add(getNasc11(), null);
			jPanel.add(getTelefone11111(), null);
			jPanel.add(nome11, null);
			jPanel.add(getJButton(), null);
		}
		return jPanel;
	}

	/**
	 * This method initializes jPanel1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel1() {
		if (jPanel1 == null) {
			nome121 = new JLabel();
			nome121.setBounds(new Rectangle(151, 19, 98, 17));
			nome121.setText("Devolver dia");
			nascimento13 = new JLabel();
			nascimento13.setBounds(new Rectangle(16, 59, 112, 15));
			nascimento13.setText("Nome do Usuário");
			nascimento13.setName("nascimento");
			nome12 = new JLabel();
			nome12.setBounds(new Rectangle(16, 19, 107, 15));
			nome12.setText("Cateririnha");
			jPanel1 = new JPanel();
			jPanel1.setLayout(null);
			jPanel1.setBounds(new Rectangle(3, 3, 282, 127));
			jPanel1.setBorder(BorderFactory.createTitledBorder(null, "Usuário", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			jPanel1.setBackground(new Color(238, 238, 238));
			jPanel1.add(getNomeTxt11(), null);
			jPanel1.add(nome12, null);
			jPanel1.add(nascimento13, null);
			jPanel1.add(getNasc12(), null);
			jPanel1.add(getNomeTxt111(), null);
			jPanel1.add(nome121, null);
			jPanel1.add(getJButton1(), null);
		}
		return jPanel1;
	}

	/**
	 * This method initializes nomeTxt11	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNomeTxt11() {
		if (nomeTxt11 == null) {
			nomeTxt11 = new JTextField();
			nomeTxt11.setBounds(new Rectangle(16, 37, 115, 21));
			nomeTxt11.setText("");
		}
		return nomeTxt11;
	}

	/**
	 * This method initializes nasc12	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNasc12() {
		if (nasc12 == null) {
			nasc12 = new JTextField();
			nasc12.setBounds(new Rectangle(16, 77, 253, 21));
			nasc12.setEditable(false);
			nasc12.setText("");
		}
		return nasc12;
	}

	/**
	 * This method initializes nomeTxt111	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getNomeTxt111() {
		if (nomeTxt111 == null) {
			nomeTxt111 = new JTextField();
			nomeTxt111.setBounds(new Rectangle(151, 37, 115, 21));
			nomeTxt111.setEditable(false);
			nomeTxt111.setText("");
		}
		return nomeTxt111;
	}

	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setBounds(new Rectangle(0, 0, 303, 340));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Novo Empréstimo");
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}

	/**
	 * This method initializes jButton	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton() {
		if (jButton == null) {
			jButton = new JButton();
			jButton.setBounds(new Rectangle(195, 103, 71, 21));
			jButton.setText("Achar");
			jButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					
					boolean OK;
					String[] Erro = new String[1];
					OK = funcoes.validaCampoNumero(nomeTxt1, "Código do Item", Erro);					
					if(OK){	
						item = controlador.PreencheItem(Integer.parseInt(nomeTxt1.getText()));
						nasc1.setText(item.getTitulo());
						telefone11111.setText(item.getTipo());
						nasc11.setText(item.getAutor());
						ItemReady=OK;
					}
					else{
						funcoes.dialogoErroPreenchimento(Erro[0]);
					}
				}
			});
		}
		return jButton;
	}

	/**
	 * This method initializes jButton1	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton1() {
		if (jButton1 == null) {
			jButton1 = new JButton();
			jButton1.setBounds(new Rectangle(195, 100, 71, 21));
			jButton1.setText("Achar");
			jButton1.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					boolean OK;
					String[] Erro = new String[1];
					OK = funcoes.validaCampoNumero(nomeTxt11, "Carteirinha", Erro);					
					if (OK){	
						usuario = controlador.PreencheUsuario(Integer.parseInt(nomeTxt11.getText()));
						nasc12.setText(usuario.getNome());
						UserReady=true;
					}
					else{
						funcoes.dialogoErroPreenchimento(Erro[0]);
					}
				}
			});
		}
		return jButton1;
	}

}

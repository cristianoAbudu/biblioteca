package GUI;


import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Rectangle;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

import util.MenuDireito;

import bd.ExecutadorSQL;
import bd.entidades.Emprestimo;
import bd.entidades.Item;

public class RemoveGUI {
	private MenuDireito menuExecutador;
	private BibliotecaGUI chamadoPor;
	private JTextField jTextField = null;  //  @jve:decl-index=0:visual-constraint="-189,413"
	private JPanel jContentPane = null;
	private JButton jButton = null;
	private JButton jButton1 = null;
	private JLabel jLabel = null;
	private String codigo;
	private String entidade;
	private ExecutadorSQL executador = new ExecutadorSQL();  //  @jve:decl-index=0:
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="121,121"
	private JPanel jContentPane1 = null;
	
	private JTextField getJTextField() {
		if (jTextField == null) {
			jTextField = new JTextField();
		}
		return jTextField;
	}
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jLabel = new JLabel();
			jLabel.setBounds(new Rectangle(11, 7, 320, 37));
			jLabel.setHorizontalAlignment(SwingConstants.LEFT);
			jLabel.setHorizontalTextPosition(SwingConstants.LEFT);
			jLabel.setVerticalAlignment(SwingConstants.TOP);
			jLabel.setVerticalTextPosition(SwingConstants.TOP);
			jLabel.setText("Deseja realmente excluir o "+entidade+" de código "+codigo);
			jContentPane = new JPanel();
			jContentPane.setLayout(null);
			jContentPane.add(getJButton(), null);
			jContentPane.add(getJButton1(), null);
			jContentPane.add(jLabel, null);
		}
		return jContentPane;
	}
	private JButton getJButton() {
		if (jButton == null) {
			jButton = new JButton();
			jButton.setBounds(new Rectangle(87, 55, 71, 21));
			jButton.setText("Sim");
			jButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Executar removedor"); 
					String sql = null;
					if (entidade=="Item"){
						sql = "DELETE FROM ITEM WHERE CODIGO LIKE '"+codigo+"'";
					}
					else{
						if (entidade == "Usuário"){
							sql = "DELETE FROM USUARIO WHERE CARTEIRINHA= "+codigo;
						}
						else{
							if (entidade == "Empréstimo"){
								sql = "DELETE  FROM EMPRESTIMO WHERE CODIGO= "+codigo;
								Emprestimo emprestimo = executador.RetornaEmprestimo("SELECT * FROM EMPRESTIMO WHERE CODIGO= "+codigo);
								Item item = executador.RetornaItemSQL("SELECT * FROM ITEM WHERE CODIGO LIKE '"+emprestimo.getCodigoItem()+"'");
								executador.noReturnSQL("" +
										"UPDATE ITEM " +
										"SET EMPRESTADO=0 " +
										"WHERE " +
										"CODIGO " +
										"LIKE " +
										"'%"
										+item.getCodigo()
										+"%'" +
												"");
							}
						}
					}
					executador.noReturnSQL(sql);
					getJInternalFrame().dispose();
					
				}
			});
		}
		return jButton;
	}
	private JButton getJButton1() {
		if (jButton1 == null) {
			jButton1 = new JButton();
			jButton1.setBounds(new Rectangle(190, 55, 71, 21));
			jButton1.setText("Não");
			jButton1.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Nao");
					// TODO Auto-generated Event stub actionPerformed()
					getJInternalFrame().dispose();
				}
			});
		}
		return jButton1;
	}
	public RemoveGUI(String string, String Entidade, BibliotecaGUI Origem){
		entidade = Entidade;
		codigo = string;
		chamadoPor = Origem;
	}
	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setSize(new Dimension(348, 116));
			jInternalFrame.setClosable(true);
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/delete.gif")));
			jInternalFrame.setTitle("Confirmar remoção");
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
}

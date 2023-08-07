package src;
//Criar opções do Choicer do Tipo

import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;
public class CadastroItemGUI {
	private String[] Erro = new String[1];
	private JPanel jContentPane = null;
	private JButton adicionar2 = null;
	private JButton adicionar21 = null;
	private JPanel pessoal = null;
	private JLabel LabelAutor = null;
	private JLabel nome1 = null;
	private JTextField Idioma = null;
	private JTextField Autor = null;
	private JTextField Titulo = null;
	private JLabel nascimento11 = null;
	private JTextField Editora = null;
	private JLabel nascimento111 = null;
	private JLabel tel11 = null;
	private JLabel tel111 = null;
	private JTextField Ano = null;
	private JComboBox selectTipo = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="9,-5"
	
	private ControladorItem controlador = new ControladorItem();
	
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
			adicionar2.setText("OK");
			adicionar2.setActionCommand("adicionar");
			adicionar2.setBounds(new Rectangle(48, 256, 71, 21));
			adicionar2.addActionListener(new java.awt.event.ActionListener() {   
				public void actionPerformed(java.awt.event.ActionEvent e) {    
					String titulo=Titulo.getText(),
							autor=Autor.getText(),
							idioma=Idioma.getText(),
							ano=Ano.getText(),
							editora=Editora.getText(),
							tipo= (String)selectTipo.getSelectedItem();
					Erro[0]="";
					boolean OK = true;
					BibliotecaFuncoes validador = new BibliotecaFuncoes();
					OK=validador.validaCampoNumeroNaoObrigatorio(Ano, "Ano", Erro);
					
					if (titulo.length()==0 		| //valida os dados
							autor.length()==0	|
							tipo.length()==0){
						OK = false;
						
						if (titulo.length()==0){
							Erro[0] += "Título\n";
						}
						if (autor.length()==0){
							Erro[0] += "Autor\n";
						}
						if (tipo.length()==0){
							Erro[0] += "Autor\n";
						}
					}
					if (OK){
						System.out.println("Adicionando Item...");
						ControladorItem.Adicionar(tipo,
													titulo,
													autor,
													idioma,
													ano,
													editora);
					}
					else {
						validador.dialogoErroPreenchimento(Erro[0]);
					}
				}
							
				}
			
			);
		}
		return adicionar2;
	}

	/**
	 * This method initializes adicionar21	
	 * 	
	 * @return java.awt.Button	
	 */
	private JButton getAdicionar21() {
		if (adicionar21 == null) {
			adicionar21 = new JButton();
			adicionar21.setBounds(new Rectangle(156, 256, 71, 21));
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
			tel111 = new JLabel();
			tel111.setBounds(new Rectangle(151, 186, 111, 15));
			tel111.setText("Tipo*");
			tel11 = new JLabel();
			tel11.setBounds(new Rectangle(150, 132, 115, 15));
			tel11.setText("Ano da edição");
			nascimento111 = new JLabel();
			nascimento111.setBounds(new Rectangle(15, 186, 113, 15));
			nascimento111.setText("Editora");
			nascimento111.setName("nascimento");
			nascimento11 = new JLabel();
			nascimento11.setBounds(new Rectangle(15, 132, 109, 15));
			nascimento11.setText("Idioma");
			nascimento11.setName("nascimento");
			nome1 = new JLabel();
			nome1.setBounds(new Rectangle(15, 24, 47, 15));
			nome1.setText("Título*");
			LabelAutor = new JLabel();
			LabelAutor.setBounds(new Rectangle(15, 78, 75, 15));
			LabelAutor.setText("Autor*");
			LabelAutor.setName("nascimento");
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createTitledBorder(null, "Dados do Item", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			pessoal.setBounds(new Rectangle(5, 4, 287, 246));
			pessoal.add(LabelAutor, null);
			pessoal.add(nome1, null);
			pessoal.add(getIdioma(), null);
			pessoal.add(getAutor(), null);
			pessoal.add(getTitulo(), null);
			pessoal.add(nascimento11, null);
			pessoal.add(getEditora(), null);
			pessoal.add(nascimento111, null);
			pessoal.add(tel11, null);
			pessoal.add(tel111, null);
			pessoal.add(getAno(), null);
			pessoal.add(getSelectTipo(), null);
		}
		return pessoal;
	}

	/**
	 * This method initializes Idioma	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getIdioma() {
		if (Idioma == null) {
			Idioma = new JTextField();
			Idioma.setBounds(new Rectangle(15, 150, 115, 21));
		}
		return Idioma;
	}

	/**
	 * This method initializes Autor	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getAutor() {
		if (Autor == null) {
			Autor = new JTextField();
			Autor.setBounds(new Rectangle(15, 96, 253, 21));
			Autor.setText("");
		}
		return Autor;
	}

	/**
	 * This method initializes Titulo	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getTitulo() {
		if (Titulo == null) {
			Titulo = new JTextField();
			Titulo.setBounds(new Rectangle(15, 42, 253, 21));
			Titulo.setText("");
		}
		return Titulo;
	}

	/**
	 * This method initializes Editora	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getEditora() {
		if (Editora == null) {
			Editora = new JTextField();
			Editora.setBounds(new Rectangle(15, 204, 115, 21));
		}
		return Editora;
	}

	/**
	 * This method initializes Ano	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getAno() {
		if (Ano == null) {
			Ano = new JTextField();
			Ano.setBounds(new Rectangle(150, 150, 115, 21));
		}
		return Ano;
	}

	/**
	 * This method initializes selectTipo	
	 * 	
	 * @return java.awt.Choice	
	 */
	private JComboBox getSelectTipo() {
		if (selectTipo == null) {
			selectTipo = controlador.getTiposCombo();
			selectTipo.setBounds(new Rectangle(150, 204, 115, 21));
	        
			int tiposCadastrados = controlador.nTipos(); 
			
			boolean add = true;
			
			if (tiposCadastrados==15){
				//No máximo 15 tipos de itens podem ser cadastrados
				add = false;
			}
			
			selectTipo.setEditable(add);
		}
		return selectTipo;
	}

	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setBounds(new Rectangle(0, 0, 306, 320));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Novo Item");
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}
	public CadastroItemGUI(){
		getJInternalFrame();
	}

}

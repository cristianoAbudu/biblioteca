package GUI;



import java.awt.Color;
import java.awt.Font;
import java.awt.Rectangle;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import bd.entidades.Item;

import util.BibliotecaFuncoes;

import controladores.ControladorEmprestimo;
import controladores.ControladorItem;
public class EditaItemGUI {
	private String[] Erro = new String[1];
	private JPanel jContentPane = null;
	private JButton adicionar2 = null;
	private JButton adicionar21 = null;
	private JPanel pessoal = null;
	private JLabel LabelAutor = null;
	private JLabel nome1 = null;
	private JTextField Idioma = null;
	private JTextField Titulo = null;
	private JTextField Codigo = null;
	private JLabel nascimento11 = null;
	private JTextField Editora = null;
	private JLabel nascimento111 = null;
	private JLabel tel11 = null;
	private JLabel tel111 = null;
	private JTextField Ano = null;
	private JComboBox selectTipo = null;
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="9,-5"
	private ControladorEmprestimo preenchedor = new ControladorEmprestimo();  //  @jve:decl-index=0:
	private ControladorItem controlador = new ControladorItem();
	private JLabel AutorLabel = null;
	private JTextField Autor = null;
	private JButton buscaBtn = null;
	private BibliotecaFuncoes validador = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private String codigoExterno;  //  @jve:decl-index=0:
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
			adicionar2.setText("Atualizar");
			adicionar2.setActionCommand("adicionar");
			adicionar2.setBounds(new Rectangle(48, 300, 85, 21));
			adicionar2.addActionListener(new java.awt.event.ActionListener() {   
				public void actionPerformed(java.awt.event.ActionEvent e) {    
					String codigo=Codigo.getText();
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
						//System.out.println("Atualizando Item...");
						controlador.Atualizar(codigo,
													tipo,
													titulo,
													autor,
													idioma,
													ano,
													editora);
						Codigo.setEditable(true);
						buscaBtn.setEnabled(true);
						Idioma.setText("");
						Titulo.setText("");
						Editora.setText("");
						Ano.setText("");
						Autor.setText("");
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
			adicionar21.setBounds(new Rectangle(156, 300, 85, 21));
			adicionar21.setText("Fechar");
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
			AutorLabel = new JLabel();
			AutorLabel.setBounds(new Rectangle(15, 132, 111, 14));
			AutorLabel.setText("Autor*");
			AutorLabel.setName("nascimento");
			tel111 = new JLabel();
			tel111.setBounds(new Rectangle(150, 186, 111, 15));
			tel111.setText("Tipo*");
			tel11 = new JLabel();
			tel11.setBounds(new Rectangle(150, 240, 115, 15));
			tel11.setText("Ano da edição");
			nascimento111 = new JLabel();
			nascimento111.setBounds(new Rectangle(15, 186, 113, 15));
			nascimento111.setText("Editora");
			nascimento111.setName("nascimento");
			nascimento11 = new JLabel();
			nascimento11.setBounds(new Rectangle(15, 240, 109, 15));
			nascimento11.setText("Idioma");
			nascimento11.setName("nascimento");
			nome1 = new JLabel();
			nome1.setBounds(new Rectangle(15, 24, 47, 15));
			nome1.setText("Código*");
			LabelAutor = new JLabel();
			LabelAutor.setBounds(new Rectangle(15, 78, 75, 15));
			LabelAutor.setText("Título*");
			LabelAutor.setName("nascimento");
			pessoal = new JPanel();
			pessoal.setLayout(null);
			pessoal.setBackground(new Color(238, 238, 238));
			pessoal.setBorder(BorderFactory.createTitledBorder(null, "Dados do Item", TitledBorder.DEFAULT_JUSTIFICATION, TitledBorder.DEFAULT_POSITION, new Font("Dialog", Font.BOLD, 12), new Color(51, 51, 51)));
			pessoal.setBounds(new Rectangle(5, 4, 287, 290));
			pessoal.add(LabelAutor, null);
			pessoal.add(nome1, null);
			pessoal.add(getIdioma(), null);
			pessoal.add(getTitulo(), null);
			pessoal.add(getCodigo(), null);
			pessoal.add(nascimento11, null);
			pessoal.add(getEditora(), null);
			pessoal.add(nascimento111, null);
			pessoal.add(tel11, null);
			pessoal.add(tel111, null);
			pessoal.add(getAno(), null);
			pessoal.add(getSelectTipo(), null);
			pessoal.add(AutorLabel, null);
			pessoal.add(getAutor(), null);
			pessoal.add(getBuscaBtn(), null);
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
			Idioma.setBounds(new Rectangle(15, 258, 115, 21));
		}
		return Idioma;
	}

	/**
	 * This method initializes Titulo	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getTitulo() {
		if (Titulo == null) {
			Titulo = new JTextField();
			Titulo.setBounds(new Rectangle(15, 96, 253, 21));
			Titulo.setEditable(true);
			Titulo.setText("");
		}
		return Titulo;
	}

	/**
	 * This method initializes Codigo	
	 * 	
	 * @return java.awt.TextField	
	 */
	private JTextField getCodigo() {
		if (Codigo == null) {
			Codigo = new JTextField();
			Codigo.setBounds(new Rectangle(15, 42, 158, 21));
			Codigo.setText("");
			if (!(codigoExterno.equalsIgnoreCase("-1"))){
				Codigo.setText(String.valueOf(codigoExterno));
			}
			else
			{
				
			}
		}
		return Codigo;
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
			Ano.setBounds(new Rectangle(150, 258, 115, 21));
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
			jInternalFrame.setBounds(new Rectangle(0, 0, 306, 367));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Atualizar dados de Item");
			jInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}
	public EditaItemGUI(String codigo2){
		codigoExterno = codigo2;
		getJInternalFrame();
		getBuscaBtn().doClick();
	}

	/**
	 * This method initializes Autor	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getAutor() {
		if (Autor == null) {
			Autor = new JTextField();
			Autor.setBounds(new Rectangle(14, 150, 253, 21));
			Autor.setText("");
		}
		return Autor;
	}

	/**
	 * This method initializes buscaBtn	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getBuscaBtn() {
		if (buscaBtn == null) {
			buscaBtn = new JButton();
			buscaBtn.setBounds(new Rectangle(193, 42, 75, 21));
			buscaBtn.setText("Buscar");
			buscaBtn.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Preenche Item");
					Item item = preenchedor.PreencheItem(Codigo.getText());
					Idioma.setText(item.getIdioma());
					Titulo.setText(item.getTitulo());
					Editora.setText(item.getEditora());
					Idioma.setText(item.getIdioma());
					Ano.setText(String.valueOf(item.getAno()));
					if (item.getCodigo() != "-1"){
						Codigo.setText(String.valueOf(item.getCodigo()));
						buscaBtn.setEnabled(false);
						Codigo.setEditable(false);
					}
					else{
						Codigo.setText("Código inválido");
					}
					Editora.setText(item.getEditora());
					Autor.setText(item.getAutor());
				}
			});
		}
		return buscaBtn;
	}

	public String getCodigoExterno() {
		return codigoExterno;
	}

	public void setCodigoExterno(String codigoExterno) {
		this.codigoExterno = codigoExterno;
	}

}

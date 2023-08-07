package GUI;

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

import util.ExportaItem;

import bd.ExecutadorSQL;
import bd.entidades.Item;

import controladores.ControladorItem;

public class ListaItemGUI {
	//private TabelaResultados origem;
	private BibliotecaGUI chamadoPor;
	private String codigo;
	Item item = new Item();
	
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
	private JInternalFrame jInternalFrame = null;  //  @jve:decl-index=0:visual-constraint="9,-5"
	
	private ControladorItem controlador = new ControladorItem();
	private JLabel AutorLabel = null;
	private JTextField Autor = null;
	private JTextField tipo = null;
	private JButton jButton = null;
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
			jContentPane.add(getJButton(), null);
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
			adicionar2.setText("Editar");
			adicionar2.setActionCommand("adicionar");
			adicionar2.setBounds(new Rectangle(9, 300, 85, 21));
			adicionar2.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					chamadoPor.editaGUI("Item", item.getCodigo());
					getJInternalFrame().doDefaultCloseAction();
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
	private JButton getAdicionar21() {
		if (adicionar21 == null) {
			adicionar21 = new JButton();
			adicionar21.setBounds(new Rectangle(203, 300, 85, 21));
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
			AutorLabel = new JLabel();
			AutorLabel.setBounds(new Rectangle(15, 132, 111, 14));
			AutorLabel.setText("Autor*");
			AutorLabel.setName("nascimento");
			tel111 = new JLabel();
			tel111.setBounds(new Rectangle(150, 186, 111, 15));
			tel111.setText("Tipo");
			tel11 = new JLabel();
			tel11.setBounds(new Rectangle(150, 240, 115, 15));
			tel11.setText("Emprestado");
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
			nome1.setText("Código");
			LabelAutor = new JLabel();
			LabelAutor.setBounds(new Rectangle(15, 78, 75, 15));
			LabelAutor.setText("Título");
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
			pessoal.add(AutorLabel, null);
			pessoal.add(getAutor(), null);
			pessoal.add(getTipo(), null);
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
			Idioma.setEditable(false);
			Idioma.setText(item.getIdioma());
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
			Titulo.setEditable(false);
			Titulo.setText(item.getTitulo());
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
			Codigo.setBounds(new Rectangle(15, 42, 253, 21));
			Codigo.setEditable(false);
			Codigo.setText(item.getCodigo());
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
			Editora.setEditable(false);
			Editora.setText(item.getEditora());
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
			Ano.setEditable(false);
			String emprestado = "Não";
			if (item.getEmprestado()==1){
				emprestado = "Sim";
				adicionar2.setEnabled(false);
			}
			Ano.setText(emprestado);
		}
		return Ano;
	}

	/**
	 * This method initializes jInternalFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jInternalFrame == null) {
			jInternalFrame = new JInternalFrame();
			jInternalFrame.setBounds(new Rectangle(0, 0, 306, 360));
			jInternalFrame.setClosable(true);
			jInternalFrame.setIconifiable(true);
			jInternalFrame.setTitle("Dados de "+item.getTitulo());
			jInternalFrame.setContentPane(getJContentPane());
		}
		return jInternalFrame;
	}
	public ListaItemGUI(String cod, BibliotecaGUI telaPrincipal){
		codigo = cod;
		chamadoPor = telaPrincipal;
		ExecutadorSQL executador = new ExecutadorSQL();
		String sql = "SELECT * FROM ITEM WHERE CODIGO LIKE '"+codigo+"'";
		item = executador.RetornaItemSQL(sql);
		getJInternalFrame();
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
			Autor.setEditable(false);
			Autor.setText(item.getAutor());
		}
		return Autor;
	}

	/**
	 * This method initializes tipo	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getTipo() {
		if (tipo == null) {
			tipo = new JTextField();
			tipo.setBounds(new Rectangle(150, 204, 115, 21));
			tipo.setEditable(false);
			tipo.setText(item.getTipo());
		}
		return tipo;
	}

	/**
	 * This method initializes jButton	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton() {
		if (jButton == null) {
			jButton = new JButton();
			jButton.setText("Etiqueta");
			jButton.setBounds(new Rectangle(97, 300, 100, 21));
			jButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					ExportaItem exportador = new ExportaItem();
					exportador.exporta(getJInternalFrame(), item);
				}
			});
		}
		return jButton;
	}
	
	

}

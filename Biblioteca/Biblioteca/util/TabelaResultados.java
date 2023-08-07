package util;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.event.MouseListener;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JInternalFrame;
import javax.swing.JPanel;
import javax.swing.JPopupMenu;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JToolBar;
import javax.swing.ListSelectionModel;
import javax.swing.SwingConstants;

import bd.DadosTabela;
import bd.ExecutadorSQL;


import GUI.BibliotecaGUI;
public class TabelaResultados {
	
	private BibliotecaFuncoes dialogo = new BibliotecaFuncoes();  //  @jve:decl-index=0:
	private BibliotecaGUI chamadoPor;
	private MouseListener popupListener = new PopupListener(this);
	private MenuDireito menu;
	private JPopupMenu clickDireito;
	private String Guarda;
	private String Titulo;
	//private BaseItem base = new BaseItem();  //  @jve:decl-index=0:
	private String[] Colunas = null;
	private Vector Conteudo = null;
	private JInternalFrame TabelaItemInternalFrame = null;
	private JPanel JTbItemcontentPane = null;
	private JScrollPane jScrollPane = null;
	private JTable jTable = null;
	private ExecutadorSQL executador = new ExecutadorSQL();  //  @jve:decl-index=0:
	private SimpleTableModel modelo;
	private boolean first = true;
	private JToolBar jToolBar = null;
	private JButton jButtonAtualizar = null;
	private JButton jButtonEditar = null;  //  @jve:decl-index=0:visual-constraint="260,58"
	private JButton removeJButton = null;
	private JButton jButtonCriar = null;
	//private DefaultTableModel modelo = null;
	public String getGuarda(){
		return Guarda;
	}
	public BibliotecaGUI getChamadoPor() {
		return chamadoPor;
	}

	public JInternalFrame getTabelaItemInternalFrame() {
		if (TabelaItemInternalFrame == null) {
			menu = new MenuDireito(this);
			clickDireito = menu.getRetorno();
			TabelaItemInternalFrame = new JInternalFrame();
			TabelaItemInternalFrame.setSize(new Dimension(424, 214));
			TabelaItemInternalFrame.setClosable(true);
			TabelaItemInternalFrame.setIconifiable(true);
			TabelaItemInternalFrame.setMaximizable(true);
			TabelaItemInternalFrame.setTitle(Titulo);
			TabelaItemInternalFrame.setResizable(true);
			TabelaItemInternalFrame.setLocation(new Point(0, 0));
			TabelaItemInternalFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/frameTabela.gif")));
			TabelaItemInternalFrame.setContentPane(getJTbItemcontentPane());
			//TabelaItemInternalFrame.setBounds(jTable.getBounds());
		}
		return TabelaItemInternalFrame;
	}

	private JPanel getJTbItemcontentPane() {
		if (JTbItemcontentPane == null) {
			JTbItemcontentPane = new JPanel();
			JTbItemcontentPane.setLayout(new BorderLayout());
			JTbItemcontentPane.add(getJScrollPane(), BorderLayout.CENTER);
			JTbItemcontentPane.add(getJToolBar(), BorderLayout.NORTH);
		}
		return JTbItemcontentPane;
	}

	private JScrollPane getJScrollPane() {
		if (jScrollPane == null) {
			jScrollPane = new JScrollPane();
			jScrollPane.setViewportView(getJTable());
		}
		return jScrollPane;
	}

	public JTable getJTable() {
		if (jTable == null) {
			jTable = new JTable(modelo);
			jTable.setRowSelectionAllowed(true);
			jTable.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
			jTable.addMouseListener(popupListener);			
		}
		return jTable;
	}
	public TabelaResultados(DadosTabela dados, String titulo, String guarda, BibliotecaGUI ChamadoPor){
		System.out.println("Construtor da TabelaResultados");
		chamadoPor = ChamadoPor;
		Guarda = guarda;
		Colunas = dados.getCabecalho();
		Conteudo = dados.getLinhas();
		Titulo = titulo;
		
		//System.out.println("\n\nCONTEUDO: "+Conteudo+"\nCOLUNAS:");
		
		try{
			/*
			for (int i=0; i<dados.getCabecalho().length; i++){
				//System.out.println(i+"o:"+Colunas[i]);
			}
			*/
			atualizar();
	
		}catch(Exception e){
			Vector vazia;
			String[] vazia1;
			vazia = new Vector();
			vazia1 = new String[1];
			vazia1[0] = "Nenhum "+Guarda+" encontrado.";
			boolean [] editavel = new boolean[1];
			editavel[0] = false;
			modelo = new SimpleTableModel(vazia, vazia1, editavel);
		}
		first = false;
	}
	
	public String[][] TestaRs(ResultSet rs){
		String [][] objeto = executador.FazObjeto(rs);
		return objeto;
	}
	public JPopupMenu getClickDireito() {
		return clickDireito;
	}
	
	public String getCodigo(){		
		if (jTable.getSelectedRow() != -1){
			Object algo[] = Conteudo.toArray();
			String linha = algo[jTable.getSelectedRow()].toString();
			StringTokenizer st = new StringTokenizer(linha , ",");
			String Fcodigo = st.nextToken();
			String codigo = Fcodigo.substring(1);
			//System.out.println("\n\ngetCODIGO:"+codigo+"\n\n\n");
			System.out.println("TabelaResultados::getCodigo()");
			return codigo;
		}
		return "-1";
	}
	@SuppressWarnings({ "unchecked", "unchecked" })
	public void atualizar() {
		if (first){
			//Função usada para preencher a tabela
			boolean[] editavel = new boolean [1];
			editavel[0] = false;
			modelo = new SimpleTableModel(Conteudo, Colunas, editavel);
		}
		else{
			//Função usada para atualizar a tabela
			try{
				String sql = "SELECT ";
				DadosTabela dados = new DadosTabela();
				if (Guarda == "Item"){
					sql+= "CODIGO, TITULO, AUTOR, TIPO, EMPRESTADO FROM ITEM ORDER BY EMPRESTADO, CODIGO, AUTOR, TITULO, TIPO, IDIOMA, EDITORA";
					System.out.println("Atualizando tabelaResultados com"+Guarda);
					dados = executador.BuscaComRetorno(sql);
				}else{
					if (Guarda == "Empréstimo"){
						sql+= "* FROM EMPRESTIMO ORDER BY " +
						"EMPRESTADODIA, DEVOLVERDIA, CODIGOITEM, CARTEIRINHA, CODIGO";
						dados = executador.BuscaEmprestimoComRetorno(sql);
					}else{
						if (Guarda == "Usuário"){
							sql+="CARTEIRINHA, NOME, EMAIL, TELEFONE, CIDADE FROM USUARIO" +
									" ORDER BY NOME, CIDADE, EMAIL";
							dados = executador.BuscaComRetorno(sql);
						}
					}
				}
				Conteudo = dados.getLinhas();
				modelo.setLinhas(new ArrayList(dados.getLinhas()));
				modelo.setColunas(dados.getCabecalho());
				//System.out.println("\n\n\nAtualizando tabela. Novos dados: \n\n"+Conteudo);
				modelo.fireTableStructureChanged();
				modelo.fireTableDataChanged();
			}catch(Exception e){
				Vector vazia;
				String[] vazia1;
				vazia = new Vector();
				vazia1 = new String[1];
				vazia1[0] = "Nenhum "+Guarda.toLowerCase()+" encontrado.";
				boolean [] editavel = new boolean[1];
				editavel[0] = false;
				modelo.setColunas(vazia1);
				modelo.setLinhas((new ArrayList(vazia)));
				modelo.fireTableStructureChanged();
				modelo.fireTableDataChanged();
			}
		}
		String plural, Tb;
		if (Guarda.equalsIgnoreCase("Item")){
			plural = "itens";
		}
		else
		{
			plural = Guarda+"s".toLowerCase();
		}
		Tb = " - Total: "+modelo.getRowCount()+" "+plural.toLowerCase();
		getTabelaItemInternalFrame().setTitle(Titulo+Tb);
	}
	/**
	 * This method initializes jToolBar	
	 * 	
	 * @return javax.swing.JToolBar	
	 */
	private JToolBar getJToolBar() {
		if (jToolBar == null) {
			jToolBar = new JToolBar();
			jToolBar.setFloatable(false);
			jToolBar.setPreferredSize(new Dimension(108, 21));
			jToolBar.add(getJButtonCriar());
			jToolBar.add(getRemoveJButton());
			jToolBar.add(getJButtonEditar());
			jToolBar.addSeparator();
			jToolBar.add(getJButtonAtualizar());
		}
		return jToolBar;
	}
	/**
	 * This method initializes jButtonAtualizar	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButtonAtualizar() {
		if (jButtonAtualizar == null) {
			jButtonAtualizar = new JButton();
			jButtonAtualizar.setBorderPainted(false);
			jButtonAtualizar.setHorizontalTextPosition(SwingConstants.CENTER);
			jButtonAtualizar.setPreferredSize(new Dimension(20, 20));
			jButtonAtualizar.setIcon(new ImageIcon(getClass().getResource("/icones/update.gif")));
			jButtonAtualizar.setToolTipText("Atualizar dados da tabela");
			jButtonAtualizar.setBounds(new Rectangle(2, 1, 10, 10));
			jButtonAtualizar.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("BotaoAtualizarTabela()"); // TODO Auto-generated Event stub actionPerformed()
					atualizar();
				}
			});
		}
		return jButtonAtualizar;
	}
	/**
	 * This method initializes jButtonEditar	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButtonEditar() {
		if (jButtonEditar == null) {
			jButtonEditar = new JButton();
			jButtonEditar.setIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			jButtonEditar.setToolTipText("Editar dados do "+Guarda.toLowerCase()+" selecionado");
			jButtonEditar.setBorderPainted(false);
			jButtonEditar.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("BotaoEditarTabela()"); // TODO Auto-generated Event stub actionPerformed()
					if (getCodigo().equalsIgnoreCase("-1")){
						dialogo.dialogoInfo(
								"Favor selecionar um "+Guarda.toLowerCase()+" da lista!",
								"Favor selecionar");
					}
					else{
						chamadoPor.editaGUI(Guarda, getCodigo());
					}
				}
			});
			
		}
		return jButtonEditar;
	}
	/**
	 * This method initializes removeJButton	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getRemoveJButton() {
		if (removeJButton == null) {
			removeJButton = new JButton();
			removeJButton.setIcon(new ImageIcon(getClass().getResource("/icones/delete.gif")));
			removeJButton.setToolTipText("Excluir "+Guarda.toLowerCase()+" selecionado do cadastro");
			removeJButton.setBorderPainted(false);
			removeJButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("BotaRemoverDaTabela()"); 
					chamadoPor.removeGUI(Guarda, getCodigo());
				}
			});
		}
		return removeJButton;
	}
	/**
	 * This method initializes jButtonCriar	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButtonCriar() {
		if (jButtonCriar == null) {
			jButtonCriar = new JButton();
			jButtonCriar.setIcon(new ImageIcon(getClass().getResource("/icones/add.gif")));
			jButtonCriar.setToolTipText("Criar novo "+Guarda.toLowerCase());
			jButtonCriar.setBorderPainted(false);
			jButtonCriar.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("BotaoCriarDaTabela()"); // TODO Auto-generated Event stub actionPerformed()
					chamadoPor.criaGUI(Guarda);
				}
			});
		}
		return jButtonCriar;
	}
	public SimpleTableModel getModelo() {
		return modelo;
	}
}

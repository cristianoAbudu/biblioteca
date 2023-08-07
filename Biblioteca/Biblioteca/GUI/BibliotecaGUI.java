package GUI;
//www.java2s.com

/*
 * PARA FAZER APARECER UM JInternalFrame DENTRO DO DESKTOP:
 *  - No método que chama a janela, deve-se seguir a ordem:
 *  
 *  	[1] - Declaração de uma variável do tipo da classe que
 *  		contém o internal frame;
 *  
 *  	[2] - Declaração de uma variável (tipo JInternalFrame)
 *  		que receberá o conteúdo	do frame vindo de outra
 *  		classe;
 *  
 *  	[3] - Adicionar a variável do passo "2" ao desktop que
 *  		mostrará a JInternalFrame;
 *  
 *  	[4] - dar um setVisible com valor de true para a
 *  		JInternalFrame inicializada em "2", tal método
 *          deve ser chamado dentro da classe pai, e não da
 *          filha, pois caso contrário abrirá a janela não
 *          selecionada dentro do desktopPane.
 *             
 *  			
 *  			exemplo:
 *  				MostraJanela(){
 *  					[1] BuscaUsuário busca = new BuscaUsuário();
						[2] JInternalFrame frameBusUsuario = busca.getJInternalFrame();
						[3] desktopPrincipal.add(frameBusUsuario);
						[4] frameBusUsuario.setVisible(true);
					}
 */

/*NECESSÁRIO CHAMAR OUTRAS TELAS
 *INSERINDO-AS DENTRO DO desktopPrincipal
 *como JInternalFrame 's 
*/

//Frame tutorial imports

import java.awt.Dimension;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;
import java.beans.PropertyChangeListener;

import javax.swing.Action;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JInternalFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JToolBar;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.plaf.metal.MetalLookAndFeel;

import bd.ConexaoBaseDB2;
import bd.DadosTabela;
import bd.ExecutadorSQL;

import util.BibliotecaFuncoes;
import util.TabelaResultados;


public class BibliotecaGUI{

	private ExecutadorSQL executador = null;  //  @jve:decl-index=0:
	private BuscaEmpréstimoGUI busEmprestimo = null;  //  @jve:decl-index=0:
	private BuscaUsuárioGUI buscaUsr = null;
	private ConexaoBaseDB2 conecta = null;
	private BuscaItemGUI busItem;  //  @jve:decl-index=0:
	private BibliotecaFuncoes centralizador = null;  //  @jve:decl-index=0:
	private JToolBar jToolBar = null;
	private JButton ListaUsuariosBttn = null;
	private JFrame jFrame = null;  //  @jve:decl-index=0:visual-constraint="138,74"
	private JPanel jContentPane = null;
	private JMenuBar BarraDeMenus = null;
	private JMenu Arquivo = null;
	private JMenu Novo = null;
	private JMenuItem Sair = null;
	private JMenuItem addUsuário = null;
	private JMenuItem addItem = null;
	private JMenuItem addEmpréstimo = null;
	private JMenu Busca = null;
	private JMenu Ajuda = null;
	private JMenuItem srcUsuário = null;
	private JMenuItem srcItem = null;
	private JMenuItem srcEmpréstimo = null;
	private JDesktopPane desktopPrincipal = null;
	private JMenuItem ajSobre = null;
	private TabelaResultados tabelaItem, tabelaUsuario, tabelaEmprestimo;  //  @jve:decl-index=0:
	
	private boolean telaDividida = true; 
	
	private int contadorDeJanelas = 0;
	private JMenu jMenuConfig = null;
	private JMenuItem conDb2 = null;
		
	public BibliotecaGUI() {
		centralizador = new BibliotecaFuncoes();
		
		
		jFrame = getJFrame();
		jFrame.validate();
		jFrame.setExtendedState(JFrame.MAXIMIZED_BOTH);
		jFrame.setVisible(true);
		jFrame.setResizable(false);
		
		start();
		  
	}
	
	/**
	 * 
	 * Metodo que tenta estabelecer conexão com o banco de dados.
	 * Caso não consiga, dispara um erro e chama o método erroConexao()
	 *
	 * @since 06/08/2007
	 *
	 */
	private void start(){
		try{
			conecta = new ConexaoBaseDB2();
			conecta.getConnection();
			
			executador = new ExecutadorSQL();
			busEmprestimo = new BuscaEmpréstimoGUI(this);
			buscaUsr = new BuscaUsuárioGUI(this);
			busItem = new BuscaItemGUI(this);
			
			listaEmprestimos();
			listaUsuarios();
			listaItens();
		    telaDividida=false;
		}catch(Exception e){
			System.out.println(e.getMessage());
			erroConexao();
		}
	}
	/**
	 * 
	 * Metodo que, caso ocorra erro de conexão na abertura do
	 * programa, abre automaticamente a tela de configuração
	 * de conexão, trava as opções de menuo e avisa ao usuário
	 * sobre o erro através de um JOptionPane.
	 * que ocorreu o erro.
	 *
	 * @since 06/08/2007
	 *
	 */
	private void erroConexao(){
		JOptionPane.showMessageDialog
		(null,"Erro ao estabelecer conexão\n" +
				"Verifique:\n" +
				"- Se o servidor Db2 ncontra-se ligado\n" +
				"- Se os dados da conexão estão corretos.\n", 
				"CONEXÃO",JOptionPane.ERROR_MESSAGE);
		Novo.setEnabled(false);
		Busca.setEnabled(false);
		getConDb2();
		getConDb2().doClick();		
	}
	    
	/**
	 * This method initializes jFrame	
	 * 	
	 * @return javax.swing.JFrame	
	 * @throws  
	 */
	@SuppressWarnings("static-access")
	public JFrame getJFrame()   {
		if (jFrame == null) {
			jFrame = new JFrame();
			jFrame.setSize(new Dimension(800, 600));
			jFrame.setTitle("Bibloteca v2.2");
			jFrame.setResizable(true);
			jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			jFrame.setIconImage(Toolkit.getDefaultToolkit().getImage(getClass().getResource("/icones/livrob.gif")));
			jFrame.setJMenuBar(getBarraDeMenus());
			jFrame.setContentPane(getJContentPane());
			try {
				UIManager.setLookAndFeel(new MetalLookAndFeel());
			} catch (UnsupportedLookAndFeelException e1) {
				// TODO Excecao lancada pelo bloco try/catch
				e1.printStackTrace();
			}
			jFrame.setDefaultLookAndFeelDecorated(true);

		}
		return jFrame;
	}

	/**
	 * This method initializes jContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jContentPane = new JPanel();
			jContentPane.setLayout(new BoxLayout(getJContentPane(), BoxLayout.Y_AXIS));
			jContentPane.setName("");
			jContentPane.setBounds(new Rectangle(0, 0, 0, 0));
			jContentPane.add(getJToolBar());
			jContentPane.add(getDesktopPrincipal());
		}
		return jContentPane;
	}
	
	public void incrementaContadorDeJanelas(){
		if (contadorDeJanelas == 2){
			contadorDeJanelas = 0;
		}
		else
		{
			contadorDeJanelas++;
			
		}
	}

	/**
	 * This method initializes BarraDeMenus	
	 * 	
	 * @return javax.swing.JMenuBar	
	 */
	private JMenuBar getBarraDeMenus() {
		if (BarraDeMenus == null) {
			BarraDeMenus = new JMenuBar();
			BarraDeMenus.add(getArquivo());
			BarraDeMenus.add(getBusca());
			BarraDeMenus.add(getJMenuConfig());
			BarraDeMenus.add(getAjuda());
		}
		return BarraDeMenus;
	}

	/**
	 * This method initializes Arquivo	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getArquivo() {
		if (Arquivo == null) {
			Arquivo = new JMenu();
			Arquivo.setText("Arquivo");
			Arquivo.setMnemonic(KeyEvent.VK_A);
			Arquivo.add(getNovo());
			Arquivo.addSeparator();
			Arquivo.add(getSair());
		}
		return Arquivo;
	}

	/**
	 * This method initializes Novo	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getNovo() {
		if (Novo == null) {
			Novo = new JMenu();
			Novo.setText("Novo");
			Novo.setIcon(new ImageIcon(getClass().getResource("/icones/add.gif")));
			Novo.setMnemonic(KeyEvent.VK_N);
			Novo.add(getAddUsuário());
			Novo.add(getAddItem());
			Novo.add(getAddEmpréstimo());
		}
		return Novo;
	}

	/**
	 * This method initializes Sair	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSair() {
		if (Sair == null) {
			Sair = new JMenuItem();
			Sair.setText("Sair");
			Novo.setMnemonic(KeyEvent.VK_S);
			Sair.setIcon(new ImageIcon(getClass().getResource("/icones/exit.gif")));
			Sair.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.exit(0);
				}
			});
			
		}
		return Sair;
	}

	/**
	 * This method initializes addUsuário	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAddUsuário() {
		if (addUsuário == null) {
			Action action = new Action(){
			
				public void addPropertyChangeListener(PropertyChangeListener arg0) {
				}
			
				public Object getValue(String arg0) {
					// TODO Auto-generated method stub
					return null;
					
				}
			
				public boolean isEnabled() {
					// TODO Auto-generated method stub
					return false;
					
				}
			
				public void putValue(String arg0, Object arg1) {
				}
			
				public void removePropertyChangeListener(PropertyChangeListener arg0) {
				}
			
				public void setEnabled(boolean arg0) {
				}
			
				public void actionPerformed(ActionEvent arg0) {
				}};
			action.setEnabled(false);
			addUsuário = new JMenuItem();
			addUsuário.setRolloverEnabled(true);
			addUsuário.setMnemonic(KeyEvent.VK_U);
			addUsuário.setText("Usuário");
			addUsuário.addActionListener(new java.awt.event.ActionListener() {   
				public void actionPerformed(java.awt.event.ActionEvent e) {    
					criaGUI("Usuário");					
				}
			
			});
		}
		return addUsuário;
	}

	/**
	 * This method initializes addItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAddItem() {
		if (addItem == null) {
			addItem = new JMenuItem();
			addItem.setText("Item");
			addItem.setMnemonic(KeyEvent.VK_I);
			addItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					criaGUI("Item");
				}
			});
		}
		return addItem;
	}

	/**
	 * This method initializes addEmpréstimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAddEmpréstimo() {
		if (addEmpréstimo == null) {
			addEmpréstimo = new JMenuItem();
			addEmpréstimo.setText("Empréstimo");
			addEmpréstimo.setMnemonic(KeyEvent.VK_I);
			addEmpréstimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					criaGUI("Empréstimo");
					}
			});
		}
		return addEmpréstimo;
	}

	/**
	 * This method initializes Busca	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getBusca() {
		if (Busca == null) {
			Busca = new JMenu();
			Busca.setText("Busca");
			Busca.setMnemonic(KeyEvent.VK_B);
			Busca.add(getSrcUsuário());
			Busca.add(getSrcItem());
			Busca.add(getSrcEmpréstimo());
		}
		return Busca;
	}
	/**
	 * This method initializes Ajuda	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getAjuda() {
		if (Ajuda == null) {
			Ajuda = new JMenu();
			Ajuda.setToolTipText("Ajuda");
			Ajuda.setText("Ajuda");
			Ajuda.setMnemonic(KeyEvent.VK_D);
			Ajuda.add(getAjSobre());
		}
		return Ajuda;
	}
	/**
	 * This method initializes srcUsuário	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSrcUsuário() {
		if (srcUsuário == null) {
			srcUsuário = new JMenuItem();
			srcUsuário.setText("Usuário");
			srcUsuário.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed(BuscaUsuário)"); // TODO Auto-generated Event stub actionPerformed()
					JInternalFrame frameBusUsuario = buscaUsr.getJInternalFrame();
					desktopPrincipal.add(frameBusUsuario);
					centralizador.centralizarJInteralFrame(frameBusUsuario, desktopPrincipal);
					frameBusUsuario.setVisible(true);
				}
			});
		}
		return srcUsuário;
	}
	/**
	 * This method initializes srcItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSrcItem() {
		if (srcItem == null) {
			srcItem = new JMenuItem();
			srcItem.setText("Item");
			srcItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed()"); // TODO Auto-generated Event stub actionPerformed()
					JInternalFrame frameBusItem = busItem.getJInternalFrame();
					desktopPrincipal.add(frameBusItem);
					centralizador.centralizarJInteralFrame(frameBusItem, desktopPrincipal);
					frameBusItem.setVisible(true);
					
				}
			});
		}
		return srcItem;
	}
	/**
	 * This method initializes srcEmpréstimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSrcEmpréstimo() {
		if (srcEmpréstimo == null) {
			srcEmpréstimo = new JMenuItem();
			srcEmpréstimo.setText("Empréstimo");
			srcEmpréstimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed()"); // TODO Auto-generated Event stub actionPerformed()
					JInternalFrame frameBusEmprestimo = busEmprestimo.getJInternalFrame();
					desktopPrincipal.add(frameBusEmprestimo);
					centralizador.centralizarJInteralFrame(frameBusEmprestimo, desktopPrincipal);
					frameBusEmprestimo.setVisible(true);
					
				}
			});
		}
		return srcEmpréstimo;
	}
	/**
	 * This method initializes desktopPrincipal	
	 * 	
	 * @return javax.swing.JDesktopPane	
	 */
	private JDesktopPane getDesktopPrincipal() {
		if (desktopPrincipal == null) {
			desktopPrincipal = new JDesktopPane();
			//desktopPrincipal.setDragMode(JDesktopPane.OUTLINE_DRAG_MODE);	
			desktopPrincipal.add(getJToolBar(), null);
		}
		return desktopPrincipal;
	}
	
	public void mostraGUI(){
		//Inicialização da Frame (desktopPincipal incluído)
		JFrame.setDefaultLookAndFeelDecorated(true);
		jFrame  = getJFrame();
		jFrame.setDefaultCloseOperation(0);
		
		jFrame.pack();
        jFrame.setExtendedState(JFrame.MAXIMIZED_BOTH);
    }
	
	/**
	 * This method initializes ajSobre	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAjSobre() {
		if (ajSobre == null) {
			ajSobre = new JMenuItem();
			ajSobre.setText("Sobre a Biblioteca");
			ajSobre.setIcon(new ImageIcon(getClass().getResource("/icones/sobre.gif")));
			ajSobre.setMnemonic(KeyEvent.VK_F1);
			ajSobre.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e){
					SobreGUI sobre = new SobreGUI();
					JInternalFrame sobreIntFrame = sobre.getSobreInternalFrame();
					desktopPrincipal.add(sobreIntFrame);
					centralizador.centralizarJInteralFrame(sobreIntFrame, desktopPrincipal);
					sobreIntFrame.setVisible(true);
				}
			});
		}
		return ajSobre;
	}
	/**
	 * This method initializes jToolBar	
	 * 	
	 * @return javax.swing.JToolBar	
	 */
	private JToolBar getJToolBar() {
		if (jToolBar == null) {
			jToolBar = new JToolBar();
			jToolBar.setBounds(new Rectangle(0, 0, 0, 0));
			jToolBar.add(getListaUsuariosBttn());
		}
		return jToolBar;
	}
	/**
	 * This method initializes ListaUsuariosBttn	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getListaUsuariosBttn() {
		if (ListaUsuariosBttn == null) {
			ListaUsuariosBttn = new JButton();
			ListaUsuariosBttn.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					listaUsuarios();				
				}
			});
		}
		return ListaUsuariosBttn;
	}
	/**
	 * This method initializes jMenuConfig	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getJMenuConfig() {
		if (jMenuConfig == null) {
			jMenuConfig = new JMenu();
			jMenuConfig.setText("Configurações");
			jMenuConfig.setMnemonic(KeyEvent.VK_C);
			jMenuConfig.add(getConDb2());
		}
		return jMenuConfig;
	}

	/**
	 * This method initializes conDb2	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getConDb2() {
		if (conDb2 == null) {
			conDb2 = new JMenuItem();
			conDb2.setText("Banco de Dados");
			conDb2.setIcon(new ImageIcon(getClass().getResource("/icones/server.gif")));
			conDb2.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed(Configurar BD)"); // TODO Auto-generated Event stub actionPerformed()
					BibliotecaFuncoes centralizadorLocal = new BibliotecaFuncoes();
					ConfigGUI configGui = new ConfigGUI();
					JInternalFrame frameConfig = configGui.getJInternalFrame();
					desktopPrincipal.add(frameConfig);
					centralizadorLocal.centralizarJInteralFrame(frameConfig, desktopPrincipal);
					frameConfig.setVisible(true);
					/*
					 * 
					System.out.println("actionPerformed(BuscaUsuário)"); // TODO Auto-generated Event stub actionPerformed()
					JInternalFrame frameBusUsuario = buscaUsr.getJInternalFrame();
					desktopPrincipal.add(frameBusUsuario);
					centralizador.centralizarJInteralFrame(frameBusUsuario, desktopPrincipal);
					frameBusUsuario.setVisible(true);
					 * 
					 * 
					 * */
					
				}
			});
		}
		return conDb2;
	}
/*
	public void main(String[] args) {
		BibliotecaGUI frame = new BibliotecaGUI();
		 javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
            	mostraGUI();
            }
        });
    }
*/	
	public void MostraTabelaResultados(DadosTabela dados, String titulo, String guarda, TabelaResultados[] tabela){
		if(telaDividida){
			tabela[0] = new TabelaResultados(dados, titulo, guarda, this);
			JInternalFrame resultadosInternalFrame = tabela[0].getTabelaItemInternalFrame();
			resultadosInternalFrame.setVisible(true);
			desktopPrincipal.add(resultadosInternalFrame);
			resultadosInternalFrame.setBounds(0, (desktopPrincipal.getHeight()/3)*contadorDeJanelas,
					desktopPrincipal.getWidth(), desktopPrincipal.getHeight()/3);
			
			resultadosInternalFrame.setClosable(false);
			
			incrementaContadorDeJanelas();
		}
		else{
			TabelaResultados resultados = new TabelaResultados(dados, titulo, guarda, this);
			JInternalFrame resultadosInternalFrame = resultados.getTabelaItemInternalFrame();
			
			desktopPrincipal.add(resultadosInternalFrame);
			resultadosInternalFrame.setBounds(0, 0, 
					desktopPrincipal.getWidth(), desktopPrincipal.getHeight());
			resultadosInternalFrame.setVisible(true);
		}
		}
	
	
	public void listaUsuarios() {
		TabelaResultados[] tabela = new TabelaResultados[1];
		tabela [0] = tabelaUsuario;
		String sql =
			  "SELECT CARTEIRINHA, NOME, EMAIL, TELEFONE, CIDADE FROM USUARIO"+
			" ORDER BY NOME, CARTEIRINHA, DIACADASTRO," +
			" NASCIMENTO, ESTADO, CIDADE, ENDERECO, TELEFONE, EMAIL, RG, CPF";
		MostraTabelaResultados
		(executador.BuscaComRetorno(sql), "Lista dos Usuários Cadastrados", "Usuário", tabela);
	}
	public void listaItens() {
		TabelaResultados[] tabela = new TabelaResultados[1];
		tabela [0] = tabelaItem;
		String sql = 
			"SELECT CODIGO, TITULO, AUTOR, TIPO, EMPRESTADO FROM ITEM" +
			" ORDER BY EMPRESTADO, CODIGO, TIPO, TITULO, AUTOR, IDIOMA, EDITORA";
		MostraTabelaResultados(executador.BuscaComRetorno(sql), "Lista dos Itens Cadastrados", "Item", tabela);
	}
	public void listaEmprestimos(){
		TabelaResultados[] tabela = new TabelaResultados[1];
		tabela [0] = tabelaEmprestimo;
		String sql = "SELECT * FROM EMPRESTIMO ORDER BY " +
				"EMPRESTADODIA, DEVOLVERDIA, CODIGOITEM, CARTEIRINHA, CODIGO";
		MostraTabelaResultados
		(executador.BuscaEmprestimoComRetorno(sql),
				"Lista dos Empréstimos Cadastrados",
				"Empréstimo", tabela);
	}
	
	
	public void editaGUI(String tipo, String codigo){
		try{
			if (tipo == "Usuário"){
				chamaEditaUsuario(Long.parseLong(codigo));
			}
			else{
				if (tipo == "Item"){
					chamaEditaItem(codigo);
				}
				else{
					if (tipo == "Empréstimo"){
						chamaEditaEmprestimo(Long.parseLong(codigo));
					}
				}
			}
		}catch(Exception e){
			centralizador.dialogoInfo(
					"Favor selecionar um "+tipo.toLowerCase()+" da lista!",
					"Favor selecionar");
		}
	}
	
	private void chamaEditaEmprestimo(long codigo) {
		// TODO Auto-generated method stub
		EditaEmpréstimoGUI editaEmp = new EditaEmpréstimoGUI(codigo);
		JInternalFrame EditaEmprestimo = editaEmp.getJInternalFrame();
		desktopPrincipal.add(EditaEmprestimo);
		centralizador.centralizarJInteralFrame(EditaEmprestimo, desktopPrincipal);
		EditaEmprestimo.setVisible(true);
		try{
			
		}catch(Exception e){
			
		}
	}

	private void chamaEditaItem(String codigo) {
		// TODO Auto-generated method stub
		EditaItemGUI editaItm = new EditaItemGUI(codigo);
		editaItm.setCodigoExterno(codigo);
		JInternalFrame EditaItem = editaItm.getJInternalFrame();
		desktopPrincipal.add(EditaItem);
		centralizador.centralizarJInteralFrame(EditaItem, desktopPrincipal);
		EditaItem.setVisible(true);
	}
	private void chamaEditaUsuario(long codigo) {
		// TODO Auto-generated method stub
		EditaUsuárioGUI editaUsr = new EditaUsuárioGUI(conecta.getConnection(), codigo);
		JInternalFrame EditaUsuario = editaUsr.getJInternalFrame();
		desktopPrincipal.add(EditaUsuario);
		centralizador.centralizarJInteralFrame(EditaUsuario, desktopPrincipal);
		EditaUsuario.setVisible(true);
	}
	
	public void criaGUI(String tipo){
		if (tipo == "Usuário"){
			chamaCriaUsuario();
		}
		else{
			if (tipo == "Item"){
				chamaCriaItem();
			}
			else{
				if (tipo == "Empréstimo"){
					chamaCriaEmprestimo();
				}
			}
		}
	}

	private void chamaCriaEmprestimo() {
		// TODO Auto-generated method stub
		CadastroEmpréstimoGUI cadEmprestimo = new CadastroEmpréstimoGUI(this);
		JInternalFrame frameCadEmprestimo = cadEmprestimo.getJInternalFrame();
		desktopPrincipal.add(frameCadEmprestimo);
		centralizador.centralizarJInteralFrame(frameCadEmprestimo, desktopPrincipal);
		frameCadEmprestimo.setVisible(true);		
	}
	
	public void chamaCriaEmprestimoDeItem(String Codigo) {
		// TODO Auto-generated method stub
		CadastroEmpréstimoGUI cadEmprestimo = new CadastroEmpréstimoGUI(this, Codigo);
		JInternalFrame frameCadEmprestimo = cadEmprestimo.getJInternalFrame();
		desktopPrincipal.add(frameCadEmprestimo);
		centralizador.centralizarJInteralFrame(frameCadEmprestimo, desktopPrincipal);
		frameCadEmprestimo.setVisible(true);		
	}
	
	public void chamaCriaEmprestimoDeUsuario(int Codigo) {
		// TODO Auto-generated method stub
		CadastroEmpréstimoGUI cadEmprestimo = new CadastroEmpréstimoGUI(this, Codigo);
		JInternalFrame frameCadEmprestimo = cadEmprestimo.getJInternalFrame();
		desktopPrincipal.add(frameCadEmprestimo);
		centralizador.centralizarJInteralFrame(frameCadEmprestimo, desktopPrincipal);
		frameCadEmprestimo.setVisible(true);		
	}
	
	private void chamaCriaItem() {
		// TODO Auto-generated method stub
		CadastroItemGUI cadItem = new CadastroItemGUI();
		JInternalFrame frameCadItem = cadItem.getJInternalFrame();
		desktopPrincipal.add(frameCadItem);
		centralizador.centralizarJInteralFrame(frameCadItem, desktopPrincipal);
		frameCadItem.setVisible(true);
	}
	private void chamaCriaUsuario() {
		// TODO Auto-generated method stub
		CadastroUsuárioGUI cadUsuario = new CadastroUsuárioGUI(conecta.getConnection());
		JInternalFrame frameCadUsuario = cadUsuario.getJInternalFrame();
		desktopPrincipal.add(frameCadUsuario);
		centralizador.centralizarJInteralFrame(frameCadUsuario, desktopPrincipal);
		frameCadUsuario.setVisible(true);
	}
	
	public void removeGUI(String tipo, String string){
		if (string != "-1"){
			RemoveGUI remove = new RemoveGUI(string, tipo, this);
			desktopPrincipal.add(remove.getJInternalFrame());
			centralizador.centralizarJInteralFrame(remove.getJInternalFrame(), desktopPrincipal);
			remove.getJInternalFrame().setVisible(true);
		}
		else{
			centralizador.dialogoErro("Favor selecionar "+tipo+" a ser removido.", "Seceione um "+tipo+" da lista.");
		}
		
	}

	public TabelaResultados getTabelaEmprestimo() {
		return tabelaEmprestimo;
	}

	public void visualizarDadosUsuario(long codigo) {
		if (codigo != -1){
			System.out.println("\n\n\n\nvisualizarDadosUsuario(long codigo) da BibliotecaGUI");
			ListaUsuárioGUI listaDadosUsr = new ListaUsuárioGUI(String.valueOf(codigo), this);
			desktopPrincipal.add(listaDadosUsr.getJInternalFrame());
			centralizador.centralizarJInteralFrame(listaDadosUsr.getJInternalFrame(), desktopPrincipal);
			listaDadosUsr.getJInternalFrame().setVisible(true);
		}
		else{
			centralizador.dialogoErro("Favor selecionar o Usuário a ser visualisado.", "Seceione um usuário da lista.");
		}
	}
	
	public void visualizarDadosItem(String codigo) {
		if (codigo != "-1"){
			//System.out.println("\n\n\n\nvisualizarDadosItem(long codigo) da BibliotecaGUI");
			ListaItemGUI listaDadosItm = new ListaItemGUI(codigo, this);
			desktopPrincipal.add(listaDadosItm.getJInternalFrame());
			centralizador.centralizarJInteralFrame(listaDadosItm.getJInternalFrame(), desktopPrincipal);
			listaDadosItm.getJInternalFrame().setVisible(true);
		}
	}

	public TabelaResultados getTabelaItem() {
		return tabelaItem;
	}

	public void setTabelaItem(TabelaResultados tabelaItem) {
		this.tabelaItem = tabelaItem;
	}

	public TabelaResultados getTabelaUsuario() {
		return tabelaUsuario;
	}

	public void setTabelaUsuario(TabelaResultados tabelaUsuario) {
		this.tabelaUsuario = tabelaUsuario;
	}

	public void setTabelaEmprestimo(TabelaResultados tabelaEmprestimo) {
		this.tabelaEmprestimo = tabelaEmprestimo;
	}	
}
package src;
// Falta apenas validar Campos para todas as telas

/*
 * PARA FAZER APARECER UM JInternalFrame DENTRO DO DESKTOP:
 *  - No m�todo que chama a janela, deve-se seguir a ordem:
 *  
 *  	[1] - Declara��o de uma vari�vel do tipo da classe que
 *  		cont�m o internal frame;
 *  
 *  	[2] - Declara��o de uma vari�vel (tipo JInternalFrame)
 *  		que receber� o conte�do	do frame vindo de outra
 *  		classe;
 *  
 *  	[3] - Adicionar a vari�vel do passo "2" ao desktop que
 *  		mostrar� a JInternalFrame;
 *  
 *  	[4] - dar um setVisible com valor de true para a
 *  		JInternalFrame inicializada em "2", tal m�todo
 *          deve ser chamado dentro da classe pai, e n�o da
 *          filha, pois caso contr�rio abrir� a janela n�o
 *          selecionada dentro do desktopPane.
 *             
 *  			
 *  			exemplo:
 *  				MostraJanela(){
 *  					[1] BuscaUsu�rio busca = new BuscaUsu�rio();
						[2] JInternalFrame frameBusUsuario = busca.getJInternalFrame();
						[3] desktopPrincipal.add(frameBusUsuario);
						[4] frameBusUsuario.setVisible(true);
					}
 */

/*NECESS�RIO CHAMAR OUTRAS TELAS
 *INSERINDO-AS DENTRO DO desktopPrincipal
 *como JInternalFrame 's 
*/

//Frame tutorial imports
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.beans.PropertyChangeListener;

import javax.swing.Action;
import javax.swing.BoxLayout;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JInternalFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.UIManager;


public class BibliotecaGUI{

	private JFrame jFrame = null;  //  @jve:decl-index=0:visual-constraint="138,74"
	private JPanel jContentPane = null;
	private JMenuBar BarraDeMenus = null;
	private JMenu Arquivo = null;
	private JMenu Novo = null;
	private JMenuItem Sair = null;
	private JMenuItem addUsu�rio = null;
	private JMenuItem addItem = null;
	private JMenuItem addEmpr�stimo = null;
	private JMenu Busca = null;
	private JMenu Ajuda = null;
	private JMenuItem srcUsu�rio = null;
	private JMenuItem srcItem = null;
	private JMenuItem srcEmpr�stimo = null;
	private JDesktopPane desktopPrincipal = null;
	private JMenuItem ajSobre = null;
	public BibliotecaGUI() {
	        jFrame = getJFrame();
	        jFrame.validate();
	        jFrame.setVisible(true);
	    }
	/**
	 * This method initializes jFrame	
	 * 	
	 * @return javax.swing.JFrame	
	 */
	private JFrame getJFrame() {
		if (jFrame == null) {
			jFrame = new JFrame();
			jFrame.setSize(new Dimension(800, 600));
			jFrame.setTitle("Bibloteca v1.0");
			jFrame.setJMenuBar(getBarraDeMenus());
			jFrame.setContentPane(getDesktopPrincipal());
			jFrame.setDefaultLookAndFeelDecorated(true);

			try{
				UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
			}catch (Exception e){
			}
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
			jContentPane.add(getDesktopPrincipal(), null);
		}
		return jContentPane;
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
			Arquivo.add(getNovo());
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
			Novo.add(getAddUsu�rio());
			Novo.add(getAddItem());
			Novo.add(getAddEmpr�stimo());
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
			Sair.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.exit(0);
				}
			});
			
		}
		return Sair;
	}

	/**
	 * This method initializes addUsu�rio	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAddUsu�rio() {
		if (addUsu�rio == null) {
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
			addUsu�rio = new JMenuItem();
			addUsu�rio.setRolloverEnabled(true);
			addUsu�rio.setText("Usu�rio");
			addUsu�rio.addActionListener(new java.awt.event.ActionListener() {   
				public void actionPerformed(java.awt.event.ActionEvent e) {    
					CadastroUsu�rioGUI cadUsuario = new CadastroUsu�rioGUI();
					JInternalFrame frameCadUsuario = cadUsuario.getJInternalFrame();
					desktopPrincipal.add(frameCadUsuario);
					frameCadUsuario.setVisible(true);
				}
			
			});
		}
		return addUsu�rio;
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
			addItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					CadastroItemGUI cadItem = new CadastroItemGUI();
					JInternalFrame frameCadItem = cadItem.getJInternalFrame();
					desktopPrincipal.add(frameCadItem);
					frameCadItem.setVisible(true);
				}
			});
		}
		return addItem;
	}

	/**
	 * This method initializes addEmpr�stimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAddEmpr�stimo() {
		if (addEmpr�stimo == null) {
			addEmpr�stimo = new JMenuItem();
			addEmpr�stimo.setText("Empr�stimo");
			addEmpr�stimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					CadastroEmpr�stimoGUI cadEmprestimo = new CadastroEmpr�stimoGUI();
					JInternalFrame frameCadEmprestimo = cadEmprestimo.getJInternalFrame();
					desktopPrincipal.add(frameCadEmprestimo);
					frameCadEmprestimo.setVisible(true);
					}
			});
		}
		return addEmpr�stimo;
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
			Busca.add(getSrcUsu�rio());
			Busca.add(getSrcItem());
			Busca.add(getSrcEmpr�stimo());
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
			Ajuda.add(getAjSobre());
		}
		return Ajuda;
	}
	/**
	 * This method initializes srcUsu�rio	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSrcUsu�rio() {
		if (srcUsu�rio == null) {
			srcUsu�rio = new JMenuItem();
			srcUsu�rio.setText("Usu�rio");
			srcUsu�rio.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed(BuscaUsu�rio)"); // TODO Auto-generated Event stub actionPerformed()
					BuscaUsu�rioGUI busca = new BuscaUsu�rioGUI();
					JInternalFrame frameBusUsuario = busca.getJInternalFrame();
					desktopPrincipal.add(frameBusUsuario);
					frameBusUsuario.setVisible(true);
				}
			});
		}
		return srcUsu�rio;
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
					BuscaItemGUI busItem = new BuscaItemGUI();
					JInternalFrame frameBusItem = busItem.getJInternalFrame();
					
					desktopPrincipal.add(frameBusItem);
					frameBusItem.setVisible(true);
					
				}
			});
		}
		return srcItem;
	}
	/**
	 * This method initializes srcEmpr�stimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getSrcEmpr�stimo() {
		if (srcEmpr�stimo == null) {
			srcEmpr�stimo = new JMenuItem();
			srcEmpr�stimo.setText("Empr�stimo");
			srcEmpr�stimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed()"); // TODO Auto-generated Event stub actionPerformed()
					BuscaEmpr�stimoGUI busEmprestimo = new BuscaEmpr�stimoGUI();
					
					JInternalFrame frameBusEmprestimo = busEmprestimo.getJInternalFrame();
					desktopPrincipal.add(frameBusEmprestimo);
					frameBusEmprestimo.setVisible(true);
					
				}
			});
		}
		return srcEmpr�stimo;
	}
	/**
	 * This method initializes desktopPrincipal	
	 * 	
	 * @return javax.swing.JDesktopPane	
	 */
	private JDesktopPane getDesktopPrincipal() {
		if (desktopPrincipal == null) {
			desktopPrincipal = new JDesktopPane();
	        desktopPrincipal.setDragMode(JDesktopPane.OUTLINE_DRAG_MODE);
		}
		return desktopPrincipal;
	}
	
	public void mostraGUI(){
		//Inicializa��o da Frame (desktopPincipal inclu�do)
		JFrame.setDefaultLookAndFeelDecorated(true);
		jFrame  = getJFrame();
		jFrame.setDefaultCloseOperation(0);
		
		jFrame.pack();
        jFrame.setVisible(true);   
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
			ajSobre.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e){
					Sobre sobre = new Sobre();
					JInternalFrame sobreIntFrame = sobre.getSobreInternalFrame();
					desktopPrincipal.add(sobreIntFrame);
					sobreIntFrame.setVisible(true);
				}
			});
		}
		return ajSobre;
	}
	public void main(String[] args) {
        //Schedule a job for the event-dispatching thread:
        //creating and showing this application's GUI.
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
            	mostraGUI();
            }
        });
    }

}


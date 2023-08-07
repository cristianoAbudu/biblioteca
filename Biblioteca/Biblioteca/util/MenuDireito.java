package util;


import java.awt.Dimension;
import java.awt.event.KeyEvent;

import javax.swing.ImageIcon;
import javax.swing.JMenu;
import javax.swing.JMenuItem;
import javax.swing.JPopupMenu;

import bd.ExecutadorSQL;


import controladores.ControladorEmprestimo;

import GUI.BibliotecaGUI;

public class MenuDireito {
	private JPopupMenu clickDireitoItem = null;  //  @jve:decl-index=0:visual-constraint="169,22"
	private JMenuItem alterar = null;
	private JMenuItem remover = null;
	private JPopupMenu clickDireitoUsuario = null;  //  @jve:decl-index=0:visual-constraint="33,26"
	private JMenuItem alterarUsuario = null;
	private JMenuItem removerUsuario = null;
	private JPopupMenu clickDireitoEmprestimo = null;  //  @jve:decl-index=0:visual-constraint="276,31"
	private JMenuItem alterarEmprestimo = null;
	private JMenuItem removerEmprestimo = null;
	
	private ExecutadorSQL executador = new ExecutadorSQL();  //  @jve:decl-index=0:
	private BibliotecaGUI chamadoPor;
	private String tratando;
	private JPopupMenu retorno;
	private JMenuItem criarItem = null;
	private JMenuItem emprestarItem = null;
	private JMenuItem criarUsuario = null;
	private JMenuItem emprestarUsuario = null;
	private JMenuItem criarEmprestimo = null;
	private String codigoClickado;
	private TabelaResultados origem;
	private JMenuItem atualizarTabelaItem = null;
	private JMenuItem dadosUsuario = null;
	private JMenuItem atualizarTabelaUsuario = null;
	private JMenuItem atualizarEmprestimo = null;
	private JMenuItem dadosItem = null;
	private JMenu itemExportar = null;
	private JMenuItem itemExportarTudo = null;
	private JMenuItem itemExportarSelecionado = null;
	MenuDireito(TabelaResultados Origem){
		origem = Origem;
		tratando = origem.getGuarda();
		chamadoPor = origem.getChamadoPor();
		if (tratando == "Item"){
			popUpItem();
		}
		if (tratando == "Usuário"){
			popUpUsuario();
		}
		if (tratando == "Empréstimo"){
			popUpEmprestimo();
		}
	}
	
	public JPopupMenu getRetorno(){
		return retorno;
	}

	private void popUpEmprestimo() {
		retorno = getClickDireitoEmprestimo();
	}

	private void popUpUsuario() {
		retorno = getClickDireitoUsuario();
	}

	private void popUpItem() {
		retorno = getClickDireitoItem();		
	}
	public JPopupMenu clickDireito(){
		return clickDireitoItem;
	}

	/**
	 * This method initializes clickDireito	
	 * 	
	 * @return javax.swing.JPopupMenu	
	 */
	private JPopupMenu getClickDireitoItem() {
		if (clickDireitoItem == null) {
			clickDireitoItem = new JPopupMenu();
			clickDireitoItem.setSize(new Dimension(120, 100));
			clickDireitoItem.add(getAtualizarTabelaItem());
			clickDireitoItem.add(getAlterar());
			clickDireitoItem.add(getRemover());
			clickDireitoItem.add(getCriarItem());
			clickDireitoItem.add(getEmprestarItem());
			clickDireitoItem.add(getDadosItem());
			clickDireitoItem.add(getItemExportar());
		}
		return clickDireitoItem;
	}

	/**
	 * This method initializes alterar	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAlterar() {
		if (alterar == null) {
			alterar = new JMenuItem();
			alterar.setText("Alterar...");
			alterar.setIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			alterar.setMnemonic(KeyEvent.VK_UNDEFINED);
			alterar.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Alterar Item");
					// TODO Auto-generated Event stub actionPerformed()
					codigoClickado = origem.getCodigo();
					if (!codigoClickado.equals("-1")){
						chamadoPor.editaGUI(tratando, codigoClickado);
					}
					else
					{
						BibliotecaFuncoes err = new BibliotecaFuncoes();
						err.dialogoErro("Favor selecionar um item da lista!", "Nenhum item Selecionado");
					}
					
				}
			});
		}
		return alterar;
	}

	/**
	 * This method initializes remover	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getRemover() {
		if (remover == null) {
			remover = new JMenuItem();
			remover.setText("Remover...");
			remover.setIcon(new ImageIcon(getClass().getResource("/icones/delete.gif")));
			remover.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Remover Item");
					codigoClickado = origem.getCodigo();
					chamadoPor.removeGUI(tratando, codigoClickado);
				}
			});
		}
		return remover;
	}

	/**
	 * This method initializes clickDireitoUsuario	
	 * 	
	 * @return javax.swing.JPopupMenu	
	 */
	private JPopupMenu getClickDireitoUsuario() {
		if (clickDireitoUsuario == null) {
			clickDireitoUsuario = new JPopupMenu();
			clickDireitoUsuario.add(getAtualizarTabelaUsuario());
			clickDireitoUsuario.setSize(new Dimension(120, 100));
			clickDireitoUsuario.add(getAlterarUsuario());
			clickDireitoUsuario.add(getRemoverUsuario());
			clickDireitoUsuario.add(getCriarUsuario());
			//clickDireitoUsuario.add(getEmprestarItem());
			clickDireitoUsuario.add(getEmprestarUsuario());
			clickDireitoUsuario.add(getDadosUsuario());
		}
		return clickDireitoUsuario;
	}

	/**
	 * This method initializes alterarUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAlterarUsuario() {
		if (alterarUsuario == null) {
			alterarUsuario = new JMenuItem();
			alterarUsuario.setText("Alterar...");
			alterarUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			alterarUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Alterar Usuário");
					codigoClickado = origem.getCodigo();
					chamadoPor.editaGUI("Usuário", codigoClickado);
					// TODO Auto-generated Event stub actionPerformed()
				}
			});
		}
		return alterarUsuario;
	}

	/**
	 * This method initializes removerUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getRemoverUsuario() {
		if (removerUsuario == null) {
			removerUsuario = new JMenuItem();
			removerUsuario.setText("Remover...");
			removerUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/delete.gif")));
			removerUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("RemoverUsuário");
					codigoClickado = origem.getCodigo();
					chamadoPor.removeGUI(tratando, codigoClickado);
				}
			});
		}
		return removerUsuario;
	}

	/**
	 * This method initializes clickDireitoEmprestimo	
	 * 	
	 * @return javax.swing.JPopupMenu	
	 */
	private JPopupMenu getClickDireitoEmprestimo() {
		if (clickDireitoEmprestimo == null) {
			clickDireitoEmprestimo = new JPopupMenu();
			clickDireitoEmprestimo.add(getAtualizarEmprestimo());
			clickDireitoEmprestimo.setSize(new Dimension(120, 100));
			clickDireitoEmprestimo.add(getAlterarEmprestimo());
			clickDireitoEmprestimo.add(getRemoverEmprestimo());
			clickDireitoEmprestimo.add(getCriarEmprestimo());
		}
		return clickDireitoEmprestimo;
	}

	/**
	 * This method initializes alterarEmprestimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAlterarEmprestimo() {
		if (alterarEmprestimo == null) {
			alterarEmprestimo = new JMenuItem();
			alterarEmprestimo.setText("Alterar...");
			alterarEmprestimo.setIcon(new ImageIcon(getClass().getResource("/icones/edit.gif")));
			alterarEmprestimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Altera Emprestimo");
					codigoClickado = origem.getCodigo();
					chamadoPor.editaGUI("Empréstimo", codigoClickado);
				}
			});
		}
		return alterarEmprestimo;
	}

	/**
	 * This method initializes removerEmprestimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getRemoverEmprestimo() {
		if (removerEmprestimo == null) {
			removerEmprestimo = new JMenuItem();
			removerEmprestimo.setText("Remover...");
			removerEmprestimo.setIcon(new ImageIcon(getClass().getResource("/icones/delete.gif")));
			removerEmprestimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Remover Empréstimo");
					codigoClickado = origem.getCodigo();
					chamadoPor.removeGUI(tratando, codigoClickado);
				}
			});
		}
		return removerEmprestimo;
	}

	/**
	 * This method initializes criarItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getCriarItem() {
		if (criarItem == null) {
			criarItem = new JMenuItem();
			criarItem.setText("Criar...");
			criarItem.setIcon(new ImageIcon(getClass().getResource("/icones/add.gif")));
			criarItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Criar Item do PopUp");
					chamadoPor.criaGUI(tratando);
					// TODO Auto-generated Event stub actionPerformed()
				}
			});
		}
		return criarItem;
	}

	/**
	 * This method initializes emprestarItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getEmprestarItem() {
		if (emprestarItem == null) {
			emprestarItem = new JMenuItem();
			emprestarItem.setText("Emprestar...");
			emprestarItem.setIcon(new ImageIcon(getClass().getResource("/icones/empresta.gif")));
			emprestarItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Criar Empréstimo do PopUp");
					codigoClickado = origem.getCodigo();
					if (codigoClickado != "-1"){
						chamadoPor.chamaCriaEmprestimoDeItem(codigoClickado);
					}
					else
					{
						chamadoPor.criaGUI("Empréstimo");
					}
				}
			});
		}
		return emprestarItem;
	}

	/**
	 * This method initializes criarUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getCriarUsuario() {
		if (criarUsuario == null) {
			criarUsuario = new JMenuItem();
			criarUsuario.setText("Criar...");
			criarUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/add.gif")));
			criarUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("actionPerformed()");
					chamadoPor.criaGUI(tratando);
					// TODO Auto-generated Event stub actionPerformed()
				}
			});
		}
		return criarUsuario;
	}

	/**
	 * This method initializes emprestarUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getEmprestarUsuario() {
		if (emprestarUsuario == null) {
			emprestarUsuario = new JMenuItem();
			emprestarUsuario.setText("Emprestar...");
			emprestarUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/empresta.gif")));
			emprestarUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Criar Empréstimo do PopUp");
					codigoClickado = origem.getCodigo();
					if (codigoClickado != "-1"){
						chamadoPor.chamaCriaEmprestimoDeUsuario(Integer.parseInt(codigoClickado));
					}
					else{
						chamadoPor.criaGUI("Empréstimo");
					}
				}
			});
		}
		return emprestarUsuario;
	}

	/**
	 * This method initializes criarEmprestimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getCriarEmprestimo() {
		if (criarEmprestimo == null) {
			criarEmprestimo = new JMenuItem();
			criarEmprestimo.setText("Criar...");
			criarEmprestimo.setIcon(new ImageIcon(getClass().getResource("/icones/add.gif")));
			criarEmprestimo.setMnemonic(KeyEvent.VK_UNDEFINED);
			criarEmprestimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Criar Empréstimo do PopUp");
					chamadoPor.criaGUI("Empréstimo");
				}
			});
		}
		return criarEmprestimo;
	}

	/**
	 * This method initializes atualizarTabelaItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAtualizarTabelaItem() {
		if (atualizarTabelaItem == null) {
			atualizarTabelaItem = new JMenuItem();
			atualizarTabelaItem.setText("Atualizar Dados");
			atualizarTabelaItem.setIcon(new ImageIcon(getClass().getResource("/icones/update.gif")));
			atualizarTabelaItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Atualizar()"); // TODO Auto-generated Event stub actionPerformed()
					origem.atualizar();
				}
			});
		}
		return atualizarTabelaItem;
	}

	/**
	 * This method initializes dadosUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getDadosUsuario() {
		if (dadosUsuario == null) {
			dadosUsuario = new JMenuItem();
			dadosUsuario.setText("Visualizar Dados");
			dadosUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/seedata.gif")));
			dadosUsuario.setMnemonic(KeyEvent.VK_UNDEFINED);
			dadosUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("VisualizarDados()");
					codigoClickado = origem.getCodigo();
					chamadoPor.visualizarDadosUsuario(Long.parseLong(codigoClickado));
					// TODO Auto-generated Event stub actionPerformed()
				}
			});
		}
		return dadosUsuario;
	}

	/**
	 * This method initializes atualizarTabelaUsuario	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAtualizarTabelaUsuario() {
		if (atualizarTabelaUsuario == null) {
			atualizarTabelaUsuario = new JMenuItem();
			atualizarTabelaUsuario.setIcon(new ImageIcon(getClass().getResource("/icones/update.gif")));
			atualizarTabelaUsuario.setText("Atualizar Dados");
			atualizarTabelaUsuario.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Atualizar()"); // TODO Auto-generated Event stub actionPerformed()
					origem.atualizar();
				}
			});
		}
		return atualizarTabelaUsuario;
	}

	/**
	 * This method initializes atualizarEmprestimo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getAtualizarEmprestimo() {
		if (atualizarEmprestimo == null) {
			atualizarEmprestimo = new JMenuItem();
			atualizarEmprestimo.setText("Atualizar Dados");
			atualizarEmprestimo.setIcon(new ImageIcon(getClass().getResource("/icones/update.gif")));
			atualizarEmprestimo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("Atualizar()"); // TODO Auto-generated Event stub actionPerformed()
					origem.atualizar();
				}
			});
		}
		return atualizarEmprestimo;
	}

	/**
	 * This method initializes dadosItem	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getDadosItem() {
		if (dadosItem == null) {
			dadosItem = new JMenuItem();
			dadosItem.setText("Visualizar Dados...");
			dadosItem.setIcon(new ImageIcon(getClass().getResource("/icones/seedata.gif")));
			dadosItem.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.out.println("visualizarDados()");
					codigoClickado = origem.getCodigo();
					if (!codigoClickado.equals("-1")){
						chamadoPor.visualizarDadosItem(codigoClickado);
					}
					else
					{
						BibliotecaFuncoes err = new BibliotecaFuncoes();
						err.dialogoErro("Favor selecionar um item da lista!", "Nenhum item Selecionado");
					}
				}
			});
		}
		return dadosItem;
	}

	/**
	 * This method initializes itemExportar	
	 * 	
	 * @return javax.swing.JMenu	
	 */
	private JMenu getItemExportar() {
		if (itemExportar == null) {
			itemExportar = new JMenu();
			itemExportar.setText("Criar Etiqueta...");
			itemExportar.setIcon(new ImageIcon(getClass().getResource("/icones/etiqueta.gif")));
			itemExportar.add(getItemExportarTudo());
			itemExportar.add(getItemExportarSelecionado());
		}
		return itemExportar;
	}

	/**
	 * This method initializes itemExportarTudo	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getItemExportarTudo() {
		if (itemExportarTudo == null) {
			itemExportarTudo = new JMenuItem();
			itemExportarTudo.setText("Todos");
			itemExportarTudo.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					ExportaItem exportador = new ExportaItem();
					exportador.exportaTudo(origem.getTabelaItemInternalFrame(), origem.getModelo());
				}
			});
		}
		return itemExportarTudo;
	}

	/**
	 * This method initializes itemExportarSelecionado	
	 * 	
	 * @return javax.swing.JMenuItem	
	 */
	private JMenuItem getItemExportarSelecionado() {
		if (itemExportarSelecionado == null) {
			itemExportarSelecionado = new JMenuItem();
			itemExportarSelecionado.setText("Selecionado");
			itemExportarSelecionado.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					codigoClickado = origem.getCodigo();
						if (!codigoClickado.equals("-1")){
						ExportaItem exportador = new ExportaItem();
						ControladorEmprestimo controladorEmprestimo = new ControladorEmprestimo();
						exportador.exporta(
								origem.getTabelaItemInternalFrame(),
								controladorEmprestimo.PreencheItem(codigoClickado)
								);
						}
						else
						{
							BibliotecaFuncoes err = new BibliotecaFuncoes();
							err.dialogoErro("Favor selecionar um item da lista!", "Nenhum item Selecionado");
						}
				}
			});
		}
		return itemExportarSelecionado;
	}
}

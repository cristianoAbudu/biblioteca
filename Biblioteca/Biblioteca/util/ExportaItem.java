package util;

import java.io.File;

import javax.swing.JFileChooser;
import javax.swing.JInternalFrame;

import bd.entidades.Item;


import controladores.ControladorEmprestimo;


public class ExportaItem {
	public void exporta(JInternalFrame frame, Item item){
		/*
		 * Se necessário, sobrecarregar a função para parâmetros de Usuário e Empréstimo
		 * 
		*/		
		exportaString(saveDialog(frame).getSelectedFile(), item.exportaItem());
	}

	
	public void exportaTudo(JInternalFrame frame, SimpleTableModel dados){
		int numLin = dados.getLinhas().size();
		ControladorEmprestimo controlador = new ControladorEmprestimo();
		String export = "";
		for (int i=0; i<numLin; i++){
			export += controlador.PreencheItem(dados.getValueAt(i, 0).toString()).exportaItem();
		}
		//System.out.println(export);
		exportaString(saveDialog(frame).getSelectedFile(), export);
	}
	
	private JFileChooser saveDialog(JInternalFrame frame){
		JFileChooser jFileChooser = new JFileChooser();
		jFileChooser.setDialogTitle("DEVE ser exportado com extensão '.txt' !!!!");
		jFileChooser.showSaveDialog(frame);
		jFileChooser.setFileSelectionMode(1);
		jFileChooser.addChoosableFileFilter(new ImageFilter());
		return jFileChooser;
	}
	
	private void exportaString(File f, String s){
		Serializador sç = new Serializador(f);
		sç.gravar(s);
	}


}

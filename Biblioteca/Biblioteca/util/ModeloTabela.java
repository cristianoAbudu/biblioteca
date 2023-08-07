package util;
import java.util.Vector;

import javax.swing.table.AbstractTableModel;

import bd.DadosTabela;


public class ModeloTabela extends AbstractTableModel{
	private Vector linhas = null;
	private String[] colunas = null;
	
	public int getColumnCount() {return getColunas().length;};
	public int getRowCount() {return getLinhas().size();};
	public Object getValueAt(int rowIndex, int columnIndex) {
		// Obtem a linha, que é uma String []
		String [] linha = (String [])getLinhas().get(rowIndex);
		// Retorna o objeto que esta na coluna
		return linha[columnIndex];
	}
	
	public String[] getColunas() {
		return colunas;
	}
	public void setColunas(String[] colunas) {
		this.colunas = colunas;
	}
	public Vector getLinhas() {
		return linhas;
	}
	public void setLinhas(Vector linhas) {
		this.linhas = linhas;
	}
	public void Atualizar(){
		
	}
	public ModeloTabela(DadosTabela dados){
		linhas  = dados.getLinhas();
		colunas = dados.getCabecalho();
	}
	
}

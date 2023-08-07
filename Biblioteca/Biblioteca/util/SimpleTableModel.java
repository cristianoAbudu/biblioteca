package util;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.swing.table.AbstractTableModel;


/*
 * Created on 25/05/2004
 *
 * To change the template for this generated file go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */

/**
 * <br>Créditos  : Bruno R. Lima
 * <br>Construção: 25/05/2004
 * <p>
 * Classe que extende a AbstractTableModel.
 * Faz uma implementação do modelo de tabela para uma JTable
 * </p>
 * @author Bruno R. Lima
 */
public class SimpleTableModel extends AbstractTableModel{
	
	private BibliotecaFuncoes formatador = new BibliotecaFuncoes();
	private ArrayList linhas = null;
	private String[] colunas = null;
	private boolean [] colsEdicao;
	
	/**
	 * Contrutor para a classe, recebendo os dados a serem exibidos
	 * e as colunas que devem ser criadas.
	 * @param dados
	 * @param colunas
	 */
	public SimpleTableModel(Vector dados, String[] colunas, boolean[]  edicao){
		BibliotecaFuncoes formatadora = new BibliotecaFuncoes();
		for (int i=0; i<colunas.length; i++)
		{
			//System.out.println("\n\n\n\n\n\n"+colunas[i]+"\n\n\n\n\n\n");
			//colunas[i] = colunas[i].substring(0, 1) + colunas[i].substring(1).toLowerCase();
			colunas[i] = formatadora.formataNomeColuna(colunas[i].toString());
		}		
		ArrayList Dados = new ArrayList(dados);
		setLinhas(Dados);
		setColunas(colunas);
		//System.out.println("\nSIMPLE TABLE MODEL\n");
		//System.out.println("Numero de Colunas: "+getColunas().length);
		/*
		for (int i=0; i<colunas.length; i++){
			System.out.println(i+"o Coluna:"+colunas[i]);
		}*/
		colsEdicao = edicao;		
	}

	/**
	 * Retorna o numero de colunas no modelo
	 * @see javax.swing.table.TableModel#getColumnCount()
	 */
	public int getColumnCount() {
		//System.out.println("\n\n\ngetColumnCount()\nNumero de Colunas:"+getColunas().length);
		return getColunas().length;
	}

	/**
	 * Retorna o numero de linhas existentes no modelo
	 * @see javax.swing.table.TableModel#getRowCount()
	 */
	public int getRowCount() {
		//System.out.println("\n\n\ngetRowCount()\nNumero de Linhas:"+getLinhas().size());
		return getLinhas().size();
	}

	/**
	 * Obtem o valor na linha e coluna
	 * @see javax.swing.table.TableModel#getValueAt(int, int)
	 */
	public Object getValueAt(int rowIndex, int columnIndex) {
		// Obtem a linha, que é uma String []
		//System.out.println("\n\nMODEL\nLINHA: "+rowIndex+"\n");
		//System.out.println("COLUNA: "+columnIndex+"\n\n");
		//System.out.println(linhas.get(0));
		
		// Retorna o objeto que esta na coluna
		
		
		StringTokenizer s = new StringTokenizer(linhas.get(rowIndex).toString(), ",");
		int i;
		for (i=0; i<columnIndex; i++){
			s.nextToken();
		}
		String Fcodigo = s.nextToken();
		String codigo;
		if (i==0){
			codigo = Fcodigo.substring(1);
		}
		else{
			codigo = Fcodigo.substring(0);
		}
		//char c = ',';
		removeChar(codigo, ']');
		String noVirgula = new String();
		if (codigo.indexOf(']') != -1){
			for (int k = 0; k<codigo.length()-1; k++){
				noVirgula += codigo.charAt(k);
			}
			codigo = noVirgula;
		}
		//System.out.println("\n\n\nCÈLULA:"+codigo+" "+noVirgula+" "+codigo.length());
		//codigo = noVirgula;
		//String codigo = linhas[rowIndex].get(columnIndex).toString();
		return codigo.replace('€', ',');
	}	
	public String removeChar(String s, char c) {

		   String r = "";

		   for (int i = 0; i < (s.length()-3); i ++) {
		      if (s.charAt(i) != c) r += s.charAt(i);
		   }

		   return r;
	}

	public String[] getColunas() {return colunas;}
	public ArrayList getLinhas() {return linhas;}
	public void setColunas(String[] colunas2) {
		colunas = colunas2;
		for (int i=0; i<colunas.length; i++){
			colunas[i] = formatador.formataNomeColuna(colunas[i]);
		}
	}
	public void setLinhas(ArrayList list) {linhas = list;}
	
	/**
	 * Seta o valor na linha e coluna
	 * @see javax.swing.table.TableModel#setValueAt(java.lang.Object, int, int)
	 */
	public void setValueAt(Object value, int row, int col){
		// Obtem a linha, que é uma String []
		String [] linha = (String [])getLinhas().get(row);
		// Altera o conteudo no indice da coluna passado
		linha[col] = (String)value;
		// dispara o evento de celula alterada
		fireTableDataChanged();
		/*fireTableCellUpdated(row,col);*/
	}
	/**
	 * Retorna se a celula pode ser editada
	 * @see javax.swing.table.TableModel#isCellEditable(int, int)
	 */
	public boolean isCellEditable(int row, int col){
		return false;
		      /*colsEdicao[col];*/
	}
	
	/**
	 * Adiciona o array na linha
	 */
	public void addRow( String [] dadosLinha){
		getLinhas().add(dadosLinha);
		// Informa a jtable de que houve linhas incluidas no modelo
		// COmo adicionamos no final, pegamos o tamanho total do modelo
		// menos 1 para obter a linha incluida.
		int linha = getLinhas().size()-1;
		fireTableRowsInserted(linha,linha);
		return;
	}
	
	/**
	 * Remove a linha pelo indice informado
	 * @param row
	 */
	public void removeRow(int row){
		getLinhas().remove(0);
		// informa a jtable que houve dados deletados passando a 
		// linha reovida
		fireTableRowsDeleted(row,row);
	}
	
	/**
	 * Remove a linha pelo valor da coluna informada
	 * @param val
	 * @param col
	 * @return
	 */
	public boolean removeRow(String val, int col){
		// obtem o iterator
		Iterator i = getLinhas().iterator();
		int linha = 0;
		// Faz um looping em cima das linhas
		while(i.hasNext()){
			// Obtem as colunas da linha atual
			String[] linhaCorrente = (String[])i.next();
			linha++;
			// compara o conteudo String da linha atual na coluna desejada
			// com o valor informado
			if( linhaCorrente[col].equals(val) ){
				getLinhas().remove(linha);
				// informa a jtable que houve dados deletados passando a 
				// linha removida
				fireTableRowsDeleted(linha,linha);
				return true;				
			}
		}
		// Nao encontrou nada
		return false;
	}
	
	/**
	 * Retorna o nome da coluna.
	 * @see javax.swing.table.TableModel#getColumnName(int)
	 */
	public String getColumnName(int col){
		return getColunas()[col];
	}
	public String[] vectorToString(Vector linhas){
		linhas.toString();
		StringTokenizer s = new StringTokenizer(linhas.toString(), ",");
		
		String[] criteria = new String[linhas.size()];
		linhas.toArray(criteria);
		return criteria;
	}
	/*
	public String[] arrayToString(ArrayList array){
		
		//StringTokenizer s = new StringTokenizer(array.toString(), ",");
		//String[] criteria = new String[array.size()];
		//array.toArray(criteria);
		//users.toArray(new User[users.size()]);
		return (String[]) array.toArray(new String[array.size()]);
	}
	*/
}

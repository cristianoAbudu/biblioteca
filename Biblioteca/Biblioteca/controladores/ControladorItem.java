package controladores;

import javax.swing.JComboBox;

import bases.BaseItem;
import bd.DadosTabela;
import bd.ExecutadorSQL;
import bd.entidades.Item;

public class ControladorItem {
	
	private BaseItem base = new BaseItem();
	private ExecutadorSQL executador = new ExecutadorSQL();
	//private TabelaItem tabelaItem = new TabelaItem();
	
	public static void Adicionar(String codigo,
					String tipo,
					String titulo,
					String autor,
					String idioma,
					String anoEdicao,
					String editora){
		Item item = new Item();	
		item.setCodigo(codigo);			System.out.println("\nCodigo:"+codigo);
		item.setTipo(tipo);				System.out.println("\nTipo:"+tipo);
		item.setTitulo(titulo);			System.out.println("\nTitulo:"+titulo);
		item.setAutor(autor);			System.out.println("\nAutor:"+autor);
		item.setIdioma(idioma);			System.out.println("\nIdioma:"+idioma);
		item.setEditora(editora);		System.out.println("\nEditora:"+editora);
		item.setAno(anoEdicao);
		BaseItem add = new BaseItem();	
		add.adicionarItem(item);		
	}
	
	public DadosTabela BuscarNumero(int tipo, int codigo){
		System.out.println("Busca item por numero \n Numero: "+codigo);
		DadosTabela dados = base.BuscaItemNumero(AchaTipo(tipo), codigo);
		return dados;
	}

	public  DadosTabela BuscarNome(int tipo, int campo, String texto){
		if (tipo == 0){
			//Busca em qualquer tipo
			return base.BuscaIntemNome("*", AchaCampo(campo), texto);
		}
		return base.BuscaIntemNome(AchaTipo(tipo), AchaCampo(campo), texto);
	}
	
	public int nTipos(){
		int nTipos = base.getNTipos();
		return nTipos;
	}

	public JComboBox getTiposCombo(){
		/*Método usado para criação de itens, que devem
		* obrigatóriamente possuir um tipo fixo 
		*/
		String[] NomesTipos = base.getStringTipos();
		JComboBox tipos= new JComboBox(NomesTipos);
		return tipos;
	}
	
	public JComboBox getTiposComboSrc(){
		/*Método usado para busca, onde pode-se
		/*optar por busca independente de tipo
		*/
		String[] NomesTipos = base.getStringTipos();
		String[] NomesTipoCompleta = new String[NomesTipos.length+1];
		NomesTipoCompleta[0] = "Qualquer";
		for (int i=1; i<NomesTipoCompleta.length; i++)
		{
			NomesTipoCompleta[i] = NomesTipos [i-1];
		}
		JComboBox tipos= new JComboBox(NomesTipoCompleta);
		return tipos;
	}
	
	public String AchaTipo(int tipo){
		String[] tipos = base.getStringTipos();
		String nome = tipos[tipo-1];
		//transforma número em String do tipo
		System.out.println("BUSCA ITEM TIPO "+nome);
		return nome;
	}
	
	public String AchaCampo(int campo){
		String campoString = null;
		switch (campo){
		case 0	:   campoString="*"			;				break;
		case 1 	:	campoString="TITULO"	;				break;
		case 2	:	campoString="EDITORA"	;				break;
		case 3	:	campoString="AUTOR"		;				break;
		default :	campoString="CODIGO"	;				break;
		}
		return campoString;
		//transforma número em String do campo
	}

	public  void Atualizar(String codigo, String tipo, String titulo, String autor, String idioma, String ano, String editora) {
		// TODO Auto-generated method stub
		Item item = new Item();
		item.setAutor(autor);
		item.setCodigo(codigo);
		item.setEditora(editora);
		item.setEmprestado(0);
		item.setIdioma(idioma);
		item.setTipo(tipo);
		item.setTitulo(titulo);
		item.setAno(ano);
		base.editar(item);
	}
}
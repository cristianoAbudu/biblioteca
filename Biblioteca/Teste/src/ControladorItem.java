package src;
import javax.swing.JComboBox;

public class ControladorItem {
	
	private BaseItem base = new BaseItem();
	
	static void Adicionar(String tipo,
					String titulo,
					String autor,
					String idioma,
					String anoEdicao,
					String editora){
		Item item = new Item();		
		item.setTipo(tipo);				System.out.println("\nTipo:"+tipo);
		item.setTitulo(titulo);			System.out.println("\nTitulo:"+titulo);
		item.setAutor(autor);			System.out.println("\nAutor:"+autor);
		item.setIdioma(idioma);			System.out.println("\nIdioma:"+idioma);
		item.setEditora(editora);		System.out.println("\nEditora:"+editora);
		BaseItem add = new BaseItem();	
		add.adicionarItem(item);		
	}
	
	public  void BuscarNome(int tipo, int campo, String texto){
		BaseItem.BuscaIntemNome(AchaTipo(tipo), campo, texto);
	}
	
	public void BuscarNumero(int tipo, int codigo){
		/*BancoItem.BuscaNumero()*/
		System.out.println("Busca item por numero \n Numero: "+codigo);
		base.BuscaItemNumero(AchaTipo(tipo), codigo);
	}
	
	public JComboBox getTiposCombo(){
		String[] NomesTipos = base.getStringTipos();
		JComboBox tipos= new JComboBox(NomesTipos);
		return tipos;
	}
	
	public int nTipos(){
		int nTipos = base.getNTipos();
		return nTipos;
	}

	public String AchaTipo(int tipo){
		String[] tipos = base.getStringTipos();
		String nome = tipos[tipo];
		//transforma número em String do tipo
		return nome;
	}
}
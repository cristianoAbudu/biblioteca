package src;

public class BaseItem {
	
	private Item item;
	private int nTipos=4;
	private String[] StringTipos = new String[nTipos];
	private static int topocodigo; 
		
	public BaseItem(){/* inicializa topocodigo com valor "topo" do banco*/;
		/*topocodigo = BUSCA_ÚLTIMO_CÓDIGO_NO_BD();*/
		System.out.println("Construtor da BaseItem");
		pegaTipos(StringTipos);//pegar tipos do BD
	}
	
	public static void BuscaIntemNome(String tipo, int campo, String texto){
		System.out.println("BuscaItem\n tipo:"+tipo+
								"campo:"+campo+"texto:"+
								texto);
		//implementar função que busca no BD
	}
	
	public void BuscaItemNumero(String tipo, int codigo){
		System.out.println("BuscaItem\n codigo:"+codigo+"tipo:"+tipo);
		//implementar função que busca no BD
	}
	
	public void adicionarItem(Item item){
		System.out.println("Novo item adicionado ao banco de dados.");
		//implementar função que adiciona ao BD
	}

	public static int getTopocodigo() {
		return topocodigo;
	}

	public int getNTipos() {
		return nTipos;
	}
	
	public static int getTopoCodigo(){
		System.out.println("Pega código do topo");
		return topocodigo;	
	}
	
	public void pegaTipos(String vet[]){
		vet[0]="Livro";
		vet[1]="Apostila";
		vet[2]="Mídia";
		vet[3]="Outros";
		//Definição dos tipos usados
	}

	public String[] getStringTipos() {
		return StringTipos;
	}
	
}

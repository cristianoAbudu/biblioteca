package src;

public class BaseItem {
	
	private Item item;
	private int nTipos=4;
	private String[] StringTipos = new String[nTipos];
	private static int topocodigo; 
		
	public BaseItem(){/* inicializa topocodigo com valor "topo" do banco*/;
		/*topocodigo = BUSCA_�LTIMO_C�DIGO_NO_BD();*/
		System.out.println("Construtor da BaseItem");
		pegaTipos(StringTipos);//pegar tipos do BD
	}
	
	public static void BuscaIntemNome(String tipo, int campo, String texto){
		System.out.println("BuscaItem\n tipo:"+tipo+
								"campo:"+campo+"texto:"+
								texto);
		//implementar fun��o que busca no BD
	}
	
	public void BuscaItemNumero(String tipo, int codigo){
		System.out.println("BuscaItem\n codigo:"+codigo+"tipo:"+tipo);
		//implementar fun��o que busca no BD
	}
	
	public void adicionarItem(Item item){
		System.out.println("Novo item adicionado ao banco de dados.");
		//implementar fun��o que adiciona ao BD
	}

	public static int getTopocodigo() {
		return topocodigo;
	}

	public int getNTipos() {
		return nTipos;
	}
	
	public static int getTopoCodigo(){
		System.out.println("Pega c�digo do topo");
		return topocodigo;	
	}
	
	public void pegaTipos(String vet[]){
		vet[0]="Livro";
		vet[1]="Apostila";
		vet[2]="M�dia";
		vet[3]="Outros";
		//Defini��o dos tipos usados
	}

	public String[] getStringTipos() {
		return StringTipos;
	}
	
}

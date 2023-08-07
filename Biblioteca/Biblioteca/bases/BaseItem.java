package bases;
import bd.DadosTabela;
import bd.ExecutadorSQL;
import bd.entidades.Item;
import util.BibliotecaFuncoes;

public class BaseItem {
	private int nTipos=4;
	private String[] StringTipos = new String[nTipos];
	private ExecutadorSQL executa = new ExecutadorSQL();
	private BibliotecaFuncoes dialogos = new BibliotecaFuncoes();
		
	public BaseItem(){
		System.out.println("Construtor da BaseItem");
		pegaTipos(StringTipos);	
	}
	
	public void adicionarItem(Item item){
		//System.out.println("BaseItem::adicionarItem(Item item)");
		boolean OK = false;
		String sql = null;
		sql = 	"INSERT INTO ITEM"
				+	"("
				+	"CODIGO, TITULO, AUTOR, "	
				+	"TIPO, IDIOMA, EDITORA, ANO) "
				+	"VALUES ("
				+ "'"	+	item.getCodigo()					+ "',"
				+ "'"	+	item.getTitulo() 					+ "'," 
				+ "'"	+	item.getAutor() 					+ "'," 
				+ "'"	+	item.getTipo() 						+ "',"
				+ "'"	+	item.getIdioma()					+ "',"
				+ "'"	+	item.getEditora()					+ "',"
				+ ""	+	Integer.parseInt(item.getAno())		+ ""
				+ ")";
		OK = executa.noReturnSQL(sql);		
		if (OK){
			System.out.println("Novo item adicionado ao banco de dados. \nCódigo: "+item.getCodigo());
					dialogos.dialogoInfo(
							"Item Cadastrado com Sucesso"+
							"\nCódigo do Item:\n"+
							String.valueOf(item.getCodigo()), 
							"Cadastrado com Sucesso");
		}
		else{
			dialogos.dialogoErro(
					"Verifique se o Código especificado não se encontra em uso.",
					"Erro ao cadastrar");
		}
	}

	public DadosTabela BuscaItemNumero(String tipo, int codigo){
		//System.out.println("BaseItem::BuscaItemNumero(String tipo, int codigo)");
		//System.out.println("Preenche tabela com resultados da busca por item
		//						\nCodigo:"+codigo+"\nTipo:"+tipo);
		String sql;
		sql = "SELECT * FROM ITEM "
			+ "		WHERE CODIGO='"
			+  codigo +"'" ;
		DadosTabela dados = executa.BuscaComRetorno(sql);
		return dados;
	}

	public DadosTabela BuscaIntemNome(String tipo, String campo, String texto){
		//System.out.println("BuscaIntemNome(String "+tipo+", String "+campo+", String "+texto+")");
		String sql;
		sql = "SELECT * FROM ITEM "
			+ "		WHERE "
			+ campo + " LIKE "  +  "'%" + texto + "%'";
		if (!tipo.equals("*")){
			sql+= " AND "
			+ "TIPO = " + "'"+tipo+"'";
		}
		DadosTabela dados = executa.BuscaComRetorno(sql);
		System.out.println("BuscaItem\n tipo:"+tipo+
								"campo:"+campo+"texto:"+
								texto);
		return dados;	
	}
	
	public int getNTipos() {
		return nTipos;
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
	public void editar(Item item) {
		boolean OK = false;
		String sql = null;
		sql = 	"UPDATE ITEM "
				+	"SET "
				+   "TITULO= '"			  +	item.getTitulo()	+ "'," 
				+	"AUTOR= '"			  +	item.getAutor()		+ "'," 	
				+	"TIPO= '"			  +	item.getTipo()		+ "',"
				+	"IDIOMA= '" 		  +	item.getIdioma()	+ "',"
				+	"EDITORA= '"		  +	item.getEditora()	+ "',"
				+   "ANO= '"				+ item.getAno()		+ "',"
				+	"WHERE CODIGO='" + item.getCodigo() + "'";
		
		
		OK = executa.noReturnSQL(sql);		
		if (OK){
					dialogos.dialogoInfo(
							"Item atulizado com sucesso"+
							"\nCódigo do Item:\n"+
							String.valueOf(item.getCodigo()), 
							"Atualizacão bem sucedida");
		}
	}
}

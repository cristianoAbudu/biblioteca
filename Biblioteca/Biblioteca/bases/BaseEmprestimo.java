package bases;

import java.sql.Timestamp;

import bd.DadosTabela;
import bd.ExecutadorSQL;
import bd.entidades.Emprestimo;
import bd.entidades.Item;
import bd.entidades.Usuario;

import util.BibliotecaFuncoes;


public class BaseEmprestimo{
	
	private Item item;
	private Usuario usuario;
	private ExecutadorSQL executa = new ExecutadorSQL();
	private BibliotecaFuncoes dialogos = new BibliotecaFuncoes();
	
	@SuppressWarnings("deprecation")
	public void Adicionar(Emprestimo emprestimo){
		//System.out.println("BaseEmprestimo:Adicionar(Emprestimo emprestimo)");
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String sql = null;
		long codigoEmprestimo = timestamp.getTime();
		codigoEmprestimo = codigoEmprestimo%1000000;
		
		sql = 	"INSERT INTO EMPRESTIMO"
				+	"("
				+	"CODIGO, CARTEIRINHA, CODIGOITEM, "
				+   "DEVOLVERDIA, EMPRESTADODIA) " 
				+	"VALUES ("
				+ 			codigoEmprestimo 						+ ","				
				+ 			emprestimo.getCarteirinha() 			+ ","		 
				+ "'"+		emprestimo.getCodigoItem()					+ "',"
				+ 			emprestimo.getDevolverDia().getTime()	+ ","	
				+ 			emprestimo.getEmprestadoDia().getTime()										
				+ ")";
		//System.out.println("Novo empréstimo adicionado ao banco de dados. \nCódigo: "+codigoEmprestimo);			
		executa.noReturnSQL(sql);
		executa.noReturnSQL("UPDATE ITEM SET EMPRESTADO = 1 WHERE CODIGO LIKE '"+emprestimo.getCodigoItem()+"'");
		dialogos.dialogoInfo("Empréstimo Cadastrado com Sucesso"+
							"\nCódigo do Empréstimo:\n"+
							String.valueOf(codigoEmprestimo)+
							"\nData de devolução:\n"+
							emprestimo.getDevolverDia().toLocaleString(),
							"Cadastrado com Sucesso");
	}

	public DadosTabela BuscarUsuário(long carteirinha){
		//System.out.println("BaseEmprestimo:BuscarUsuário(long carteirinha)");
		//System.out.println("\n\nBusca Empréstimo por Usuário e retorna tabela"+"\n\n"+
		//		"\nCarteirinha:"+carteirinha);
		String sql = "SELECT * FROM EMPRESTIMO WHERE CARTEIRINHA ="+carteirinha;
		DadosTabela dados = executa.BuscaEmprestimoComRetorno(sql);
		return dados;
	}

	public DadosTabela BuscarItem(String codigo){
		//System.out.println("BaseEmprestimo:PreencheEmprestimo(long codigo)");
		//System.out.println("\n\nBusca Empréstimo por item"+"\n\n"+
		//					"\nCodigo: "+codigo);
		String sql = "SELECT * FROM EMPRESTIMO WHERE CODIGOITEM ='"+codigo+"'";
		DadosTabela dados = executa.BuscaEmprestimoComRetorno(sql);
		return dados;
	}
	/*
	 public DadosTabela BuscarData(Data data, int ordem){
		//System.out.println("BuscarData(Data data, int ordem)");
		//System.out.println("Empréstimos com a data "+data.getDia()+"/"+data.getMes()+"/"+data.getAno());
		Date conversor = data.dataToDate(data);
		String sql = "SELECT * FROM EMPRESTIMO WHERE EMPRESTADODIA ="+conversor.getTime()+" ORDER BY EMPRESTADODIA "; 
		if (ordem==0){
			sql+="DESC";
			System.out.println("/nNovos primeiro");
		}
		else {
			System.out.println("/nAntigos primeiro");
		}
		DadosTabela dados = executa.BuscaEmprestimoComRetorno(sql);
		return dados;	
	}
	*/

	public Usuario PreencheUsuario(long carteirinha){
		//System.out.println("BaseEmprestimo::PreencheUsuario(long carteirinha)");
		//System.out.println("Buscando Usuário com carteirinha = "+carteirinha);
		String sql = "SELECT * FROM USUARIO WHERE CARTEIRINHA="+ carteirinha;
		usuario = executa.RetornaUsuarioSQL(sql);
		try{
			if (usuario==null){
				dialogos.dialogoErro("Não existe nenhum usuário cadastrado com o código "+carteirinha,
										"Usuário não encontrado");
				usuario = new Usuario();
				usuario.setNome("Não encontrado");
				usuario.setCarteirinha(-1);
				//-1 na carteirinha significa não encontrado.
			}
			//System.out.println(usuario.getCarteirinha());
			//System.out.println(usuario.getNome());
		}catch(Exception e){
			dialogos.dialogoErro(e.getMessage(), "Erro SQL em BaseEmprestimo::PreencheUsuario(long carteirinha)");
		}
		return usuario;
	}

	public Item PreencheItem(String string){
		//System.out.println("BaseEmprestimo::PreencheItem(long codigo)");
		//System.out.println("Buscando Item com código = "+codigo);
		String sql = "SELECT * FROM ITEM WHERE CODIGO='"+ string+"'";
		item = executa.RetornaItemSQL(sql);
		try{
			if (item==null){
				dialogos.dialogoErro("Não existe nenhum item cadastrado com o código "+string,
										"Item não encontrado");
				item = new Item();
				item.setTitulo("Não encontrado");
				item.setAutor("Não encontrado");
				item.setTipo("Não encontrado");
				item.setCodigo("-1");
				//-1 no codigo significa  não encontrado.
				System.out.println(item.getCodigo());
			}
		}catch(Exception e){
			dialogos.dialogoErro(e.getMessage(), "Erro SQL em BaseEmprestimo::PreencheItem(long codigo)");
		}
		//System.out.println("Resultados da busca:");
		//System.out.println(item.getTipo());
		//System.out.println(item.getTitulo());
		//System.out.println(item.getAutor());
		return item;
	}

	public Emprestimo PreencheEmprestimo(long codigo) {
		//System.out.println("BaseEmprestimo:PreencheEmprestimo(long codigo)");
		//System.out.println("Preenchendo Empréstimo com o código = "+codigo");
		String sql = "SELECT * FROM EMPRESTIMO WHERE CODIGO="+ codigo;
		Emprestimo emprestimo = executa.RetornaEmprestimo(sql);
		try{
			if (emprestimo==null){
				dialogos.dialogoErro("Não existe nenhum empréstimo cadastrado com o código "+codigo,
										"Empréstimo não encontrado");
				emprestimo.setCarteirinha(0);
				emprestimo.setCodigoItem("0");
				//0 significa inexistente
			}
		}catch(Exception e){
			dialogos.dialogoErro(e.getMessage(), "Erro ao preencher tela");
		}
		return emprestimo;
	}

	@SuppressWarnings("deprecation")
	public void Editar(Emprestimo emprestimo, long codigo) {
//		System.out.println("BaseEmprestimo:Editar(Emprestimo emprestimo, long codigo)");
		//System.out.println("Editando data do empréstimo de código = "+codigo");
		String	
		sql = 	"UPDATE EMPRESTIMO"
				+	" SET"
				+	" DEVOLVERDIA= "	+	emprestimo.getDevolverDia().getTime()
				+	" WHERE CODIGO= "	+	codigo;
		executa.noReturnSQL(sql);			
		dialogos.dialogoInfo("Empréstimo Atualizado com Sucesso"+
							"\nCódigo do Empréstimo:\n"+
							String.valueOf(codigo)+
							"\nData de devolução:\n"+
							emprestimo.getDevolverDia().toLocaleString(), 
							"Atualizado com Sucesso");
	}
}

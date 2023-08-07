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
		//System.out.println("Novo empr�stimo adicionado ao banco de dados. \nC�digo: "+codigoEmprestimo);			
		executa.noReturnSQL(sql);
		executa.noReturnSQL("UPDATE ITEM SET EMPRESTADO = 1 WHERE CODIGO LIKE '"+emprestimo.getCodigoItem()+"'");
		dialogos.dialogoInfo("Empr�stimo Cadastrado com Sucesso"+
							"\nC�digo do Empr�stimo:\n"+
							String.valueOf(codigoEmprestimo)+
							"\nData de devolu��o:\n"+
							emprestimo.getDevolverDia().toLocaleString(),
							"Cadastrado com Sucesso");
	}

	public DadosTabela BuscarUsu�rio(long carteirinha){
		//System.out.println("BaseEmprestimo:BuscarUsu�rio(long carteirinha)");
		//System.out.println("\n\nBusca Empr�stimo por Usu�rio e retorna tabela"+"\n\n"+
		//		"\nCarteirinha:"+carteirinha);
		String sql = "SELECT * FROM EMPRESTIMO WHERE CARTEIRINHA ="+carteirinha;
		DadosTabela dados = executa.BuscaEmprestimoComRetorno(sql);
		return dados;
	}

	public DadosTabela BuscarItem(String codigo){
		//System.out.println("BaseEmprestimo:PreencheEmprestimo(long codigo)");
		//System.out.println("\n\nBusca Empr�stimo por item"+"\n\n"+
		//					"\nCodigo: "+codigo);
		String sql = "SELECT * FROM EMPRESTIMO WHERE CODIGOITEM ='"+codigo+"'";
		DadosTabela dados = executa.BuscaEmprestimoComRetorno(sql);
		return dados;
	}
	/*
	 public DadosTabela BuscarData(Data data, int ordem){
		//System.out.println("BuscarData(Data data, int ordem)");
		//System.out.println("Empr�stimos com a data "+data.getDia()+"/"+data.getMes()+"/"+data.getAno());
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
		//System.out.println("Buscando Usu�rio com carteirinha = "+carteirinha);
		String sql = "SELECT * FROM USUARIO WHERE CARTEIRINHA="+ carteirinha;
		usuario = executa.RetornaUsuarioSQL(sql);
		try{
			if (usuario==null){
				dialogos.dialogoErro("N�o existe nenhum usu�rio cadastrado com o c�digo "+carteirinha,
										"Usu�rio n�o encontrado");
				usuario = new Usuario();
				usuario.setNome("N�o encontrado");
				usuario.setCarteirinha(-1);
				//-1 na carteirinha significa n�o encontrado.
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
		//System.out.println("Buscando Item com c�digo = "+codigo);
		String sql = "SELECT * FROM ITEM WHERE CODIGO='"+ string+"'";
		item = executa.RetornaItemSQL(sql);
		try{
			if (item==null){
				dialogos.dialogoErro("N�o existe nenhum item cadastrado com o c�digo "+string,
										"Item n�o encontrado");
				item = new Item();
				item.setTitulo("N�o encontrado");
				item.setAutor("N�o encontrado");
				item.setTipo("N�o encontrado");
				item.setCodigo("-1");
				//-1 no codigo significa  n�o encontrado.
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
		//System.out.println("Preenchendo Empr�stimo com o c�digo = "+codigo");
		String sql = "SELECT * FROM EMPRESTIMO WHERE CODIGO="+ codigo;
		Emprestimo emprestimo = executa.RetornaEmprestimo(sql);
		try{
			if (emprestimo==null){
				dialogos.dialogoErro("N�o existe nenhum empr�stimo cadastrado com o c�digo "+codigo,
										"Empr�stimo n�o encontrado");
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
		//System.out.println("Editando data do empr�stimo de c�digo = "+codigo");
		String	
		sql = 	"UPDATE EMPRESTIMO"
				+	" SET"
				+	" DEVOLVERDIA= "	+	emprestimo.getDevolverDia().getTime()
				+	" WHERE CODIGO= "	+	codigo;
		executa.noReturnSQL(sql);			
		dialogos.dialogoInfo("Empr�stimo Atualizado com Sucesso"+
							"\nC�digo do Empr�stimo:\n"+
							String.valueOf(codigo)+
							"\nData de devolu��o:\n"+
							emprestimo.getDevolverDia().toLocaleString(), 
							"Atualizado com Sucesso");
	}
}

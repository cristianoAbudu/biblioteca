package bases;

import java.sql.Timestamp;
import java.util.Date;

import bd.DadosTabela;
import bd.ExecutadorSQL;
import bd.entidades.Usuario;

import util.BibliotecaFuncoes;
import util.Data;
//CONTINUAR A IMPLEMENTAR MÉTODO DE ATUALIZAÇÃO!
public class BaseUsuário {
	private ExecutadorSQL executa = new ExecutadorSQL();	
	private BibliotecaFuncoes dialogos = new BibliotecaFuncoes();
	
	public void Adicionar(Usuario usuario){
		Timestamp Carteirinha = null;
	    String sql = null;
	    Carteirinha = new Timestamp(System.currentTimeMillis());
	    long CarteirinhaINT = Carteirinha.getTime();
	    CarteirinhaINT = CarteirinhaINT%10000;
	    Data conversor = new Data();
	    //System.out.println("\n\n\n\n\n"+usuario.getNascimento().getDia()+"/"+usuario.getNascimento().getMes()+"/"+usuario.getNascimento().getAno()+"\n\n\n\n\n");
	    Date nascimento = conversor.dataToDate(usuario.getNascimento());
	    //System.out.println("\n\n\n\n"+nascimento.toLocaleString()+"\n\n\n\n");
	    Date cadastro = new Date();
	    	
	    sql = "INSERT INTO USUARIO"   
	       	+ "(CARTEIRINHA, NOME, SEXO, ENDERECO,"
	       	+ "CIDADE, ESTADO, EMAIL,"
	       	+ "OBSERVACAO, TELEFONE,"
	       	+ "NASCIMENTO, DIACADASTRO,"
	       	+ "RG, CPF )"
	       	+ "VALUES(" 
	       	+ ""+ CarteirinhaINT 			+ ""+ ","
	       	+ "'"+	usuario.getNome()		+ "'"+","
	       	+ "'"+ usuario.getSexo()		+ "'"+","
	       	+ "'"+ usuario.getEndereco()	+ "'"+","
	       	+ "'"+ usuario.getCidade()		+ "'"+","
	       	+ "'"+ usuario.getEstado()		+ "'"+","
	       	+ "'"+ usuario.getEmail()		+ "'"+","
	       	+ "'"+ usuario.getObservacao()	+ "'"+","
	       	+ "'"+ usuario.getTelefone()	+ "'"+","
	       	+ "" + nascimento.getTime()		+ "" +","
	       	+ "" + cadastro.getTime()		+ "" +","
	       	+ "'"+ usuario.getRg()			+ "'"+","
	       	+ "'"+ usuario.getCpf()			+ "'"+" )";
	     
	    executa.noReturnSQL(sql);
		//System.out.println("Adicionando Usuário ao BD, Carteirinha no: "+String.valueOf(CarteirinhaINT));
		
					dialogos.dialogoInfo(
							"Usuário Cadastrado com Sucesso"+
							"\nNúmero da Carteirinha:\n"+
							String.valueOf(CarteirinhaINT), 
							"Cadastrado com Sucesso");	
	}

	public DadosTabela buscaUsuarioNumero(String campo, long conteudo){
		String sql;
		sql = "SELECT * FROM USUARIO "
			+ "		WHERE CARTEIRINHA="
			+  conteudo ;
		DadosTabela dados =  executa.BuscaComRetorno(sql);
		//System.out.println("Busca Usuario:\n codigo: "+conteudo+"tipo: "+campo);
		return dados;
	}
	
	public DadosTabela buscaUsuarioNome(String nomeUsuario){
		String sql;
		sql = "SELECT * FROM USUARIO "
			+ "		WHERE "
			+ "NOME" + " LIKE "   
			+  "'%" + nomeUsuario + "%'";
		DadosTabela dados = executa.BuscaComRetorno(sql);
		//System.out.println("Busca Usuario\n nome:"+nomeUsuario);
		return dados;
		}

	public void Atualizar(Usuario usuario) {
		long nascimento = usuario.getNascimento().dataToDate(usuario.getNascimento()).getTime();
		String sql = 
			"UPDATE USUARIO" +
			" SET " +
			" NOME= '"				+	usuario.getNome()			+"'"	+	","	+
			" NASCIMENTO ="			+	nascimento					+			","	+
			" RG ='"				+ 	usuario.getRg()				+"'"	+	","	+
			" CPF ='"				+	usuario.getCpf()			+"'"	+	","	+
			" ENDERECO= '"			+	usuario.getEndereco()		+"'"	+   ","	+
			" CIDADE= '"			+   usuario.getCidade()			+"'"	+	","	+
			" ESTADO= '"			+	usuario.getEstado()			+"'"	+	","	+
			" EMAIL= '"				+	usuario.getEmail()			+"'"	+	","	+
	       	" OBSERVACAO= '" 		+	usuario.getObservacao()		+"'"	+	","	+
	       	" SEXO= '"				+	usuario.getSexo()			+"'"	+	"," +
	       	" TELEFONE= '"			+	usuario.getTelefone()		+"'"	+
	       	"WHERE CARTEIRINHA ="	+	usuario.getCarteirinha();
	    executa.noReturnSQL(sql);
	    dialogos.dialogoInfo("Se não houve erros, o cadastro "+usuario.getCarteirinha()+"\nfoi atualizado com sucesso ", "");
	}

}

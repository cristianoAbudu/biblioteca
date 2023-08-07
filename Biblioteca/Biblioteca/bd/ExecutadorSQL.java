package bd;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.Vector;

import javax.swing.JOptionPane;

import bd.entidades.Emprestimo;
import bd.entidades.Item;
import bd.entidades.Usuario;

import util.BibliotecaFuncoes;
import util.Data;
import util.Serializador;



		/*
		 * Esta classe contém códigos SQL para 
		 * implementação das tarefas comuns do
		 * sistema biblioteca
		 */

public class ExecutadorSQL {
	DadosBd dadosConexao = null;
	
	private String ipFile = "bib_bd.ip";  //  @jve:decl-index=0:
	private String portFile = "bib_bd.port";  //  @jve:decl-index=0:
	private String isRemoteFile = "bib_bd.remote";
	
	Serializador ipS = null;
	Serializador portS = null;
	Serializador isRemoteS = null;
	
	private String ip = null;
	private String port = null;
   /*
	private String host =
		//Host máquina local:
		//"jdbc:db2://127.0.0.1:50000/";
		//Host servidor Werneck:
		"jdbc:db2://192.168.0.2:50000/";
	*/
    private String driver = "com.ibm.db2.jcc.DB2Driver";
    //private String database = "BIB";
    private String url = null;    
    
    private String user =
  
    	//Máquina Local:
    	//"invenire";
    	//Servidor Werneck:
    	"root";
    private String password = 
    	//Máquina Local:
    	//"girassol";
    	//Servidor Werneck:
    	"12345678";
    
    
    private Statement st = null;
    private ResultSet rs = null;
	private Connection Conexao = null;
	private BibliotecaFuncoes dialogos = new BibliotecaFuncoes();
	
	public void dialogoErroConexao(Exception e){
		dialogos.dialogoErro(
				"Erro ao estabelecer conexão\n Em: exectSQL\nUrl: "+
				dadosConexao.getHost()+"\nMensagem:\n\t"+e.getMessage(),
				"CONEXÃO");
		System.out.println(e.getMessage());
	}
	
	public ExecutadorSQL(){
		dadosConexao = new DadosBd();
		url = dadosConexao.getHost();
		
		//oldSerializador();
		
        try {
			Class.forName(driver);
			Conexao=DriverManager.getConnection(url, user, password);
			
        }catch(Exception e) {
        	dialogoErroConexao(e);							
			System.out.println(e.getMessage()+ "\n\n\nConstrutor do Executador SQL");
		}
        
        
        
	}
	
	public boolean noReturnSQL(String sql){
		//Executa comandos sem retorno (adicionar)
		boolean OK = true;
		try{
			st=Conexao.createStatement();
			st.executeUpdate(sql.trim());
			st.close();                              
		}catch(SQLException e){
			OK = false;
			dialogoErroConexao(e);
			
	    }
		return OK;
	}

	public ResultSet retornaSQL(String sql){
		//Executa comandos que mostram resultado (busca) para tipo Item
		@SuppressWarnings("unused")
		Item item = new Item();
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);
			while (rs.next()){
				//System.out.println(rs.getString("CODIGO"));
				//System.out.println(rs.getString("TITULO"));
			}
			//System.out.println("SQL OK");
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
	                "Erro ao executar statement","STATEMENT",JOptionPane.ERROR_MESSAGE);                                
	                System.out.println(e.getMessage());
	                item = null;
		}
		return rs;
	}
	
	public String[][] retornaObjeto(String sql){
		//Executa comandos que mostram resultado (busca) para tipo Item
		String[/*linhas*/][/*colunas*/] objeto;
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);
			objeto = FazObjeto(rs);
			System.out.println("SQL OK");
			
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
	                "Erro ao executar statement","STATEMENT",JOptionPane.ERROR_MESSAGE);                                
	                System.out.println(e.getMessage());
	                objeto = null;
		}
		return objeto;
	}
	
	@SuppressWarnings({ "deprecation", "deprecation", "deprecation" })
	public Usuario RetornaUsuarioSQL(String sql){
		//Executa comandos que mostram resultado (busca) para tipo Usuário
		Usuario usuario = null;
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);
			while (rs.next()){
				
				/*Date nascimentoBD  = new Date(
						rs.getLong("NASCIMENTO"));
				System.out.println(rs.getLong("NASCIMENTO"));
				Date diaCadastroBD = new Date(rs.getLong("DIACADASTRO"));
				
				Data nascimento  = new Data();
				Data diaCadastro = new Data();
				
				nascimento = nascimento.Preenche(String.valueOf(nascimentoBD.getDay()),
						String.valueOf(nascimentoBD.getMonth()),
						String.valueOf(nascimentoBD.getYear()));
				
				diaCadastro = diaCadastro.Preenche(String.valueOf(diaCadastroBD.getDay()),
						String.valueOf(nascimentoBD.getMonth()),
						String.valueOf(diaCadastroBD.getYear()));*/
				
				Data nascimento = new Data();
				Date nasc = new Date(rs.getLong("NASCIMENTO"));
				
				//System.out.println("------NASCIMENTO:"+nasc.getDay());
				
				nascimento.setDia(nasc.getDay());
				nascimento.setMes(nasc.getMonth()+1);
				nascimento.setAno(nasc.getYear());
				
				//System.out.println("\n\n\n\n\n------NASCIMENTO: "+nascimento.getDia()+"--------\n\n\n\n\n");
				
				usuario = new Usuario();
				usuario.setCarteirinha(rs.getLong("CARTEIRINHA"));
				//System.out.println(rs.getString("CIDADE"));
				usuario.setCidade(rs.getString("CIDADE"));
				usuario.setCpf(rs.getString("CPF"));
				usuario.setEmail(rs.getString("EMAIL"));
				usuario.setEndereco(rs.getString("ENDERECO"));
				usuario.setEstado(rs.getString("ESTADO"));
				usuario.setNascimento(nascimento);
				usuario.setNome(rs.getString("NOME"));
				usuario.setObservacao(rs.getString("OBSERVACAO"));
				usuario.setRg(rs.getString("RG"));
				usuario.setSexo(rs.getString("SEXO"));
				usuario.setTelefone(rs.getString("TELEFONE"));				
			}
			//System.out.println("SQL OK");
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
	                "Erro ao executar statement","STATEMENT",JOptionPane.ERROR_MESSAGE);                                
	                System.out.println(e.getMessage());
	                usuario = null;
		}
		return usuario;
	}
	
	public Item RetornaItemSQL(String sql){
		//Executa comandos que mostram resultado (busca) para tipo Item
		Item item = null;
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);
			while (rs.next()){
				item = new Item();
				item.setCodigo(rs.getString("CODIGO"));
				item.setTipo(rs.getString("TIPO"));
				item.setTitulo(rs.getString("TITULO"));
				item.setAutor(rs.getString("AUTOR"));
				item.setEmprestado(rs.getInt("EMPRESTADO"));
				item.setAno(rs.getString("ANO"));
				//System.out.println("\nSQL OK\n");
				//System.out.println("Codigo: "+item.getCodigo());
				//System.out.println("Tipo: "+item.getTipo());
				//System.out.println("Titulo: "+item.getTitulo());
				//System.out.println("Autor: "+item.getAutor());
			}
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
	                "Erro ao executar statement","STATEMENT",JOptionPane.ERROR_MESSAGE);                                
	                System.out.println(e.getMessage());
	        item = null;       
	        
		}
		return item;
	}
	
	public Emprestimo RetornaEmprestimoSQL(String sql){
		Emprestimo emprestimo = null;
		try{
			st=Conexao.createStatement();
			rs=st.executeQuery(sql);
			while (rs.next()){
				Date date = new Date(System.currentTimeMillis());
				emprestimo = new Emprestimo(date);
				emprestimo.setCarteirinha(rs.getLong("CARTEIRINHA"));
				emprestimo.setCodigoItem(rs.getString("CODIGOITEM"));
				Date devolverDia = new Date(rs.getLong("DEVOLVERDIA"));
				Date emprestadoDia = new Date(rs.getLong("EMPRESTADODIA"));
				emprestimo.setDevolverDia(devolverDia);
				emprestimo.setEmprestadoDia(emprestadoDia);
			}
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
					"Erro ao executar statement", "STATEMENT", JOptionPane.ERROR_MESSAGE);
		}
		return emprestimo;
	}
	
	public String[][] FazObjeto(ResultSet rs){
		String[][] objeto;
		try{
			ResultSetMetaData metadata = rs.getMetaData();  
			objeto = new String
			[rs.getFetchSize()+1]/*uma linha para os títulos,
								 **uma linha para um resultado
								 **no mínimo, pois o rs retorna
								 **um valor estranho no Fetch size
								 **(uma unidade a menos que reamente
								 **existe)*/
			 [metadata.getColumnCount()+1];
			 //para as colunas não se soma.
			
			int linha = -1;
			//System.out.println("RESULTADOS:\n");
			while (rs.next()){
				linha++;
				for (int coluna=1; coluna<=metadata.getColumnCount();coluna++){
					//System.out.println("\n linha: "+linha+"  coluna: "+(coluna));
					if (coluna==1)
					{
						Long longo =rs.getLong(coluna);
						objeto[linha]
						       [coluna-1]=longo.toString();
						//System.out.println("\n"+objeto[linha][coluna]+"");
					}
					else{
						objeto[linha][coluna-1]=rs.getString(coluna);
						//System.out.println("\n"+objeto[linha][coluna]+"");
					}
				}
			}
		}catch(SQLException e){
			dialogoErroConexao(e);
			objeto = null;
		}
		return objeto;
	}

	public String[] RetornaNomesColunas(String TABELA){
		String[] colunas;
		String sql = "SELECT * FROM "+TABELA;
		System.out.println(sql);
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);   
			ResultSetMetaData metadata = rs.getMetaData();
			colunas = new String[rs.getMetaData().getColumnCount()];
			//o metadata retorna com uma coluna a menos que o necessário
			for (int coluna=0; coluna<=rs.getMetaData().getColumnCount()-1;coluna++){
				colunas[coluna]=metadata.getColumnName(coluna+1);
				//System.out.println("\n"+colunas[coluna]+" coluna: "+(coluna+1));
			}
			
			}catch(SQLException e){
				colunas = null; 
				dialogoErroConexao(e);
		}
		return colunas;
	}

	public String[][] RetornaTudo(String TABELA){
		String sql;
		//ResultSet rs;
		sql = "SELECT * FROM ITEM ";
		rs = retornaSQL(sql);
		String[][] objeto = retornaObjeto(sql);
		return objeto;
	}
	
	public DadosTabela BuscaComRetorno(String sql){
		DadosTabela dados = new DadosTabela();
		String[] cabecalho = null;
		Vector linhas = new Vector();
		try{
			Statement st = Conexao.createStatement();
			ResultSet rs = st.executeQuery(sql);
			rs.next();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			cabecalho = new String[rsmd.getColumnCount()];
			System.out.println("Numero de Colunas: "+cabecalho.length);
			for (int i=1; i<= rsmd.getColumnCount(); ++i){
				cabecalho[i-1] = rsmd.getColumnName(i);
			}
			do{
				linhas.addElement(proximaLinha(rs, rsmd));
			}
			while (rs.next());
			
			dados.setCabecalho(cabecalho);
			dados.setLinhas(linhas);
			return dados;			
		}catch(SQLException e){
			if (e.getErrorCode() != -99999){
				dialogoErroConexao(e);
			}
		}
		return dados;
	}

	private Vector proximaLinha(ResultSet rs, ResultSetMetaData rsmd) {
		// TODO Auto-generated method stub
		Vector LinhaAtual = new Vector();
		try{
			try{
			LinhaAtual.addElement(rs.getLong(1));
			}catch(Exception e){
			LinhaAtual.addElement(rs.getString(1));
			}
			for (int i = 2; i<= rsmd.getColumnCount(); i++)
				switch (rsmd.getColumnType(i)){
				case Types.VARCHAR : LinhaAtual.addElement(rs.getString(i));
				break;
				case Types.TIMESTAMP: LinhaAtual.addElement(rs.getDate(i));
				break;
				case Types.BIGINT: Date data = new Date(rs.getLong(i));
							       LinhaAtual.addElement(data.toLocaleString());
				break;
				case Types.LONGVARCHAR: LinhaAtual.addElement(rs.getString(i));
				break;
				case Types.INTEGER:
					//O único campo Inteiro do BD é o campo "EMPRESTADO" dos Itens. 
					int verificador = rs.getInt(i);
					if (rs.getInt(i)==0)
						{
						LinhaAtual.addElement("Disponível");
						}
					else
					{
						LinhaAtual.addElement("Emprestado");
					}
				break;
				}
		}catch (SQLException e){
			dialogoErroConexao(e);
		}
		return LinhaAtual;
	}
	
	public DadosTabela BuscaEmprestimoComRetorno(String sql){
		DadosTabela dados = new DadosTabela();
		String[] cabecalho = null;
		Vector linhas = new Vector();
		try{
			Statement st = Conexao.createStatement();
			ResultSet rs = st.executeQuery(sql);
			rs.next();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			cabecalho = new String[rsmd.getColumnCount()];
			//System.out.println("\n\nEXECUTADORSQL\n\nNumero de Colunas: "+cabecalho.length);
			for (int i=0; i< rsmd.getColumnCount(); ++i){
				cabecalho[i]= rsmd.getColumnName(i+1);
				//System.out.println(i+"o Coluna: "+cabecalho[i]);
				
			}
			do{
				linhas.addElement(proximaLinhaEmprestimo(rs, rsmd));
			}
			while (rs.next());
			
			dados.setCabecalho(cabecalho);
			dados.setLinhas(linhas);
			return dados;			
		}catch(SQLException e){
			if (e.getErrorCode() != -99999){
				dialogoErroConexao(e);
			}
			System.out.println(e.getErrorCode());
		}
		return dados;
	}

	private Vector proximaLinhaEmprestimo(ResultSet rs, ResultSetMetaData rsmd) {
		// TODO Auto-generated method stub
		Vector LinhaAtual = new Vector();
		try{
			LinhaAtual.addElement(rs.getLong(1));
			LinhaAtual.addElement(rs.getLong(2));
			LinhaAtual.addElement(rs.getString(3));
			for (int i = 4; i<= rsmd.getColumnCount(); i++)
				switch (rsmd.getColumnType(i)){
				case Types.VARCHAR : LinhaAtual.addElement(rs.getString(i));
				break;
				case Types.TIMESTAMP: LinhaAtual.addElement(rs.getDate(i));
				break;
				case Types.BIGINT:
					
					Date data = new Date(rs.getLong(i));
					//DATAS com o tipo BIGINT
					Data today = new Data();
					long comparaEntrega= data.getTime(),
					     comparaToday = today.dataToDate(today).getTime();
					//System.out.println("\n\n\nHoje "+comparaToday+"Devolve:"+comparaEntrega);
					String exibicao = data.getDate()+"/"+(data.getMonth()+1)+"/"+(data.getYear()+1900);
					//System.out.println("\n\n\n\n\n\n\n\nDia: "+exibicao);
					if(comparaEntrega < System.currentTimeMillis() && i==4){
						exibicao+="*";
					}
					LinhaAtual.addElement(exibicao);
					
				break;
				case Types.LONGVARCHAR: LinhaAtual.addElement(rs.getString(i));
				}
		}catch (SQLException e){
			dialogoErroConexao(e);
		}
		return LinhaAtual;
	}

	public Emprestimo RetornaEmprestimo(String sql) {
		//System.out.println("ExecutadorSQL:RetornaEmprestimo(String sql)");
		//System.out.println("Executa comandos que mostram resultado (busca) para tipo Empréstimo");
		Emprestimo emprestimo = null;
		try{
			st=Conexao.createStatement();
			rs = st.executeQuery(sql);
			while (rs.next()){
				Date devolucao = new Date(rs.getLong("DEVOLVERDIA"));
				emprestimo = new Emprestimo(devolucao);
				emprestimo.setCarteirinha(rs.getLong("CARTEIRINHA"));
				emprestimo.setCodigoItem(rs.getString("CODIGOITEM"));
				Date data = new Date(rs.getLong("EMPRESTADODIA"));
				emprestimo.setEmprestadoDia(data);
				data = new Date(rs.getLong("EMPRESTADODIA"));
				//System.out.println("\nSQL OK\n");
			}
		}catch(SQLException e){
			JOptionPane.showMessageDialog(null,
	                "Empréstimo não encontrado","Código inválido",JOptionPane.ERROR_MESSAGE);                                
	                System.out.println(e.getMessage());
	        emprestimo = null;       
		}
		return emprestimo;
	}
	private void oldSerializador(){
//		ConfigGUI fixer = new ConfigGUI();
		ipS = new Serializador(ipFile);
		portS = new Serializador(portFile);
		isRemoteS = new Serializador(isRemoteFile);
		// Porta
		// port = Kbd.readString("Port: ");
		
		if (!(
				(ipS.getTemp().equalsIgnoreCase(""))
				&&
				(portS.getTemp().equalsIgnoreCase(""))
			))
		{
			ip = ipS.getTemp();
			port = portS.getTemp();
		}
		else{
			System.out.println("Arquivo NULO!!");
			port = "50000";
			ip = "192.168.0.2";
		}
		ipS.clearTemp();
		portS.clearTemp();
		ipS.gravar(ip);
		portS.gravar(port);
		if (ip.equals("127.0.0.1")){
			isRemoteS.clearTemp();
			isRemoteS.gravar("0");
		}
		else{
			isRemoteS.clearTemp();
			isRemoteS.gravar("1");
		}
		
		//Serializador s = new Serializador();
		//abre uma conexão com o BD.
		/*host = "jdbc:db2://"+ip.substring(0, ip.length()-2)+":"+port.substring(0, port.length()-2)+"/BIB";
		url = host;
		/*
		 * 
		 * Depuração do funcionamento do serializador:
		 * 
		System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		System.out.println(host);
		System.out.println(url);
        //System.out.println("Ip: "+ip);
        //System.out.println("Porta: "+port);
        //System.out.println("Remoto: "+isRemoteS.getTemp());
        System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		*/
		
		
		//"jdbc:db2://127.0.0.1:50000/";
	}
}

package bd;
import util.Serializador;

/**
 * 
 */

/**
 * Esta classe guarda os dados de conexão (ip, porta, remoto) e os fornece 
 * para outras classes.
 * 
 * @author Cristiano
 *
 */
public class DadosBd {
	
	
	/*
	 * Especificar valores default para a conexão aqui: 
	*/
	private static final String DATABASE_NAME = "BIB";
	public final String defaultIp = "192.168.0.2";
	public final String defaultPort = "50000";
	public final String defaultRemote = "1";
	/*
	 * -----------------------------------------------
	*/
	private String ipFile = "bib_bd.ip";  //  @jve:decl-index=0:
	private String portFile = "bib_bd.port";  //  @jve:decl-index=0:
	private String isRemoteFile = "bib_bd.remote";
	
	private String remote = "1";
	private String port = "52000";
	private String ip = "192.168.0.2";
	
	public DadosBd(){
		System.out.println("Construtor do DadosBd");
		ConGenerator url = new ConGenerator();
		ip = url.getIp();
		port = url.getPort();
		remote = url.getRemoto();
	}

	public String getIp() {
		return ip;
	}

	public String getPort() {
		return port;
	}

	public String getRemote() {
		return remote;
	}
	
	public String getHost(){
		/*
		 * Monta o endereço de host para o DB2 com os dados serializados.
		 */
		//return "jdbc:mysql://"+ip+":"+port+"/"+DATABASE_NAME;
		return "jdbc:mysql://localhost:52000/docker";
	}
	/**
	 * Metodo Setter que modifica o valor da variavel 
	 *
	 * @param ip the ip to set
	 */
	public void setIp(String ip) {
		this.ip = ip;
	}

	/**
	 * Metodo Setter que modifica o valor da variavel 
	 *
	 * @param port the port to set
	 */
	public void setPort(String port) {
		this.port = port;
	}

	/**
	 * Metodo Setter que modifica o valor da variavel 
	 *
	 * @param remote the remote to set
	 */
	public void setRemote(String remote) {
		this.remote = remote;
	}

	/**
	 * 
	 * Metodo que faz os dados atuais de conexão
	 * persistirem no registro do sistema.
	 *
	 * @since 03/08/2007
	 *
	 */
	public void grava(){
		ConGenerator urlGenerator = new ConGenerator();
		urlGenerator.setIp(ip);
		urlGenerator.setPort(port);
		urlGenerator.setRemoto(remote);
		urlGenerator.grava();		
	}
	
	/**
	 * 
	 * Metodo antigo de obtenção dos dados a partir de arquivos,
	 * substituído pela leitura direta a partir do registro do sistema.
	 *
	 * @since 03/08/2007
	 *
	 */
	private void oldSerializador(){
		Serializador s = new Serializador(isRemoteFile);
		/* É necessário retirar do arquivo lido as quebras de linha
		 * ao final, já que a classe 'Serializador.java' é a mesma
		 * utilizada para serializar os dados dos itens para gerar
		 * etiqueta. Por isso a chamada dos métodos 'substring'.
		*/
		remote = s.getTemp().substring(0, 1);
		if (remote.equals("1")){
			Serializador s2 = new Serializador(ipFile);
			ip = s2.getTemp().substring(0, s2.getTemp().length()-2);
			s.gravar("1");
		}
		else{
			s.gravar("0");
			ip = "127.0.0.1";
		}
		Serializador s3 = new Serializador(portFile);
		port = s3.getTemp().substring(0, s3.getTemp().length()-2);;

		// Verificação do funcionamento da extração: 
		/* 
		System.out.print("<remoto:"+remote+">");
		System.out.print("<pora:"+port+">");
		System.out.print("<ip:"+ip+">");
		*/		
	}
	/**
	 * 
	 * Método antigo que garante o funcionamento sem
	 * os arquivos (caso não existam, são 
	 * criados a partir de valores padrão).
	 * 
	 * substituído pela leitura direta a partir do registro do sistema.
	 * 
	 * @since 03/08/2007
	 *
	 */
	private void segurança() {
		
		Serializador ipS = new Serializador(ipFile, defaultIp);
		Serializador portaS = new Serializador(portFile, defaultPort);
		Serializador isRemoteS = new Serializador(isRemoteFile, defaultRemote);
		
	}
}

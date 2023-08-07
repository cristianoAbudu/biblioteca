package bd;
import javax.swing.JFrame;

import GUI.ConfigGUI;
import util.BibliotecaFuncoes;



/**
 * Classe que cuida da montagem e configuração 
 * dos dados de conexão ao Banco de Dados
 *
 * @since 03/08/2007
 * @version 1.0
 * @author Cristiano Magalhães <br> <p>
 *
 * Invenire Internacional Informatica <br>
 * Todos os direitos reservados  <br> <p>
 *
 * Geração do Javadoc por: Cristiano Magalhães
 *
 */
public class ConGenerator {
	
	public final String ipKey = "bib_bd_ip";  //  @jve:decl-index=0:
	public final String portKey = "bib_bd_port";
	public final String remoteKey = "bib_bd_remote";
	
	private String ip = null;
	private String port = null;
	private String remoto = null;
	/**
	 * 
	 * Construtor da classe: urlGenerator
	 *
	 * @since 03/08/2007
	 *
	 */
	ConGenerator(){
		System.out.println("Construtor da ConGenerator");
		le();
	}
	/**
	 * 
	 * Metodo que faz a gravação das variáveis locais
	 * 'ip', 'port' e 'remoto' no registro do sistema,
	 * através da classe _Preferences.

	 * @since 03/08/2007
	 *
	 */
	public void grava(){
		/*
		 * Obs: ao chamar o método 'save' do tipo '_Preferences',
		 * é retornado um booleano correspondente ao sucesso da
		 * operação de gravação. Caso exista erro, é exibido um
		 * diálogo. Ou seja: a gravação ocorre dentro da contrução
		 * de seleção dos 'if's.
		 */
		
		invenire._Preferences prefs = new invenire._Preferences();
		if (!(prefs.save(ipKey, ip))){
			BibliotecaFuncoes erro = new BibliotecaFuncoes();
			erro.dialogoErro("Erro ao gravar no registro valor para ip", "Erro");
		}
		if (!(prefs.save(portKey, port))){
			BibliotecaFuncoes erro = new BibliotecaFuncoes();
			erro.dialogoErro("Erro ao gravar no registro valor para porta", "Erro");
		}
		if(!(prefs.save(remoteKey, remoto))){
			BibliotecaFuncoes erro = new BibliotecaFuncoes();
			erro.dialogoErro("Erro ao gravar no registro valor para remoto", "Erro");
		}
	}
	/**
	 * 
	 * Metodo que le os valores do registro para as variáveis
	 * 'ip', 'port' e 'remote', que são utilizados para acesso
	 * ao banco de dados.
	 *
	 * @since 03/08/2007
	 *
	 */
	private void le(){
		invenire._Preferences prefs = new invenire._Preferences();
//		ip = prefs.le(ipKey);
//		port = prefs.le(portKey);
//		remoto = prefs.le(remoteKey);
		ip = "localhost";
		port = "52000";
		remoto = "false";
		if (ip.equals("") || port.equals("") || remoto.equals("")){
			System.out.println("Um (ou mais) registro(s) nulo(s): ip, port, remoto");
			chamaTelaConfiguracao();			
		}	
	}

	private void chamaTelaConfiguracao() {
		//ConfigGUI configGUI = new ConfigGUI();
	}
	/**
	 * Metodo Getter que retorna o valor da variavel ip
	 *
	 * @return ip String
	 */
	public String getIp() {
		// return
		return ip;
	}
	/**
	 * Metodo Getter que retorna o valor da variavel port
	 *
	 * @return port String
	 */
	public String getPort() {
		// return
		return port;
	}
	/**
	 * Metodo Getter que retorna o valor da variavel remoto
	 *
	 * @return remoto String
	 */
	public String getRemoto() {
		// return
		return remoto;
	}
	
	/**
	 * Metodo Setter que modifica o valor da variavel ip
	 *
	 * @param ip the ip to set
	 */
	public void setIp(String ip) {
		this.ip = ip;
	}
	/**
	 * Metodo Setter que modifica o valor da variavel port
	 *
	 * @param port the port to set
	 */
	public void setPort(String port) {
		this.port = port;
	}
	/**
	 * Metodo Setter que modifica o valor da variavel remoto
	 *
	 * @param remoto the remoto to set
	 */
	public void setRemoto(String remoto) {
		this.remoto = remoto;
	}
	private void teste(){
		//Simples teste da classe:
		//Imprime no console o que está armazenado no registro para ip, port e remoto:
		System.out.println(ip);
		System.out.println(port);
		System.out.println(remoto);
		//Atribui valores para o registro:
		ip = "ip";
		port = "porta";
		remoto = "remoto";
		grava();
	}
}

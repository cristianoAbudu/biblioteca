
package invenire;

import java.util.prefs.Preferences;

/**
 * 
 * Classe que empacota a leitura e gravação
 * de dados a partir/para o registro do sistema.
 * No caso do Windows, as keys são armazenadas no
 * registro.
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
public class _Preferences {
	
	private Preferences pref;

/**
 * 
 * Metodo que  recebe uma String 'key' que é o
 * nome da chave do registro onde o conteúdo
 * a String 'value' será armazenado. Retorna
 * true caso seja bem sucedido, false caso
 * ocorra algum problema.
 *
 * @since 03/08/2007
 * 
 * @param key String
 * @param value String
 * @return OK boolean  
 */
	public boolean save(String key, String value){
		boolean OK = false;
		try{
			pref.put(key, value);
			System.out.println("Registro OK - "+key);
			return true;
		}catch(Exception e){
			System.out.println("Erro Registro - "+key);
			System.out.println(e.getCause());
		}
		return OK;
	}
	/**
	 * Este método retorna, a partir do nome de uma key, seu valor.
	 * Caso não exista o valor, uma String vazia é retornada.
	 * 
	 * @param key
	 * @return String retorno
	 */
	public String le(String key){
		String retorno;
		try{
			retorno = pref.get(key, "");
		}catch(Exception e){
			retorno = "";
		}
		
		return retorno;
	}
	/**
	 * Construtor, simplesmente inicializa a variável 'pref'
	 */
	public _Preferences() {
		pref =  Preferences.userNodeForPackage(this.getClass());
	}
}

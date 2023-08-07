
package invenire;

import java.util.prefs.Preferences;

/**
 * 
 * Classe que empacota a leitura e grava��o
 * de dados a partir/para o registro do sistema.
 * No caso do Windows, as keys s�o armazenadas no
 * registro.
 *
 * @since 03/08/2007
 * @version 1.0
 * @author Cristiano Magalh�es <br> <p>
 *
 * Invenire Internacional Informatica <br>
 * Todos os direitos reservados  <br> <p>
 *
 * Gera��o do Javadoc por: Cristiano Magalh�es
 *
 */
public class _Preferences {
	
	private Preferences pref;

/**
 * 
 * Metodo que  recebe uma String 'key' que � o
 * nome da chave do registro onde o conte�do
 * a String 'value' ser� armazenado. Retorna
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
	 * Este m�todo retorna, a partir do nome de uma key, seu valor.
	 * Caso n�o exista o valor, uma String vazia � retornada.
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
	 * Construtor, simplesmente inicializa a vari�vel 'pref'
	 */
	public _Preferences() {
		pref =  Preferences.userNodeForPackage(this.getClass());
	}
}

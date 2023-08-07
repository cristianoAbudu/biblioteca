package bd;
//voxplus@terra.com.br - Falar com Gustavo Oliva



import java.sql.Connection;
import java.sql.DriverManager;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import GUI.Conectando;

//CONEXÃO COM BANCO DE DADOS

public class ConexaoBaseDB2{
	private DadosBd dadosBd = null;
	
	private String host = null;
	private String driver = null;
	private String database = null;
	private String url = null;
	private String user = null;
	private String password = null;
	public Connection con = null;
	Conectando l = null;
		
	public ConexaoBaseDB2() throws Exception {
        System.out.println("Construtor da ConexãoBaseDB2");
		dadosBd = new DadosBd();
		
        l = new Conectando();
        
		driver="com.ibm.db2.jcc.DB2Driver";
		
		//Login & password      
		user = "root";
		password = "12345678";
				
		url = dadosBd.getHost();
		System.out.println("Conectando a "+url);
        try{
        	Class.forName(driver);
        	con=DriverManager.getConnection(url, user, password);
        	l.dispose();
        }catch(Exception e){
        	l.dispose();
        	Class.forName(driver);
        	con=DriverManager.getConnection(url, user, password);
        }
        

		
	}
	
	public Connection getConnection(){
		return con;
	}
	
	public void dispose(){
		l.dispose();
	}
}
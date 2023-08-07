package util;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.PrintStream;
import java.util.Scanner;

	
	/*
	 * Esta clase grava arquivos de
	 * caracteres a partir de Strings
	*/

public class Serializador {
	String temp = "";
	File file;
	
	public Serializador(String filePatch){
		file = new File(filePatch);
		carregar();
	}
	
	public Serializador(String filePatch, String defaultValue){
		/*
		 * Construtor que, caso o arquivo não exista, cria
		 * um novo com a String especificada em defaultValue
		 */
		Scanner scanner;
		file = new File(filePatch);
		try {
			scanner = new Scanner(new FileReader(file));
			while ( scanner.hasNext() ) {  
			      temp += scanner.next() + "\n";
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			clearTemp();
			gravar(defaultValue+"\n");
		}
		carregar();
	}
	
	public Serializador(File file){
		this.file = file;
	}
	
	public void setTemp(String temp){
		this.temp = temp;
	}
	
	public void clearTemp(){
		this.temp="";
	}
	
	public void carregar(){
		Scanner scanner;
		try {
			scanner = new Scanner(new FileReader(file));
			while ( scanner.hasNext() ) {  
			      temp += scanner.next() + "\n";
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			BibliotecaFuncoes b = new BibliotecaFuncoes();
			b.dialogoErro("Erro ao abrir arquivo:\n"+e.getMessage(), "Erro");
			e.printStackTrace();
		}
		temp+="\n";
	}
	
	public void gravar(String texto){
		PrintStream printstream;
		try {
			printstream = new PrintStream(file);
			printstream.println(temp+texto);
			printstream.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			BibliotecaFuncoes b = new BibliotecaFuncoes();
			b.dialogoErro("Erro ao criar arquivo:\n"+e.getMessage(), "Erro");
		}
	}

	public String getTemp() {
		// TODO Auto-generated method stub
		return temp;
	}	

}

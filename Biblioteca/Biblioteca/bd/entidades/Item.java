package bd.entidades;
import util.Data;


public class Item {
	private String tipo,
					titulo,
					autor,
					idioma,
					editora;
	
	private int emprestado, ano;
	private String codigo;

	public String getAno() {
		return String.valueOf(ano);
	}

	public void setAno(String ano) {
		int temp;
		try
		{
			temp = Integer.parseInt(ano);
		}catch(Exception e){
			Data hoje = new Data();
			temp = hoje.getAno();
		}
		this.ano = temp;
	}

	public int getEmprestado() {
		return emprestado;
	}

	public void setEmprestado(int anoEdicao) {
		this.emprestado = anoEdicao;
	}

	public String getAutor() {
		//System.out.println("Item::getAutor()");
		return autor;
		
	}

	public void setAutor(String autor) {
		//System.out.println("Item::setAutor()");
		//Formata os dados para evitar problemas com vírgulas no BD.
		this.autor = autor.replace(',', '€');
	}

	public String getEditora() {
		return editora;
	}

	public void setEditora(String editora) {
		this.editora = editora.replace(',', '€');
	}

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma.replace(',', '€');
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo.replace(',', '€');
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo.replace(',', '€');
	}
	
	public String getCodigo(){
		return codigo; 
	}
	
	public void setCodigo(String codigo2){//recebe isso do banco de dados
		codigo = codigo2.replace(',', '€');
	}
	
	public String exportaItem(){
		/*
		 * Método preliminar para exportação
		 * simples das etiquetas dos itens
		 * para String
		 */ 
		String 
		out = "\n"+
			  "Ano :   " + ano	  +"\n"+
			  "Código: " + codigo +
			  "\n";
		return out;
	}
}

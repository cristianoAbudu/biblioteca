package src;

public class Item {
	private String tipo,
					titulo,
					autor,
					idioma,
					editora;
	
	private int anoEdicao,
					codigo;

	public int getAnoEdicao() {
		return anoEdicao;
	}

	public void setAnoEdicao(int anoEdicao) {
		this.anoEdicao = anoEdicao;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getEditora() {
		return editora;
	}

	public void setEditora(String editora) {
		this.editora = editora;
	}

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	public int getCodigo(){
		return codigo; 
	}
	
	private void setCodigo(int Codigo){//recebe isso do banco de dados
		codigo = Codigo;
	}
	
	public Item(){
		setCodigo(BaseItem.getTopoCodigo());//recebe código do BD
	}
	
	
}

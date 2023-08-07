package src;
import java.util.*;

public class Emprestimo {
	private int carteirinha,
				codigoItem;
	
	private Data devolverDia,
					emprestadoDia;
	
	private String nomeUsuario,
					tipoItem,
					titulo,
					autor;
	
	Emprestimo(Data devolucao){
		GregorianCalendar calendario;
		devolverDia=devolucao;
		emprestadoDia=new Data();
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public int getCarteirinha() {
		return carteirinha;
	}

	public void setCarteirinha(int carteirinha) {
		this.carteirinha = carteirinha;
	}

	public int getCodigoItem() {
		return codigoItem;
	}

	public void setCodigoItem(int codigoitem) {
		this.codigoItem = codigoitem;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public String getTipoItem() {
		return tipoItem;
	}

	public void setTipoItem(String tipoItem) {
		this.tipoItem = tipoItem;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	

}

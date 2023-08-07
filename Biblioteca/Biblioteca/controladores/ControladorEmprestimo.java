package controladores;

import java.util.Date;

import bases.BaseEmprestimo;
import bd.DadosTabela;
import bd.entidades.Emprestimo;
import bd.entidades.Item;
import bd.entidades.Usuario;


public class ControladorEmprestimo {
	
	BaseEmprestimo base = new BaseEmprestimo();
	
	public void Formata(Usuario usuario, Item item, int duracao){
		long carteirinha;
		String codigoitem;
		carteirinha = usuario.getCarteirinha();
		codigoitem = item.getCodigo();
		Adcionar(carteirinha, codigoitem, duracao);
		
	}
	
	void Adcionar(long carteirinha,
						String codigoitem,
						int duracao
						){
		Date emprestadoDia = new Date();
		Date devolverDia = new Date(System.currentTimeMillis()+duracao*86400000);
		Emprestimo emprestimo = new Emprestimo(devolverDia);
		emprestimo.setCarteirinha(carteirinha);
		emprestimo.setCodigoItem(codigoitem);
		System.out.println("Devolver:"
				+emprestimo.getDevolverDia()
				+ "\n\nEmprestado:"
				+ emprestimo.getEmprestadoDia());
		base.Adicionar(emprestimo);
	}
	
	public Item PreencheItem(String string){
		Item item = new Item();
		item = base.PreencheItem(string);
		return item;
	}
	
	public Usuario PreencheUsuario(long codigo){
		Usuario usuario = new Usuario();
		usuario = base.PreencheUsuario(codigo);
		return usuario;
	}	
	
	public DadosTabela BuscarUsuario(long carteirinha){
		DadosTabela dados = base.BuscarUsuário(carteirinha);
		return dados;
	}
	
	public DadosTabela BuscarItem(String codigo){
		DadosTabela dados = base.BuscarItem(codigo);
		return dados;
	}
	/*
	DadosTabela BuscarData(int dia,
						int mes,
						int ano,
						int ordem){
		Data data = new Data();
		data.setDia(dia);
		data.setMes(mes);
		data.setAno(ano);
		System.out.println("\n\nBusca Empréstimo por item"+"\n\n"+
				"\n Data: "+
				dia+"/"+
				mes+"/"+
				ano+
				"\n Ordem: "+ordem);
		DadosTabela dados = base.BuscarData(data, ordem);
		return dados;
	}
	*/

	public Emprestimo PreencheEmprestimo(long codigo) {
		// TODO Auto-generated method stub
		Emprestimo emprestimo = base.PreencheEmprestimo(codigo);
		return emprestimo;
	}

	public void Editar(Emprestimo emprestimo, String codigo, int duracao) {
		// TODO Auto-generated method stub
		long Codigo = Long.parseLong(codigo);
		Date devolverDia = new Date(emprestimo.getDevolverDia().getTime()+duracao*86400000);
		emprestimo.setDevolverDia(devolverDia);
		System.out.println("Devolver:"
				+emprestimo.getDevolverDia()
				+ "\n\nEmprestado:"
				+ emprestimo.getEmprestadoDia());
		base.Editar(emprestimo, Codigo);
	}

}

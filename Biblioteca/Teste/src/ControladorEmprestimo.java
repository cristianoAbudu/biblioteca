package src;

public class ControladorEmprestimo {
	
	BaseEmprestimo base = new BaseEmprestimo();
	
	void Formata(Usuario usuario, Item item){
		int carteirinha, codigoitem;
		Data devolverDia, emprestadoDia;
		String nomeUsuario, tipoItem, titulo, autor;
		
		carteirinha = usuario.getCarteirinha();
		codigoitem = item.getCodigo();
		devolverDia = new Data();
		emprestadoDia = devolverDia;
		nomeUsuario = usuario.getNome();
		tipoItem = item.getTipo();
		titulo = item.getTitulo();
		autor = item.getAutor();
		Adcionar(carteirinha, codigoitem, devolverDia, emprestadoDia,
					nomeUsuario, tipoItem, titulo, autor);
	}
	
	void Adcionar(int carteirinha,
						int codigoItem,
						Data devolverDia,
						Data emprestadoDia,
						String nomeUsuario,
						String tipoItem,
						String titulo,
						String autor){
		Emprestimo emprestimo = new Emprestimo(devolverDia);
		emprestimo.setCarteirinha(carteirinha);
		emprestimo.setCodigoItem(codigoItem);
		emprestimo.setNomeUsuario(nomeUsuario);
		emprestimo.setTipoItem(tipoItem);
		emprestimo.setTitulo(titulo);
		emprestimo.setAutor(autor);	
		base.Adicionar(emprestimo);
	}
	
	Item PreencheItem(int codigo){
		Item item = new Item();
		item = base.PreencheItem(codigo);
		return item;
	}
	
	Usuario PreencheUsuario(int codigo){
		Usuario usuario = new Usuario();
		usuario = base.PreencheUsuario(codigo);
		return usuario;
	}	
	
	void BuscarUsuario(String Nome,
					int rg,
					int carteirinha,
					int cpf){
		base.BuscarUsuário(Nome, rg, carteirinha, cpf);
	}
	
	void BuscarItem(String titulo,
						String autor,
						int tipo){
		base.BuscarItem(titulo, autor, tipo);
	}
	
	void BuscarData(int dia,
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
		base.BuscarData(data, ordem);
	}

}

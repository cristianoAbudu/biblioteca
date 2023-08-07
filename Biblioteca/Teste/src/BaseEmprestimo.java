package src;
public class BaseEmprestimo {
	
	public Item PreencheItem(int codigo){
		/*BuscaCodigoItemNoBD(codigo);*/
		Item item = new Item();
		item.setTitulo("T�tulo pego do BD");
		item.setAutor("Autor pego do BD");
		item.setTipo("Tipo pego do BD");
		return item;
	};
	
	public Usuario PreencheUsuario(int codigo){
		/*BuscaCodigoUsuarioNoBD(codigo);*/
		Usuario usuario = new Usuario();
		usuario.setNome("Nome do cara, pego do BD");
		return usuario;
	};
	
	public void BuscarUsu�rio(String Nome,
									int rg,
									int carteirinha,
									int cpf){
		System.out.println("\n\nBusca Empr�stimo por nome"+"\n\n"+
				"\nNome: "+Nome+"\nRG: "+rg+"\nCarteirinha:"
				+carteirinha+"\nCPF: "+cpf);
	}
	
	public void BuscarItem(String titulo,
							String autor,
							int tipo){
			System.out.println("\n\nBusca Empr�stimo por item"+"\n\n"+
								"\nTitulo: "+titulo+"\nAutor: "+autor+
								"\n tipo:"+tipo);
	}
	
	public void BuscarData(Data data, int ordem){
		System.out.println("Empr�stimos com a data "+data.getDia()+"/"+data.getMes()+"/"+data.getAno());
		if (ordem==0){
			System.out.println("/nNovos primeiro");
		}
		else {
			System.out.println("/nAntigos primeiro");
		}
	}

	public void Adicionar(Emprestimo emprestimo){
		/*AdicionaAoBD();*/
		System.out.println("Adicionado Empr�stimo ao BD");
	}
}

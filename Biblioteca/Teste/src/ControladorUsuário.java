package src;

public class ControladorUsuário {
	
	private BaseUsuário base = new BaseUsuário();
	
	void Adicionar(String nome,
			String sexo,
			String endereco,
			String cidade,
			String estado,
			String email,
			String observacao,
			String telefone,
			Data nascimento,
			int rg,
			int cpf){
		Usuario usuario = new Usuario();
		usuario.setNome(nome);
		usuario.setEndereco(endereco);
		usuario.setCidade(cidade);
		usuario.setEstado(estado);
		usuario.setEmail(email);
		usuario.setObservacao(observacao);
		usuario.setTelefone(telefone);
		usuario.setNascimento(nascimento);
		usuario.setRg(rg);
		usuario.setCpf(cpf);
		base.Adicionar(usuario);
	}
	
	static void BuscarNumero(int campo, int texto){
		switch (campo){
		case 1/*cadastro*/			: /*BuscaCadastro()*/
										System.out.println("Busca usuário por cadastro \n Cadastro: "+texto);
															break;
		case 2/*cpf		*/	 		: /*BuscaCPF()*/
										System.out.println("Busca usuário por cpf \n CPF: "+texto);
															break;
		case 3/*rg		*/	 		: /*BuscaRG()*/
										System.out.println("Busca usuário por rg \n RG: "+texto);
															break;
		}
	}
	
	static void BuscarNome(String texto){
		/*BuscaNome()*/
		System.out.println("\n\nBusca Usuário por nome"+"\n\n"+
								"\nNome: "+texto);
	}

}

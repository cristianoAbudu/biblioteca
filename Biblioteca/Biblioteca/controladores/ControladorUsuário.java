package controladores;
import util.Data;
import bases.BaseUsu�rio;
import bd.DadosTabela;
import bd.entidades.Usuario;



public class ControladorUsu�rio {
		
	private BaseUsu�rio base = new BaseUsu�rio();
	
	public ControladorUsu�rio(){
	}

	public void Adicionar(String nome,
			String sexo,
			String endereco,
			String cidade,
			String estado,
			String email,
			String observacao,
			String telefone,
			Data nascimento,
			String rg,
			String cpf){
				Usuario usuario = new Usuario();
				usuario.setNome(nome);
				usuario.setSexo(sexo);
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
	
	public DadosTabela BuscarNumero(int campo, int numero){
		DadosTabela dados = new DadosTabela();
		dados = base.buscaUsuarioNumero(AchaCampo(campo), numero);
		return dados;
	}
	
	public DadosTabela BuscarNome(String nomeUsuario){
		DadosTabela dados = base.buscaUsuarioNome(nomeUsuario);
		System.out.println("\n\nBusca Usu�rio por nome"+"\n\n"+
								"\nNome: "+nomeUsuario);
		return dados;
	}

	public String AchaCampo(int campo){
		String textoCampo = null;
		switch (campo){
		case 1/*	carteirinha	*/			: textoCampo = "CARTEIRINHA";		break;
		case 2/*	cpf			*/	 		: textoCampo = "CPF()";				break;
		case 3/*	rg			*/	 		: textoCampo = "RG";				break;
		}
		System.out.println("Tipo da Busca:" +textoCampo);
		return textoCampo;
	}

	public void Atualizar(long carteirinha,
			String nome,
			String sexos,
			String endereco,
			String cidade,
			String estado,
			String email,
			String observacoes, 
			String telefone, 
			Data nascimento, 
			String rg, 
			String cpf) {
		// TODO Auto-generated method stub
		Usuario usuario = new Usuario();
		usuario.setNome(nome);
		usuario.setSexo(sexos);
		usuario.setEndereco(endereco);
		usuario.setCidade(cidade);
		usuario.setEstado(estado);
		usuario.setEmail(email);
		usuario.setObservacao(observacoes);
		usuario.setTelefone(telefone);
		usuario.setNascimento(nascimento);
		usuario.setRg(rg);
		usuario.setCpf(cpf);
		usuario.setCarteirinha(carteirinha);
		base.Atualizar(usuario);
	}
}

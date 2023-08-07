package src;

//NECESSITA CRIAR MÉTODO DE GERAÇÃO DA CARTEIRINHA

public class Usuario {
	private String nome, 
					sexo, //Dados pessoais - fim
					
					endereco,//Endereço 
					cidade,
					estado,
					email,
					observacao, 
					telefone;
				
	private Data nascimento,
				 diaCadastro;
	
	private int rg,
				cpf,
				carteirinha;
	
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public int getCpf() {
		return cpf;
	}
	public void setCpf(int cpf) {
		this.cpf = cpf;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public Data getNascimento() {
		return nascimento;
	}
	public void setNascimento(Data nascimento) {
		this.nascimento = nascimento;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getObservacao() {
		return observacao;
	}
	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
	public int getRg() {
		return rg;
	}
	public void setRg(int rg) {
		this.rg = rg;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public int getCarteirinha() {
		return carteirinha;
	}
	public Data getDiaCadastro() {
		return diaCadastro;
	}	
	private void setCarteirinha(int Carteirinha){
		carteirinha = Carteirinha;		
	}
 	public Usuario(){
		diaCadastro = new Data();
		carteirinha = BaseUsuário.getTopoCarteirinha();
	}
}

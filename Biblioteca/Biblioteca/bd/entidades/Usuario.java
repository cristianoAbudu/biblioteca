package bd.entidades;
import util.Data;


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
	
	private String rg,
				cpf;
				
	private long carteirinha;
	
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
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
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
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
	public long getCarteirinha() {
		return carteirinha;
	}
	public Data getDiaCadastro() {
		return diaCadastro;
	}	
	public void setCarteirinha(long Carteirinha){
		carteirinha = Carteirinha;		
	}
 	public Usuario(){
		diaCadastro = new Data();
	}
}

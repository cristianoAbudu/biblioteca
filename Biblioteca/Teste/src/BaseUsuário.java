package src;

public class BaseUsuário {
	
	private Usuario usuario;
	
	private static int topocarteirinha;
	
	public static int getTopoCarteirinha(){
		return topocarteirinha;
	}
	
	public void Adicionar(Usuario usuario){
		System.out.println("Adicionando Usuário ao BD");
		//implementar método de adição ao BD
	}
	
	public BaseUsuário(){/* inicializa topocarteirinha com valor "topo" do banco*/
		/*topocarteirinha = BUSCA_ÚLTIMa_CARTEIRINHA_NO_BD();*/	
	}

}

package src;

public class BaseUsu�rio {
	
	private Usuario usuario;
	
	private static int topocarteirinha;
	
	public static int getTopoCarteirinha(){
		return topocarteirinha;
	}
	
	public void Adicionar(Usuario usuario){
		System.out.println("Adicionando Usu�rio ao BD");
		//implementar m�todo de adi��o ao BD
	}
	
	public BaseUsu�rio(){/* inicializa topocarteirinha com valor "topo" do banco*/
		/*topocarteirinha = BUSCA_�LTIMa_CARTEIRINHA_NO_BD();*/	
	}

}

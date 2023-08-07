package bd;
import java.util.Vector;


public class DadosTabela {
	String[] cabecalho;
	Vector linhas;

	public String[] getCabecalho() {
		return cabecalho;
	}

	public void setCabecalho(String[] Cabecalho) {
		cabecalho = new String[Cabecalho.length];
		//System.out.println("setCabecalho()"+cabecalho.length);
		for (int i = 0; i<Cabecalho.length; i++)
		{
			this.cabecalho[i] = Cabecalho[i];
			//System.out.println(i+"oLINHA:"+Cabecalho[i]);
		}
		
		
	}

	public Vector getLinhas() {
		return linhas;
	}

	public void setLinhas(Vector linhas) {
		this.linhas = linhas;
		//System.out.println("setLinhas("+linhas+")");
	}
}

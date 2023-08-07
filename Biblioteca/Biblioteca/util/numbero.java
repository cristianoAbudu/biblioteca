package util;
import javax.swing.JTextField;

public class numbero {
	public boolean validaCampoNumero(JTextField Numero,
			String nome,
			String[] Erro) {
		long valor;
		boolean OK=true;
		if (Numero.getText().length() != 0){
			try {
				valor = Long.parseLong(Numero.getText());
			}catch(NumberFormatException ex){
				Erro[0]+= nome+" só aceita números\n";
				Numero.grabFocus();
				OK=false;
			}
		}
		else{
			Erro[0]+= "Favor preencher "+nome+"\n" ;
			OK=false;
		}
		return OK;
	}
	
	public boolean validaCampoTexto(JTextField Texto,
			String nome,
			String[] Erro) {
		long valor;
		boolean OK=true, erro=true;
		if (Texto.getText().length() != 0){
			try {
				valor = Long.parseLong(Texto.getText());
			}catch(NumberFormatException ex){
				erro=false;
			}
		}
		if (Texto.getText().length()==0){
			erro=false;
		}
		if (erro){
			Erro[0]+= "\n"+nome+" não aceita números" ;
			OK=false;
		}
		return OK;
	}
}

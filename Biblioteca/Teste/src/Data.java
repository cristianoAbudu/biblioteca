package src;
import java.util.*;

public class Data {
	private GregorianCalendar calendario = new GregorianCalendar();
	private int dia,
				mes,
				ano;
	
	Data(){
		dia = calendario.get(Calendar.DAY_OF_MONTH);
		mes = calendario.get(Calendar.MONTH);
		ano = calendario.get(Calendar.YEAR);
	}
	
	public Data ConverterString(String data){
		Data Converte = new Data();
		Converte.dia=Integer.parseInt(data.substring(0,1));
		Converte.mes=Integer.parseInt(data.substring(3,4));
		Converte.ano=Integer.parseInt(data.substring(6,9));
		return Converte;
	}
	
	public Data Preenche(String dia, String mes, String ano){
		Data data = new Data();
		data.dia=Integer.parseInt(dia);
		data.mes=Integer.parseInt(mes);
		data.ano=Integer.parseInt(ano);
		return data;
	}
	
	public boolean ValidaData(Data data){ /*true se data vale, false se não vale*/
		boolean OK = true,
				bissexto = false; /*"os anos que divididos por 900
				 					apresentarem resto da divisão 
				 					igual a 200 ou 600 são bissextos"
				 					válido até 2800*/
				if (data.ano%400==200 | data.ano%400 == 600){
					bissexto = true;
				}
		
		
		if (data.dia>31){
			OK = false;
		}
		else if (data.dia>28 && data.mes==2 && bissexto){
			OK = false;
		}
		else if (data.dia==31 && 
					data.mes!=1 &&
					data.mes!=3 &&
					data.mes!=5 &&
					data.mes!=7 &&
					data.mes!=8 &&
					data.mes!=10 &&
					data.mes!=11
					){
			OK = false;
		}
		if (data.mes>12 | data.mes<1){
			OK = false;
		}
		Data ano = new Data();
		if (data.ano>ano.ano) {
			OK = false;
		}

		return OK;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	public int getDia() {
		return dia;
	}

	public void setDia(int dia) {
		this.dia = dia;
	}

	public int getMes() {
		return mes;
	}

	public void setMes(int mes) {
		this.mes = mes;
	}
	
}


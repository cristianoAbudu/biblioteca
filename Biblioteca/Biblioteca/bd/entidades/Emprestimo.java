package bd.entidades;
import java.util.Date;
import java.util.GregorianCalendar;

public class Emprestimo {
	private long carteirinha;

	String codigoItem;
	
	private Date devolverDia,
					emprestadoDia;
	
	public Emprestimo(Date devolucao){
		GregorianCalendar calendario;
		devolverDia=devolucao;
		emprestadoDia=new Date();
		System.out.println(emprestadoDia);
	}

	public long getCarteirinha() {
		return carteirinha;
	}

	public void setCarteirinha(long carteirinha) {
		this.carteirinha = carteirinha;
	}

	public String getCodigoItem() {
		return codigoItem;
	}

	public void setCodigoItem(String codigoitem2) {
		this.codigoItem = codigoitem2;
	}

	public Date getDevolverDia() {
		return devolverDia;
	}

	public Date getEmprestadoDia() {
		return emprestadoDia;
	}

	public void setDevolverDia(Date devolverDia) {
		this.devolverDia = devolverDia;
	}

	public void setEmprestadoDia(Date emprestadoDia) {
		this.emprestadoDia = emprestadoDia;
	}
	
	

}

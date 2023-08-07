package util;

import java.awt.Component;
import java.awt.Dimension;
import java.awt.Toolkit;

import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JInternalFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextField;


public class BibliotecaFuncoes {
	
	public String formataNomeColuna(String nomeColuna){
		String formatada = "_NONE_";
		//System.out.println(nomeColuna);
		if (nomeColuna.equalsIgnoreCase("CODIGO")){
			formatada = "Código";
		}
		else{
			if (nomeColuna.equalsIgnoreCase("CARTEIRINHA")){
				formatada = "Carteirinha";
			}
			else{
				if (nomeColuna.equalsIgnoreCase("CODIGOITEM")){
					formatada = "Código do item";
				}
				else{
					if (nomeColuna.equalsIgnoreCase("DEVOLVERDIA")){
						formatada = "Data de devolução";
					}
					else{
						if (nomeColuna.equalsIgnoreCase("EMPRESTADODIA")){
							formatada = "Data de empréstimo";							
						}
						else{
							if (nomeColuna.equalsIgnoreCase("EMAIL")){
								formatada = "e-mail";
							}
							else{
								if (nomeColuna.equalsIgnoreCase("TITULO")){
									formatada = "Título";
								}
								else{
									formatada = nomeColuna.substring(0,1) + nomeColuna.substring(1).toLowerCase();
								}
							}
						}
					}
				}
			}
		}
		return formatada;		
	}
	
	public void dialogoInfo(String Info, String Titulo){
		JOptionPane.showMessageDialog(null,
				Info, Titulo, 
				JOptionPane.INFORMATION_MESSAGE);
	}
	public void dialogoErro(String Erro, String Titulo){
		JOptionPane.showMessageDialog(null,
				Erro,
				Titulo,
				JOptionPane.ERROR_MESSAGE);
	}
	
	public void dialogoErroPreenchimento(String Erro){
		JOptionPane.showMessageDialog(null,
				Erro,
				"Erro no preenchimento",
				JOptionPane.ERROR_MESSAGE);
	}
	
	/*public boolean validaCampoRg(JTextField jRg,
									String nome,
									String[] Erro){
			String  A, B, C, D, E, F, G, H, I;
			int		a, b, c, d, e, f, g, h, i,
					resul;
			boolean OK=true;
						
			if (jRg.getText().length()==12){
		 				 A = jRg.getText().substring(0);  
		                 B = jRg.getText().substring(1);  
		                 C = jRg.getText().substring(3);  
		                 D = jRg.getText().substring(4);  
		                 E = jRg.getText().substring(5);  
		                 F = jRg.getText().substring(7);  
		                 G = jRg.getText().substring(8);  
		                 H = jRg.getText().substring(9);  
		                 I = jRg.getText().substring(11);                
		                   
		                 a = Integer.parseInt(A);  
		                 b = Integer.parseInt(B);  
		                 c = Integer.parseInt(C);  
		                 d = Integer.parseInt(D);  
		                 e = Integer.parseInt(E);  
		                 f = Integer.parseInt(F);  
		                 g = Integer.parseInt(G);  
		                 h = Integer.parseInt(H);  
		                 i = Integer.parseInt(I);  
		                   
		                 resul = (((2*a)+(3*b)+(4*c)+(5*d)+(6*e)+(7*f)+(8*g)+(9*h)+(10*i))/11)%10;
		                 
		      if (resul!=0){
		    	  Erro[0]+= nome+" inválido.\n";
		    	  OK=false;
		      }
			}
			else{
				Erro[0]+= "Favor preencher "+nome+"\n";
				OK=false;
			}
			
			return OK;
		                 
	}*/
	
	public boolean validaCampoNumero(JTextField Numero,
			String nome,
			String[] Erro) {
		@SuppressWarnings("unused")
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
		 @SuppressWarnings("unused")
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
	
	public boolean validaCampoNumeroNaoObrigatorio(JTextField Texto,
			String nome,
			String[] Erro)
	{
			@SuppressWarnings("unused")
			long valor;
			boolean OK=true, erro=false;
			if (Texto.getText().length() != 0){
				try {
					valor = Long.parseLong(Texto.getText());
				}catch(NumberFormatException ex){
					erro=true;
				}
			}
			if (Texto.getText().length()==0)
			{
				erro=false;
			}
			if (erro){
				Erro[0]+= nome+" só aceita números\n" ;
				OK=false;
			}
			return OK;
	}
	
	public void centralizarJInteralFrame(
										JInternalFrame Iframe,
										JDesktopPane desktopPrincipal){
		int x, y;
		x = desktopPrincipal.getWidth() - Iframe.getWidth()>>1;
		y = desktopPrincipal.getHeight() - Iframe.getHeight()>>2;
		Iframe.setLocation(x, y);
	}
	
    public static void centerComponent(Component comp){
        Dimension screenDim = Toolkit.getDefaultToolkit().getScreenSize();
        Dimension compSize = comp.getSize();
        int centerX = (screenDim.width - compSize.width) >> 1;
        int centerY = (screenDim.height - compSize.height) >> 2;
        comp.setLocation(centerX, centerY);
    }
    
    public static void estilizarJFrame(JFrame jFrame_) {
        resolverProblemaResolucao(jFrame_);
        centerComponent(jFrame_);
        jFrame_.setIconImage(Toolkit.getDefaultToolkit().getImage("3.gif"));
    }
    
    private static void resolverProblemaResolucao(JFrame jFrame_) {
        Dimension screenDim = Toolkit.getDefaultToolkit().getScreenSize();
        int alturaMonitor = screenDim.height;
        int larguraMonitor = screenDim.width;
        Component jAux = jFrame_.getContentPane();
        int largura = jFrame_.getWidth();
        int altura = jFrame_.getHeight();
        if(jAux instanceof JPanel && (largura >= larguraMonitor-50 || altura >= alturaMonitor-50)) {
            JScrollPane _jScrollPane = new JScrollPane();
            jAux.setPreferredSize(new Dimension(largura, altura));
            _jScrollPane.setViewportView(jAux);
            jFrame_.setContentPane(_jScrollPane);
            if(largura >= larguraMonitor-50 && altura >= alturaMonitor-50) {
                jFrame_.setSize(larguraMonitor-50, alturaMonitor-50);
            }
            else {
                if(largura >= larguraMonitor-50) {
                    jFrame_.setSize(larguraMonitor-50, altura);
                }
                else {
                    jFrame_.setSize(largura, alturaMonitor-50);
                }
            }
        }
    }
}

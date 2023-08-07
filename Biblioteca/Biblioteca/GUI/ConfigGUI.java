package GUI;

import java.awt.Dimension;
import java.awt.Rectangle;
import java.awt.event.KeyEvent;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JInternalFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.ImageIcon;

import bd.DadosBd;

public class ConfigGUI {
	private DadosBd dadosBd = new DadosBd();  //  @jve:decl-index=0:

	private String ip = null;
	private String port = null;
	private String remoto = null;  //  @jve:decl-index=0:
	
	private JInternalFrame jFrame = null;  //  @jve:decl-index=0:visual-constraint="159,32"
	private JPanel jPanel = null;
	private JCheckBox jCheckBox = null;
	private JLabel jLabel = null;
	private JTextField jTextField = null;
	private JTextField jTextField1 = null;
	private JTextField jTextField2 = null;
	private JTextField jTextField3 = null;
	private JLabel jLabel1 = null;
	private JTextField jTextField4 = null;
	private JLabel jLabel2 = null;
	private JButton jButton = null;
	/**
	 * This method initializes jFrame	
	 * 	
	 * @return javax.swing.JInternalFrame	
	 */
	public JInternalFrame getJInternalFrame() {
		if (jFrame == null) {
			jFrame = new JInternalFrame();
			jFrame.setSize(new Dimension(240, 196));
			jFrame.setTitle("Dados da Conexão ao DB2");
			jFrame.setFrameIcon(new ImageIcon(getClass().getResource("/icones/server.gif")));
			jFrame.setContentPane(getJPanel());
			jFrame.setClosable(true);
		}
		return jFrame;
	}

	/**
	 * This method initializes jPanel	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJPanel() {
		if (jPanel == null) {
			jLabel2 = new JLabel();
			jLabel2.setBounds(new Rectangle(20, 80, 35, 20));
			jLabel2.setDisplayedMnemonic(KeyEvent.VK_UNDEFINED);
			jLabel2.setText("Port:");
			jLabel1 = new JLabel();
			jLabel1.setBounds(new Rectangle(20, 50, 20, 20));
			jLabel1.setText("IP:");
			jLabel = new JLabel();
			jLabel.setBounds(new Rectangle(45, 16, 95, 20));
			jLabel.setToolTipText("Marque está opção caso o Banco de Dados esteja instalado em outra máquina.");
			jLabel.setText("Acesso Remoto");
			jPanel = new JPanel();
			jPanel.setLayout(null);
			jPanel.add(jLabel, null);
			jPanel.add(getJTextField(), null);
			jPanel.add(getJTextField1(), null);
			jPanel.add(getJTextField2(), null);
			jPanel.add(getJTextField3(), null);
			jPanel.add(jLabel1, null);
			jPanel.add(getJTextField4(), null);
			jPanel.add(jLabel2, null);
			jPanel.add(getJButton(), null);
			jPanel.add(getJCheckBox(), null);
		}
		return jPanel;
	}

	/**
	 * This method initializes jCheckBox	
	 * 	
	 * @return javax.swing.JCheckBox	
	 */
	private JCheckBox getJCheckBox() {
		if (jCheckBox == null) {
			jCheckBox = new JCheckBox();
			jCheckBox.setBounds(new Rectangle(17, 15, 20, 17));
			if (remoto.equals("1")){
				remoto = "1";
				ip = dadosBd.getIp();
				carregaIpToTextField();
				ipFieldsSelectable(true);
				jCheckBox.setSelected(true);
			}
			else{
				remoto = "0";
				ip = "127.0.0.1";
				carregaIpToTextField();
				ipFieldsSelectable(false);
				jCheckBox.setSelected(false);	
			}
			jCheckBox.setToolTipText("Marque está opção caso o Banco de Dados esteja instalado em outra máquina.");
			jCheckBox.addItemListener(new java.awt.event.ItemListener() {
				public void itemStateChanged(java.awt.event.ItemEvent e) {
					if (jCheckBox.isSelected()){
						//carregar ip do registro
						remoto = "1";
						ip = dadosBd.getIp();
						carregaIpToTextField();
						ipFieldsSelectable(true);
						//jTextField4.setText(port);
					}
					else{
						//ip local 127.0.0.1
						remoto = "0";
						ip = "127.0.0.1";
						carregaIpToTextField();
						ipFieldsSelectable(false);
					}
					// TODO Auto-generated Event stub itemStateChanged()
					
				}
				
				
			});
		}
		return jCheckBox;
	}

	/**
	 * This method initializes jTextField	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextField() {
		if (jTextField == null) {
			jTextField = new JTextField();
			jTextField.setBounds(new Rectangle(50, 50, 35, 20));
			jTextField.setText("");
		}
		return jTextField;
	}

	/**
	 * This method initializes jTextField1	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextField1() {
		if (jTextField1 == null) {
			jTextField1 = new JTextField();
			jTextField1.setBounds(new Rectangle(95, 50, 35, 20));
		}
		return jTextField1;
	}

	/**
	 * This method initializes jTextField2	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextField2() {
		if (jTextField2 == null) {
			jTextField2 = new JTextField();
			jTextField2.setBounds(new Rectangle(140, 50, 35, 20));
		}
		return jTextField2;
	}

	/**
	 * This method initializes jTextField3	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextField3() {
		if (jTextField3 == null) {
			jTextField3 = new JTextField();
			jTextField3.setBounds(new Rectangle(185, 50, 35, 20));
		}
		return jTextField3;
	}

	/**
	 * This method initializes jTextField4	
	 * 	
	 * @return javax.swing.JTextField	
	 */
	private JTextField getJTextField4() {
		if (jTextField4 == null) {
			jTextField4 = new JTextField();
			jTextField4.setBounds(new Rectangle(65, 80, 55, 20));
			jTextField4.setText(port);
		}
		return jTextField4;
	}

	/**
	 * This method initializes jButton	
	 * 	
	 * @return javax.swing.JButton	
	 */
	private JButton getJButton() {
		if (jButton == null) {
			jButton = new JButton();
			jButton.setBounds(new Rectangle(55, 115, 110, 35));
			jButton.setText("Salvar");
			jButton.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					if (jCheckBox.isSelected()){
						if (validaCampoNumero(jTextField)){
							if(validaCampoNumero(jTextField1)){
								if(validaCampoNumero(jTextField2)){
									if(validaCampoNumero(jTextField3)){
										ip = jTextField.getText() + "." + jTextField1.getText() + "." + jTextField2.getText() + "." + jTextField3.getText();
									}
								}
							}
						}
					}
					else{
						ip = jTextField.getText() + "." + jTextField1.getText() + "." + jTextField2.getText() + "." + jTextField3.getText();
					}
					if(validaCampoNumero(jTextField4)){
						port = jTextField4.getText();
					}
					dadosBd.setIp(ip);
					dadosBd.setPort(port);
					dadosBd.setRemote(remoto);
					dadosBd.grava();
					JOptionPane.showMessageDialog(null, "Reinicie a Biblioteca para que as alterações tenham efeito.", "Conexão"
							, JOptionPane.INFORMATION_MESSAGE);
					getJInternalFrame().dispose();
				}
			});
		}
		return jButton;
	}
	
	public boolean validaCampoNumero(JTextField Numero) {
		@SuppressWarnings("unused")
		long valor;
		boolean OK=true;
		if (Numero.getText().length() != 0){
			try {
				valor = Long.parseLong(Numero.getText());
			}catch(NumberFormatException ex){
				Numero.grabFocus();
				OK=false;
			}
		}
		else{
			OK=false;
		}
		return OK;
	}

	public ConfigGUI() {
		ip = dadosBd.getIp();
		port = dadosBd.getPort();
		remoto = dadosBd.getRemote();
		
		getJInternalFrame();
		carregaIpToTextField();
	}
	
	/**
	 * Este método separa a variável "ip"
	 * nos TextFields responsáveis por sua
	 * exibição na GUI 
	 */
	private void carregaIpToTextField(){
		String[] temp = new String[4];
		String ipTemp = ip;
		for (int i=0; i<3; i++){
			try {
				temp [i] = ipTemp.substring(0, ipTemp.indexOf("."));
			}
			catch (Exception e){
				temp[i] = ipTemp;
			}
			if (i<2){
				ipTemp = ipTemp.substring(ipTemp.indexOf(".")+1, ipTemp.length());
			}
			else
			{
				ipTemp = ipTemp.substring(ipTemp.indexOf(".")+1);
			}
		}
		temp[3] = ipTemp;
		jTextField.setText(temp[0]);
		jTextField1.setText(temp[1]);
		jTextField2.setText(temp[2]);
		jTextField3.setText(temp[3]);
	}
	
	/**
	 * Este método muda o status de editável para
	 * todos os campos de entrada de texto que exibem
	 * as partes do Ip.
	 */
	private void ipFieldsSelectable(boolean b) {
		jTextField.setEditable(b);
		jTextField1.setEditable(b);
		jTextField2.setEditable(b);
		jTextField3.setEditable(b);
	}
}


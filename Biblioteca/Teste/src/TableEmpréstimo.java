package src;


import javax.swing.JWindow;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import java.awt.Dimension;
import javax.swing.JScrollPane;
import javax.swing.JTable;
public class TableEmpréstimo {

	private JWindow jWindow = null;  //  @jve:decl-index=0:visual-constraint="21,10"
	private JPanel jContentPane = null;
	private JWindow jWindow1 = null;  //  @jve:decl-index=0:visual-constraint="12,12"
	private JPanel jContentPane1 = null;
	private JScrollPane jScrollPane = null;
	private JTable jTable = null;

	/**
	 * This method initializes jWindow	
	 * 	
	 * @return javax.swing.JWindow	
	 */
	private JWindow getJWindow() {
		if (jWindow == null) {
			jWindow = new JWindow();
			jWindow.setContentPane(getJContentPane());
		}
		return jWindow;
	}

	/**
	 * This method initializes jContentPane	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane() {
		if (jContentPane == null) {
			jContentPane = new JPanel();
			jContentPane.setLayout(new BorderLayout());
		}
		return jContentPane;
	}

	/**
	 * This method initializes jWindow1	
	 * 	
	 * @return javax.swing.JWindow	
	 */
	private JWindow getJWindow1() {
		if (jWindow1 == null) {
			jWindow1 = new JWindow(getJWindow());
			jWindow1.setSize(new Dimension(477, 182));
			jWindow1.setContentPane(getJContentPane1());
		}
		return jWindow1;
	}

	/**
	 * This method initializes jContentPane1	
	 * 	
	 * @return javax.swing.JPanel	
	 */
	private JPanel getJContentPane1() {
		if (jContentPane1 == null) {
			jContentPane1 = new JPanel();
			jContentPane1.setLayout(new BorderLayout());
			jContentPane1.add(getJScrollPane(), BorderLayout.CENTER);
		}
		return jContentPane1;
	}

	/**
	 * This method initializes jScrollPane	
	 * 	
	 * @return javax.swing.JScrollPane	
	 */
	private JScrollPane getJScrollPane() {
		if (jScrollPane == null) {
			jScrollPane = new JScrollPane();
			jScrollPane.setViewportView(getJTable());
		}
		return jScrollPane;
	}

	/**
	 * This method initializes jTable	
	 * 	
	 * @return javax.swing.JTable	
	 */
	private JTable getJTable() {
		if (jTable == null) {
			jTable = new JTable();
		}
		return jTable;
	}

}

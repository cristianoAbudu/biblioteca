package util;
	

/**
 * PrefTest.java - A simple program to show top-level user preferences.
 * 1. Run the program and set some preferences.
 * 2. Stop the program.
 * 3. Rerun the program, and you'll see that it restores the preferences!
 *
 * @version 2004-04-18 Rodenbach, minor changes 2006-02-11
 * @author Fred Swartz
*/



import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

import java.util.prefs.Preferences;
import java.util.prefs.BackingStoreException;   //Note 1

/////////////////////////////////////////////////////////////////// PrefTest
class PrefTest extends JFrame {
    private JTextField _nameField = new JTextField(8);
    private JTextField _valueField= new JTextField(8);
    private JList      _prefList  = new JList(new String[] {});
    
    private Preferences _prefs;  // Holds the preferences from system.
    
    //========================================================== constructor
    /** Constructor for JFrame. */
    PrefTest() {
        _prefs = Preferences.userNodeForPackage(this.getClass());
        setListFromPrefs();
        
        //... Create and set attributes of widgets.
        JScrollPane scrollingList = new JScrollPane(_prefList);
        JButton newKeyButton      = new JButton("Put Key/Value");
        JButton clearButton       = new JButton("Clear All");
        JButton delSelectedButton = new JButton("Remove Selected");
        
        //... Set action listeners.            
        newKeyButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (_nameField.getText().length() > 0) {
                    _prefs.put(_nameField.getText(), _valueField.getText()); 
                    _nameField.setText("");   // Clear fields after saving.
                    _valueField.setText("");
                    setListFromPrefs();  // Update display
                } else {
                    _nameField.setText("Key?");
                }
            }});
            
        clearButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    _prefs.clear();
                    setListFromPrefs();  // Update display
                } catch (BackingStoreException ex) {
                    System.out.println(ex);
                }
            }});
            
        delSelectedButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String selection = (String)_prefList.getSelectedValue();
                if (selection != null) {
                    String key = selection.substring(0, selection.indexOf("="));
                    _prefs.remove(key);  // Remove the selected key.
                    setListFromPrefs();  // Update display
                }
            }});
            
        //... Subpanel for adding keys
        JPanel addPanel = new JPanel(new FlowLayout());
        addPanel.add(new JLabel("Key"));
        addPanel.add(_nameField);
        addPanel.add(new JLabel("Value"));
        addPanel.add(_valueField);
        addPanel.add(newKeyButton);
        
        //... Subpanel for removing keys
        JPanel removePanel = new JPanel(new FlowLayout());
        removePanel.add(delSelectedButton);
        removePanel.add(clearButton);
        
        //... Create a new content pane
        JPanel content = new JPanel(new BorderLayout());
        content.add(addPanel     , BorderLayout.NORTH);
        content.add(scrollingList, BorderLayout.CENTER);
        content.add(removePanel  , BorderLayout.SOUTH);
        
        //... Set the JFrame characteristics.
        this.setTitle(this.getClass().getName());
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setContentPane(content);
        this.pack();
    }//end constructor
    
    
    //===================================================== setListFromPrefs
    /** Get key value pairs from system, and display them. */
    private void setListFromPrefs() {
        try {
            String[] keys = _prefs.keys();    //Note 2
            for (int i=0; i<keys.length; i++) {
                keys[i] += "=" + _prefs.get(keys[i], "ERROR");
            }
            _prefList.setListData(keys);
        } catch (BackingStoreException ex) {
            JOptionPane.showMessageDialog(null, "No initial preferences");
        }
    }
    
    //================================================================= main
    public static void main(String[] args) {
        JFrame window = new PrefTest();
        window.setVisible(true);
    }

}

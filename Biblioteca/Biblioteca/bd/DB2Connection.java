package bd;
		import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.SQLWarning;
import java.sql.Statement;
		
		public class DB2Connection {
					
			static String url = "jdbc:db2:db2://192.168.0.101:50000/bib";	
			static String driver = "com.ibm.db2.jcc.DB2Driver";
			static String login = "db2inst1";
			static String passwd = "db2inst1";
			static Connection curConn = null;

		//*********************************************
		//* Main Method
		//*********************************************
		public static void main(String argv[]) throws IOException{
		
			String temp = "";
			System.out.println("SAMPLE DB2 ACCESS (app driver).\n");
			DB2Connection session = new DB2Connection();
			
		}
		
		//*********************************************
		//* DB2appProgram1 Method
		//*********************************************
		public DB2Connection() throws IOException{
		
			try {
				Class.forName(driver);
				curConn = DriverManager.getConnection(url, login, passwd);
				checkForWarnings(curConn.getWarnings ());
			}
			catch(java.lang.Exception ex) {
				System.out.println("url : " + url);
				System.out.println("login : " + login);
				System.out.println("passwd : " + passwd);
				ex.printStackTrace();
				return;
			}
			prepareQueries();
			finalize();
		}

		//*********************************************
		//* prepareQueries Method
		//*********************************************
		private void prepareQueries() throws IOException{
			int i = 1;
			String temp = "";
			String query = "";
			String results = "";
			System.out.println("Type 'quit' on a blank line to exit, or 'go' to execute the query.");
			do {
				System.out.print(i + "> ");				
				performQuery(query);
			} while(true);
		}
			
		//*********************************************
		//* performQuery Method
		//*********************************************
		private void performQuery(String sqlText) {
			boolean resultSetIsAvailable;
			boolean moreResultsAvailable;
			int i = 0;
			int res=0;
			try {
				Statement curStmt = curConn.createStatement();
				resultSetIsAvailable = curStmt.execute(sqlText);
				ResultSet rs = null;
				for (moreResultsAvailable = true; moreResultsAvailable; ) {
					checkForWarnings(curConn.getWarnings());
					if (resultSetIsAvailable) {
						if ((rs = curStmt.getResultSet()) != null) {							
							
							// we have a resultset
							checkForWarnings(curStmt.getWarnings());
							ResultSetMetaData rsmd = rs.getMetaData();
							int numCols = rsmd.getColumnCount();
							
							// display column headers
							for (i = 1; i <= numCols; i++) {
								if (i > 1) System.out.print(", ");
								System.out.print(rsmd.getColumnLabel(i));
							}
							System.out.println("");
							
							// step through the rows
							while (rs.next()) {
								
								// process the columns
								for (i = 1; i <= numCols; i++) {
									if (i > 1) System.out.print(", ");
									System.out.print(rs.getString(i));
								}
								System.out.println("");
							}
						}
					}
					else {
						if ((res = curStmt.getUpdateCount()) != -1) {
							// we have an updatecount
							System.out.println(res + " row(s) affected.");
						}
							// else no more results
						else {
							moreResultsAvailable = false;
						}
					}
					if (moreResultsAvailable) {
						resultSetIsAvailable = curStmt.getMoreResults();
					}
				}
				if (rs != null) rs.close();
					curStmt.close();
			}catch (SQLException ex) {			
				// Unexpected SQL exception.
				ex.printStackTrace ();
			}
			catch (java.lang.Exception ex) {
				// Got some other type of exception. Dump it.
				ex.printStackTrace ();
			}
		}
		
		
		//*********************************************
		//* checkForWarnings Method
		//*********************************************
		private static void checkForWarnings (SQLWarning warn) throws SQLException	{
			
			while (warn != null) {
				System.out.println(warn);
				warn = warn.getNextWarning();
			}
		}
		
		//*********************************************
		//* finalize Method
		//*********************************************
		protected void finalize(){		
			try {
				curConn.close();
			}
			catch (SQLException ex) { }
		}
}	
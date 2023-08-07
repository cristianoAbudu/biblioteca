/**
 * 
 */
package pagecode;

import commonj.sdo.DataObject;
import com.ibm.websphere.sdo.access.connections.ConnectionManager;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapperFactory;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapper;
import com.ibm.websphere.sdo.mediator.JDBCMediator;
import com.ibm.websphere.sdo.mediator.exception.MediatorException;
import com.ibm.websphere.sdo.mediator.jdbc.JDBCMediatorFactory;
import java.sql.Connection;
import com.ibm.faces.component.html.HtmlScriptCollector;
import javax.faces.component.html.HtmlForm;
import javax.faces.component.html.HtmlInputText;
import javax.faces.component.html.HtmlMessages;
import com.ibm.faces.component.html.HtmlCommandExButton;

/**
 * @author Programador
 *
 */
public class Editar_emprestimo extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_emprestimo_updateParameters;
	protected JDBCMediator bib_emprestimo_updateMediator;
	private static final String bib_emprestimo_update_metadataFileName = "/WEB-INF/wdo/bib_emprestimo_update.xml";
	protected static final String[] bib_emprestimo_updateArgNames = { "paramCODIGO" };
	protected static final String[] bib_emprestimo_updateArgValues = { "#{param.CODIGO}" };
	protected DataObject bib_emprestimo_update;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlForm form1;
	protected HtmlInputText textCodigo1;
	protected HtmlInputText textCarteirinha1;
	protected HtmlInputText textCodigoitem1;
	protected HtmlInputText textDevolverdia1;
	protected HtmlInputText textEmprestadodia1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_emprestimo_updateUpdateAction1;
	protected HtmlCommandExButton buttonDoBib_emprestimo_updateDeleteAction1;
	protected ConnectionWrapper getSDOConnectionWrapper() {
		if (SDOConnectionWrapper == null) {
			try {
				Connection con = ConnectionManager
						.createJDBCConnection(SDOConnection_name);
				SDOConnectionWrapper = ConnectionWrapperFactory.soleInstance
						.createConnectionWrapper(con);
			} catch (Throwable e) {
				logException(e);
			}
		}
		return SDOConnectionWrapper;
	}
	/** 
	 * @action id=bib_emprestimo_update
	 */
	public String doBib_emprestimo_updateUpdateAction() {
		try {
			getBib_emprestimo_updateMediator().applyChanges(
					getRootDataObject(getBib_emprestimo_update()));
		} catch (Throwable e) {
			logException(e);
		} finally {
			try {
				if (SDOConnectionWrapper != null) {
					SDOConnectionWrapper.getConnection().close();
					SDOConnectionWrapper = null;
				}
			} catch (Throwable e1) {
				logException(e1);
			}
			if (bib_emprestimo_updateMediator != null) {
				bib_emprestimo_updateMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @action id=bib_emprestimo_update
	 */
	public String doBib_emprestimo_updateDeleteAction() {
		try {
			DataObject root = getRootDataObject(getBib_emprestimo_update());
			getBib_emprestimo_update().delete();
			getBib_emprestimo_updateMediator().applyChanges(root);
		} catch (Throwable e) {
			logException(e);
		} finally {
			try {
				if (SDOConnectionWrapper != null) {
					SDOConnectionWrapper.getConnection().close();
					SDOConnectionWrapper = null;
				}
			} catch (Throwable e1) {
				logException(e1);
			}
			if (bib_emprestimo_updateMediator != null) {
				bib_emprestimo_updateMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_emprestimo_update
	 */
	public DataObject getBib_emprestimo_updateParameters() {
		if (bib_emprestimo_updateParameters == null) {
			try {
				bib_emprestimo_updateParameters = getBib_emprestimo_updateMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_emprestimo_updateParameters;
	}
	protected JDBCMediator getBib_emprestimo_updateMediator() {
		if (bib_emprestimo_updateMediator == null) {
			try {
				bib_emprestimo_updateMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_emprestimo_update_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_emprestimo_update_metadataFileName),
						bib_emprestimo_updateMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_emprestimo_updateMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_emprestimo_updateMediator;
	}
	/** 
	 * This method was created in order to retrieve existing data.  To create new data:
	 *   DataObject graph = getBib_emprestimo_updateMediator().getEmptyGraph();
	 *   bib_emprestimo_update = graph.createDataObject(0);  
	 *
	 * @action id=bib_emprestimo_update
	 */
	public String doBib_emprestimo_updateFetchAction() {
		try {
			resolveParams(getBib_emprestimo_updateParameters(),
					bib_emprestimo_updateArgNames,
					bib_emprestimo_updateArgValues,
					"bib_emprestimo_update_params_cache");
			DataObject graph = getBib_emprestimo_updateMediator().getGraph(
					getBib_emprestimo_updateParameters());
			bib_emprestimo_update = (DataObject) graph.getList(0).get(0);
		} catch (Throwable e) {
			logException(e);
		} finally {
			try {
				if (SDOConnectionWrapper != null) {
					SDOConnectionWrapper.getConnection().close();
					SDOConnectionWrapper = null;
				}
			} catch (Throwable e1) {
				logException(e1);
			}
			if (bib_emprestimo_updateMediator != null) {
				bib_emprestimo_updateMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_emprestimo_update.xml
	 * @methodEntry id=bib_emprestimo_update/paramBean=bib_emprestimo_update/action=bib_emprestimo_update
	 * @action FILL
	 */
	public DataObject getBib_emprestimo_update() {
		if (bib_emprestimo_update == null) {
			doBib_emprestimo_updateFetchAction();
		}
		return bib_emprestimo_update;
	}
	protected HtmlScriptCollector getScriptCollector1() {
		if (scriptCollector1 == null) {
			scriptCollector1 = (HtmlScriptCollector) findComponentInRoot("scriptCollector1");
		}
		return scriptCollector1;
	}
	protected HtmlForm getForm1() {
		if (form1 == null) {
			form1 = (HtmlForm) findComponentInRoot("form1");
		}
		return form1;
	}
	protected HtmlInputText getTextCodigo1() {
		if (textCodigo1 == null) {
			textCodigo1 = (HtmlInputText) findComponentInRoot("textCodigo1");
		}
		return textCodigo1;
	}
	protected HtmlInputText getTextCarteirinha1() {
		if (textCarteirinha1 == null) {
			textCarteirinha1 = (HtmlInputText) findComponentInRoot("textCarteirinha1");
		}
		return textCarteirinha1;
	}
	protected HtmlInputText getTextCodigoitem1() {
		if (textCodigoitem1 == null) {
			textCodigoitem1 = (HtmlInputText) findComponentInRoot("textCodigoitem1");
		}
		return textCodigoitem1;
	}
	protected HtmlInputText getTextDevolverdia1() {
		if (textDevolverdia1 == null) {
			textDevolverdia1 = (HtmlInputText) findComponentInRoot("textDevolverdia1");
		}
		return textDevolverdia1;
	}
	protected HtmlInputText getTextEmprestadodia1() {
		if (textEmprestadodia1 == null) {
			textEmprestadodia1 = (HtmlInputText) findComponentInRoot("textEmprestadodia1");
		}
		return textEmprestadodia1;
	}
	protected HtmlMessages getMessages1() {
		if (messages1 == null) {
			messages1 = (HtmlMessages) findComponentInRoot("messages1");
		}
		return messages1;
	}
	protected HtmlCommandExButton getButtonDoBib_emprestimo_updateUpdateAction1() {
		if (buttonDoBib_emprestimo_updateUpdateAction1 == null) {
			buttonDoBib_emprestimo_updateUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_emprestimo_updateUpdateAction1");
		}
		return buttonDoBib_emprestimo_updateUpdateAction1;
	}
	protected HtmlCommandExButton getButtonDoBib_emprestimo_updateDeleteAction1() {
		if (buttonDoBib_emprestimo_updateDeleteAction1 == null) {
			buttonDoBib_emprestimo_updateDeleteAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_emprestimo_updateDeleteAction1");
		}
		return buttonDoBib_emprestimo_updateDeleteAction1;
	}
	public String doButton1Action() {
		return "Cancela";
	}

}
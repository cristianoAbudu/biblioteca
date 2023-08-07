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
public class Editar_item extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_atualizaParameters;
	protected JDBCMediator bib_atualizaMediator;
	private static final String bib_atualiza_metadataFileName = "/WEB-INF/wdo/bib_atualiza.xml";
	protected static final String[] bib_atualizaArgNames = { "paramCODIGO" };
	protected static final String[] bib_atualizaArgValues = { "#{param.CODIGO}" };
	protected DataObject bib_atualiza;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlForm form1;
	protected HtmlInputText textTitulo1;
	protected HtmlInputText textAutor1;
	protected HtmlInputText textTipo1;
	protected HtmlInputText textIdioma1;
	protected HtmlInputText textEditora1;
	protected HtmlInputText textAno1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_atualizaUpdateAction1;
	protected HtmlCommandExButton buttonDoBib_atualizaDeleteAction1;
	protected HtmlInputText textCodigo1;
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
	 * @action id=bib_atualiza
	 */
	public String doBib_atualizaUpdateAction() {
		try {
			getBib_atualizaMediator().applyChanges(
					getRootDataObject(getBib_atualiza()));
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
			if (bib_atualizaMediator != null) {
				bib_atualizaMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @action id=bib_atualiza
	 */
	public String doBib_atualizaDeleteAction() {
		try {
			DataObject root = getRootDataObject(getBib_atualiza());
			getBib_atualiza().delete();
			getBib_atualizaMediator().applyChanges(root);
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
			if (bib_atualizaMediator != null) {
				bib_atualizaMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_atualiza
	 */
	public DataObject getBib_atualizaParameters() {
		if (bib_atualizaParameters == null) {
			try {
				bib_atualizaParameters = getBib_atualizaMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_atualizaParameters;
	}
	protected JDBCMediator getBib_atualizaMediator() {
		if (bib_atualizaMediator == null) {
			try {
				bib_atualizaMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_atualiza_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_atualiza_metadataFileName),
						bib_atualizaMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_atualizaMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_atualizaMediator;
	}
	/** 
	 * This method was created in order to retrieve existing data.  To create new data:
	 *   DataObject graph = getBib_atualizaMediator().getEmptyGraph();
	 *   bib_atualiza = graph.createDataObject(0);  
	 *
	 * @action id=bib_atualiza
	 */
	public String doBib_atualizaFetchAction() {
		try {
			resolveParams(getBib_atualizaParameters(), bib_atualizaArgNames,
					bib_atualizaArgValues, "bib_atualiza_params_cache");
			DataObject graph = getBib_atualizaMediator().getGraph(
					getBib_atualizaParameters());
			bib_atualiza = (DataObject) graph.getList(0).get(0);
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
			if (bib_atualizaMediator != null) {
				bib_atualizaMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_atualiza.xml
	 * @methodEntry id=bib_atualiza/paramBean=bib_atualiza/action=bib_atualiza
	 * @action FILL
	 */
	public DataObject getBib_atualiza() {
		if (bib_atualiza == null) {
			doBib_atualizaFetchAction();
		}
		return bib_atualiza;
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
	protected HtmlInputText getTextTitulo1() {
		if (textTitulo1 == null) {
			textTitulo1 = (HtmlInputText) findComponentInRoot("textTitulo1");
		}
		return textTitulo1;
	}
	protected HtmlInputText getTextAutor1() {
		if (textAutor1 == null) {
			textAutor1 = (HtmlInputText) findComponentInRoot("textAutor1");
		}
		return textAutor1;
	}
	protected HtmlInputText getTextTipo1() {
		if (textTipo1 == null) {
			textTipo1 = (HtmlInputText) findComponentInRoot("textTipo1");
		}
		return textTipo1;
	}
	protected HtmlInputText getTextIdioma1() {
		if (textIdioma1 == null) {
			textIdioma1 = (HtmlInputText) findComponentInRoot("textIdioma1");
		}
		return textIdioma1;
	}
	protected HtmlInputText getTextEditora1() {
		if (textEditora1 == null) {
			textEditora1 = (HtmlInputText) findComponentInRoot("textEditora1");
		}
		return textEditora1;
	}
	protected HtmlInputText getTextAno1() {
		if (textAno1 == null) {
			textAno1 = (HtmlInputText) findComponentInRoot("textAno1");
		}
		return textAno1;
	}
	protected HtmlMessages getMessages1() {
		if (messages1 == null) {
			messages1 = (HtmlMessages) findComponentInRoot("messages1");
		}
		return messages1;
	}
	protected HtmlCommandExButton getButtonDoBib_atualizaUpdateAction1() {
		if (buttonDoBib_atualizaUpdateAction1 == null) {
			buttonDoBib_atualizaUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_atualizaUpdateAction1");
		}
		return buttonDoBib_atualizaUpdateAction1;
	}
	protected HtmlCommandExButton getButtonDoBib_atualizaDeleteAction1() {
		if (buttonDoBib_atualizaDeleteAction1 == null) {
			buttonDoBib_atualizaDeleteAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_atualizaDeleteAction1");
		}
		return buttonDoBib_atualizaDeleteAction1;
	}
	protected HtmlInputText getTextCodigo1() {
		if (textCodigo1 == null) {
			textCodigo1 = (HtmlInputText) findComponentInRoot("textCodigo1");
		}
		return textCodigo1;
	}

}
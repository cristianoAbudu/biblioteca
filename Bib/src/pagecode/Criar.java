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
public class Criar extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_criaEmprestimoParameters;
	protected JDBCMediator bib_criaEmprestimoMediator;
	private static final String bib_criaEmprestimo_metadataFileName = "/WEB-INF/wdo/bib_criaEmprestimo.xml";
	protected static final String[] bib_criaEmprestimoArgNames = {};
	protected static final String[] bib_criaEmprestimoArgValues = {};
	protected DataObject bib_criaEmprestimo;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlForm form1;
	protected HtmlInputText textCodigo1;
	protected HtmlInputText textCarteirinha1;
	protected HtmlInputText textCodigoitem1;
	protected HtmlInputText textDevolverdia1;
	protected HtmlInputText textEmprestadodia1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_criaEmprestimoUpdateAction1;
	protected DataObject bib_criaUsuarioParameters;
	protected JDBCMediator bib_criaUsuarioMediator;
	private static final String bib_criaUsuario_metadataFileName = "/WEB-INF/wdo/bib_criaUsuario.xml";
	protected static final String[] bib_criaUsuarioArgNames = {};
	protected static final String[] bib_criaUsuarioArgValues = {};
	protected DataObject bib_criaUsuario;
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
	 * @action id=bib_criaEmprestimo
	 */
	public String doBib_criaEmprestimoUpdateAction() {
		try {
			getBib_criaEmprestimoMediator().applyChanges(
					getRootDataObject(getBib_criaEmprestimo()));
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
			if (bib_criaEmprestimoMediator != null) {
				bib_criaEmprestimoMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_criaEmprestimo
	 */
	public DataObject getBib_criaEmprestimoParameters() {
		if (bib_criaEmprestimoParameters == null) {
			try {
				bib_criaEmprestimoParameters = getBib_criaEmprestimoMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_criaEmprestimoParameters;
	}
	protected JDBCMediator getBib_criaEmprestimoMediator() {
		if (bib_criaEmprestimoMediator == null) {
			try {
				bib_criaEmprestimoMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_criaEmprestimo_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_criaEmprestimo_metadataFileName),
						bib_criaEmprestimoMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_criaEmprestimoMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_criaEmprestimoMediator;
	}
	/** 
	 * This method was created in order to create new data.  To retrieve existing data:
	 *   DataObject graph = getBib_criaEmprestimoMediator().getGraph( getBib_criaEmprestimoParameters() );
	 *   bib_criaEmprestimo = (DataObject)graph.getList(0).get(0);  
	 *
	 * @action id=bib_criaEmprestimo
	 */
	public String doBib_criaEmprestimoCreateAction() {
		try {
			resolveParams(getBib_criaEmprestimoParameters(),
					bib_criaEmprestimoArgNames, bib_criaEmprestimoArgValues,
					"bib_criaEmprestimo_params_cache");
			DataObject graph = getBib_criaEmprestimoMediator().getEmptyGraph();
			bib_criaEmprestimo = graph.createDataObject(0);
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
			if (bib_criaEmprestimoMediator != null) {
				bib_criaEmprestimoMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_criaEmprestimo.xml
	 * @methodEntry id=bib_criaEmprestimo/paramBean=bib_criaEmprestimo/action=bib_criaEmprestimo
	 * @action CREATE
	 */
	public DataObject getBib_criaEmprestimo() {
		if (bib_criaEmprestimo == null) {
			doBib_criaEmprestimoCreateAction();
		}
		return bib_criaEmprestimo;
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
	protected HtmlCommandExButton getButtonDoBib_criaEmprestimoUpdateAction1() {
		if (buttonDoBib_criaEmprestimoUpdateAction1 == null) {
			buttonDoBib_criaEmprestimoUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_criaEmprestimoUpdateAction1");
		}
		return buttonDoBib_criaEmprestimoUpdateAction1;
	}
	/** 
	 * @action id=bib_criaUsuario
	 */
	public String doBib_criaUsuarioUpdateAction() {
		try {
			getBib_criaUsuarioMediator().applyChanges(
					getRootDataObject(getBib_criaUsuario()));
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
			if (bib_criaUsuarioMediator != null) {
				bib_criaUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_criaUsuario
	 */
	public DataObject getBib_criaUsuarioParameters() {
		if (bib_criaUsuarioParameters == null) {
			try {
				bib_criaUsuarioParameters = getBib_criaUsuarioMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_criaUsuarioParameters;
	}
	protected JDBCMediator getBib_criaUsuarioMediator() {
		if (bib_criaUsuarioMediator == null) {
			try {
				bib_criaUsuarioMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_criaUsuario_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_criaUsuario_metadataFileName),
						bib_criaUsuarioMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_criaUsuarioMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_criaUsuarioMediator;
	}
	/** 
	 * This method was created in order to create new data.  To retrieve existing data:
	 *   DataObject graph = getBib_criaUsuarioMediator().getGraph( getBib_criaUsuarioParameters() );
	 *   bib_criaUsuario = (DataObject)graph.getList(0).get(0);  
	 *
	 * @action id=bib_criaUsuario
	 */
	public String doBib_criaUsuarioCreateAction() {
		try {
			resolveParams(getBib_criaUsuarioParameters(),
					bib_criaUsuarioArgNames, bib_criaUsuarioArgValues,
					"bib_criaUsuario_params_cache");
			DataObject graph = getBib_criaUsuarioMediator().getEmptyGraph();
			bib_criaUsuario = graph.createDataObject(0);
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
			if (bib_criaUsuarioMediator != null) {
				bib_criaUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_criaUsuario.xml
	 * @methodEntry id=bib_criaUsuario/paramBean=bib_criaUsuario/action=bib_criaUsuario
	 * @action CREATE
	 */
	public DataObject getBib_criaUsuario() {
		if (bib_criaUsuario == null) {
			doBib_criaUsuarioCreateAction();
		}
		return bib_criaUsuario;
	}

}
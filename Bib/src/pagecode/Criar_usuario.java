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
import javax.faces.component.html.HtmlInputTextarea;
import javax.faces.component.html.HtmlMessages;
import com.ibm.faces.component.html.HtmlCommandExButton;

/**
 * @author Programador
 *
 */
public class Criar_usuario extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_criaUsuarioParameters;
	protected JDBCMediator bib_criaUsuarioMediator;
	private static final String bib_criaUsuario_metadataFileName = "/WEB-INF/wdo/bib_criaUsuario.xml";
	protected static final String[] bib_criaUsuarioArgNames = {};
	protected static final String[] bib_criaUsuarioArgValues = {};
	protected DataObject bib_criaUsuario;
	protected DataObject bib_criarUsuarioParameters;
	protected JDBCMediator bib_criarUsuarioMediator;
	private static final String bib_criarUsuario_metadataFileName = "/WEB-INF/wdo/bib_criarUsuario.xml";
	protected static final String[] bib_criarUsuarioArgNames = {};
	protected static final String[] bib_criarUsuarioArgValues = {};
	protected DataObject bib_criarUsuario;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlForm form1;
	protected HtmlInputText textCarteirinha1;
	protected HtmlInputText textNome1;
	protected HtmlInputText textSexo1;
	protected HtmlInputText textEndereco1;
	protected HtmlInputText textCidade1;
	protected HtmlInputText textEstado1;
	protected HtmlInputText textEmail1;
	protected HtmlInputTextarea textareaObservacao1;
	protected HtmlInputText textTelefone1;
	protected HtmlInputText textNascimento1;
	protected HtmlInputText textDiacadastro1;
	protected HtmlInputText textRg1;
	protected HtmlInputText textCpf1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_criarUsuarioUpdateAction1;
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
	/** 
	 * @action id=bib_criarUsuario
	 */
	public String doBib_criarUsuarioUpdateAction() {
		try {
			getBib_criarUsuarioMediator().applyChanges(
					getRootDataObject(getBib_criarUsuario()));
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
			if (bib_criarUsuarioMediator != null) {
				bib_criarUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_criarUsuario
	 */
	public DataObject getBib_criarUsuarioParameters() {
		if (bib_criarUsuarioParameters == null) {
			try {
				bib_criarUsuarioParameters = getBib_criarUsuarioMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_criarUsuarioParameters;
	}
	protected JDBCMediator getBib_criarUsuarioMediator() {
		if (bib_criarUsuarioMediator == null) {
			try {
				bib_criarUsuarioMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_criarUsuario_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_criarUsuario_metadataFileName),
						bib_criarUsuarioMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_criarUsuarioMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_criarUsuarioMediator;
	}
	/** 
	 * This method was created in order to create new data.  To retrieve existing data:
	 *   DataObject graph = getBib_criarUsuarioMediator().getGraph( getBib_criarUsuarioParameters() );
	 *   bib_criarUsuario = (DataObject)graph.getList(0).get(0);  
	 *
	 * @action id=bib_criarUsuario
	 */
	public String doBib_criarUsuarioCreateAction() {
		try {
			resolveParams(getBib_criarUsuarioParameters(),
					bib_criarUsuarioArgNames, bib_criarUsuarioArgValues,
					"bib_criarUsuario_params_cache");
			DataObject graph = getBib_criarUsuarioMediator().getEmptyGraph();
			bib_criarUsuario = graph.createDataObject(0);
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
			if (bib_criarUsuarioMediator != null) {
				bib_criarUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_criarUsuario.xml
	 * @methodEntry id=bib_criarUsuario/paramBean=bib_criarUsuario/action=bib_criarUsuario
	 * @action CREATE
	 */
	public DataObject getBib_criarUsuario() {
		if (bib_criarUsuario == null) {
			doBib_criarUsuarioCreateAction();
		}
		return bib_criarUsuario;
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
	protected HtmlInputText getTextCarteirinha1() {
		if (textCarteirinha1 == null) {
			textCarteirinha1 = (HtmlInputText) findComponentInRoot("textCarteirinha1");
		}
		return textCarteirinha1;
	}
	protected HtmlInputText getTextNome1() {
		if (textNome1 == null) {
			textNome1 = (HtmlInputText) findComponentInRoot("textNome1");
		}
		return textNome1;
	}
	protected HtmlInputText getTextSexo1() {
		if (textSexo1 == null) {
			textSexo1 = (HtmlInputText) findComponentInRoot("textSexo1");
		}
		return textSexo1;
	}
	protected HtmlInputText getTextEndereco1() {
		if (textEndereco1 == null) {
			textEndereco1 = (HtmlInputText) findComponentInRoot("textEndereco1");
		}
		return textEndereco1;
	}
	protected HtmlInputText getTextCidade1() {
		if (textCidade1 == null) {
			textCidade1 = (HtmlInputText) findComponentInRoot("textCidade1");
		}
		return textCidade1;
	}
	protected HtmlInputText getTextEstado1() {
		if (textEstado1 == null) {
			textEstado1 = (HtmlInputText) findComponentInRoot("textEstado1");
		}
		return textEstado1;
	}
	protected HtmlInputText getTextEmail1() {
		if (textEmail1 == null) {
			textEmail1 = (HtmlInputText) findComponentInRoot("textEmail1");
		}
		return textEmail1;
	}
	protected HtmlInputTextarea getTextareaObservacao1() {
		if (textareaObservacao1 == null) {
			textareaObservacao1 = (HtmlInputTextarea) findComponentInRoot("textareaObservacao1");
		}
		return textareaObservacao1;
	}
	protected HtmlInputText getTextTelefone1() {
		if (textTelefone1 == null) {
			textTelefone1 = (HtmlInputText) findComponentInRoot("textTelefone1");
		}
		return textTelefone1;
	}
	protected HtmlInputText getTextNascimento1() {
		if (textNascimento1 == null) {
			textNascimento1 = (HtmlInputText) findComponentInRoot("textNascimento1");
		}
		return textNascimento1;
	}
	protected HtmlInputText getTextDiacadastro1() {
		if (textDiacadastro1 == null) {
			textDiacadastro1 = (HtmlInputText) findComponentInRoot("textDiacadastro1");
		}
		return textDiacadastro1;
	}
	protected HtmlInputText getTextRg1() {
		if (textRg1 == null) {
			textRg1 = (HtmlInputText) findComponentInRoot("textRg1");
		}
		return textRg1;
	}
	protected HtmlInputText getTextCpf1() {
		if (textCpf1 == null) {
			textCpf1 = (HtmlInputText) findComponentInRoot("textCpf1");
		}
		return textCpf1;
	}
	protected HtmlMessages getMessages1() {
		if (messages1 == null) {
			messages1 = (HtmlMessages) findComponentInRoot("messages1");
		}
		return messages1;
	}
	protected HtmlCommandExButton getButtonDoBib_criarUsuarioUpdateAction1() {
		if (buttonDoBib_criarUsuarioUpdateAction1 == null) {
			buttonDoBib_criarUsuarioUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_criarUsuarioUpdateAction1");
		}
		return buttonDoBib_criarUsuarioUpdateAction1;
	}

}
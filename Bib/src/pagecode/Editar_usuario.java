/**
 * 
 */
package pagecode;

import com.ibm.faces.component.html.HtmlScriptCollector;
import commonj.sdo.DataObject;
import com.ibm.websphere.sdo.access.connections.ConnectionManager;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapperFactory;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapper;
import com.ibm.websphere.sdo.mediator.JDBCMediator;
import com.ibm.websphere.sdo.mediator.exception.MediatorException;
import com.ibm.websphere.sdo.mediator.jdbc.JDBCMediatorFactory;
import java.sql.Connection;
import javax.faces.component.html.HtmlForm;
import javax.faces.component.html.HtmlOutputText;
import javax.faces.component.html.HtmlInputText;
import javax.faces.component.html.HtmlMessages;
import com.ibm.faces.component.html.HtmlCommandExButton;

/**
 * @author Programador
 *
 */
public class Editar_usuario extends PageCodeBase {

	protected HtmlScriptCollector scriptCollector1;
	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_atualizaUsuarioParameters;
	protected JDBCMediator bib_atualizaUsuarioMediator;
	private static final String bib_atualizaUsuario_metadataFileName = "/WEB-INF/wdo/bib_atualizaUsuario.xml";
	protected static final String[] bib_atualizaUsuarioArgNames = { "paramCARTEIRINHA" };
	protected static final String[] bib_atualizaUsuarioArgValues = { "#{param.CARTEIRINHA}" };
	protected DataObject bib_atualizaUsuario;
	protected HtmlForm form1;
	protected HtmlOutputText textCarteirinha1;
	protected HtmlInputText textNome1;
	protected HtmlInputText textSexo1;
	protected HtmlInputText textEndereco1;
	protected HtmlInputText textCidade1;
	protected HtmlInputText textEstado1;
	protected HtmlInputText textEmail1;
	protected HtmlInputText textObservacao1;
	protected HtmlInputText textTelefone1;
	protected HtmlInputText textNascimento1;
	protected HtmlInputText textDiacadastro1;
	protected HtmlInputText textRg1;
	protected HtmlInputText textCpf1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_atualizaUsuarioUpdateAction1;
	protected HtmlCommandExButton buttonDoBib_atualizaUsuarioDeleteAction1;
	protected HtmlScriptCollector getScriptCollector1() {
		if (scriptCollector1 == null) {
			scriptCollector1 = (HtmlScriptCollector) findComponentInRoot("scriptCollector1");
		}
		return scriptCollector1;
	}
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
	 * @action id=bib_atualizaUsuario
	 */
	public String doBib_atualizaUsuarioUpdateAction() {
		try {
			getBib_atualizaUsuarioMediator().applyChanges(
					getRootDataObject(getBib_atualizaUsuario()));
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
			if (bib_atualizaUsuarioMediator != null) {
				bib_atualizaUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @action id=bib_atualizaUsuario
	 */
	public String doBib_atualizaUsuarioDeleteAction() {
		try {
			DataObject root = getRootDataObject(getBib_atualizaUsuario());
			getBib_atualizaUsuario().delete();
			getBib_atualizaUsuarioMediator().applyChanges(root);
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
			if (bib_atualizaUsuarioMediator != null) {
				bib_atualizaUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_atualizaUsuario
	 */
	public DataObject getBib_atualizaUsuarioParameters() {
		if (bib_atualizaUsuarioParameters == null) {
			try {
				bib_atualizaUsuarioParameters = getBib_atualizaUsuarioMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_atualizaUsuarioParameters;
	}
	protected JDBCMediator getBib_atualizaUsuarioMediator() {
		if (bib_atualizaUsuarioMediator == null) {
			try {
				bib_atualizaUsuarioMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_atualizaUsuario_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_atualizaUsuario_metadataFileName),
						bib_atualizaUsuarioMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_atualizaUsuarioMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_atualizaUsuarioMediator;
	}
	/** 
	 * This method was created in order to retrieve existing data.  To create new data:
	 *   DataObject graph = getBib_atualizaUsuarioMediator().getEmptyGraph();
	 *   bib_atualizaUsuario = graph.createDataObject(0);  
	 *
	 * @action id=bib_atualizaUsuario
	 */
	public String doBib_atualizaUsuarioFetchAction() {
		try {
			resolveParams(getBib_atualizaUsuarioParameters(),
					bib_atualizaUsuarioArgNames, bib_atualizaUsuarioArgValues,
					"bib_atualizaUsuario_params_cache");
			DataObject graph = getBib_atualizaUsuarioMediator().getGraph(
					getBib_atualizaUsuarioParameters());
			bib_atualizaUsuario = (DataObject) graph.getList(0).get(0);
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
			if (bib_atualizaUsuarioMediator != null) {
				bib_atualizaUsuarioMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_atualizaUsuario.xml
	 * @methodEntry id=bib_atualizaUsuario/paramBean=bib_atualizaUsuario/action=bib_atualizaUsuario
	 * @action FILL
	 */
	public DataObject getBib_atualizaUsuario() {
		if (bib_atualizaUsuario == null) {
			doBib_atualizaUsuarioFetchAction();
		}
		return bib_atualizaUsuario;
	}
	protected HtmlForm getForm1() {
		if (form1 == null) {
			form1 = (HtmlForm) findComponentInRoot("form1");
		}
		return form1;
	}
	protected HtmlOutputText getTextCarteirinha1() {
		if (textCarteirinha1 == null) {
			textCarteirinha1 = (HtmlOutputText) findComponentInRoot("textCarteirinha1");
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
	protected HtmlInputText getTextObservacao1() {
		if (textObservacao1 == null) {
			textObservacao1 = (HtmlInputText) findComponentInRoot("textObservacao1");
		}
		return textObservacao1;
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
	protected HtmlCommandExButton getButtonDoBib_atualizaUsuarioUpdateAction1() {
		if (buttonDoBib_atualizaUsuarioUpdateAction1 == null) {
			buttonDoBib_atualizaUsuarioUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_atualizaUsuarioUpdateAction1");
		}
		return buttonDoBib_atualizaUsuarioUpdateAction1;
	}
	protected HtmlCommandExButton getButtonDoBib_atualizaUsuarioDeleteAction1() {
		if (buttonDoBib_atualizaUsuarioDeleteAction1 == null) {
			buttonDoBib_atualizaUsuarioDeleteAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_atualizaUsuarioDeleteAction1");
		}
		return buttonDoBib_atualizaUsuarioDeleteAction1;
	}

}
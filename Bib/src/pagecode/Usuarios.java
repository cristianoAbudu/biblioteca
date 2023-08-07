/**
 * 
 */
package pagecode;

import java.util.List;
import com.ibm.websphere.sdo.access.connections.ConnectionManager;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapperFactory;
import com.ibm.websphere.sdo.mediator.jdbc.ConnectionWrapper;
import com.ibm.websphere.sdo.mediator.JDBCMediator;
import com.ibm.websphere.sdo.mediator.exception.MediatorException;
import com.ibm.websphere.sdo.mediator.jdbc.JDBCMediatorFactory;
import commonj.sdo.DataObject;
import java.sql.Connection;
import com.ibm.faces.component.html.HtmlScriptCollector;
import com.ibm.faces.component.html.HtmlDataTableEx;
import com.ibm.faces.component.UIColumnEx;
import javax.faces.component.html.HtmlOutputText;
import com.ibm.faces.component.html.HtmlOutputLinkEx;
import javax.faces.component.UIParameter;
import com.ibm.faces.component.html.HtmlCommandExButton;
import javax.faces.component.html.HtmlForm;
import javax.faces.component.html.HtmlPanelGroup;
import com.ibm.faces.component.html.HtmlPanelDialog;
import javax.faces.component.html.HtmlInputText;
import javax.faces.component.html.HtmlMessages;

/**
 * @author Programador
 *
 */
public class Usuarios extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_usuariosParameters;
	protected JDBCMediator bib_usuariosMediator;
	private static final String bib_usuarios_metadataFileName = "/WEB-INF/wdo/bib_usuarios.xml";
	protected static final String[] bib_usuariosArgNames = {};
	protected static final String[] bib_usuariosArgValues = {};
	private static final int bib_usuariosTargetPageSize = -1;
	protected List bib_usuarios;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlDataTableEx tableEx1;
	protected UIColumnEx columnEx1;
	protected HtmlOutputText text1;
	protected HtmlOutputText text2;
	protected HtmlOutputText text3;
	protected HtmlOutputText text4;
	protected HtmlOutputText textCarteirinha1;
	protected UIColumnEx columnEx2;
	protected HtmlOutputText textNome1;
	protected UIColumnEx columnEx3;
	protected HtmlOutputText textEmail1;
	protected UIColumnEx columnEx4;
	protected HtmlOutputText textTelefone1;
	protected UIColumnEx column1;
	protected HtmlOutputText text5;
	protected HtmlOutputLinkEx linkEx1;
	protected UIParameter param1;
	protected HtmlCommandExButton buttonAddUsr;
	protected HtmlForm form1;
	protected HtmlPanelGroup group1;
	protected HtmlPanelDialog dialog1;
	protected HtmlCommandExButton button1;
	protected DataObject bib_criaUsuarioParameters;
	protected JDBCMediator bib_criaUsuarioMediator;
	private static final String bib_criaUsuario_metadataFileName = "/WEB-INF/wdo/bib_criaUsuario.xml";
	protected static final String[] bib_criaUsuarioArgNames = {};
	protected static final String[] bib_criaUsuarioArgValues = {};
	protected DataObject bib_criaUsuario;
	protected HtmlInputText textCarteirinha2;
	protected HtmlInputText textNome2;
	protected HtmlInputText textSexo1;
	protected HtmlInputText textEndereco1;
	protected HtmlInputText textCidade1;
	protected HtmlInputText textEstado1;
	protected HtmlInputText textEmail2;
	protected HtmlInputText textObservacao1;
	protected HtmlInputText textTelefone2;
	protected HtmlInputText textNascimento1;
	protected HtmlInputText textDiacadastro1;
	protected HtmlInputText textRg1;
	protected HtmlInputText textCpf1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_criaUsuarioUpdateAction1;
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
	 * @action id=bib_usuarios
	 */
	public String doBib_usuariosUpdateAction() {
		try {
			getBib_usuariosMediator().applyChanges(
					getRootDataObject(getBib_usuarios()));
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
			if (bib_usuariosMediator != null) {
				bib_usuariosMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_usuarios
	 */
	public DataObject getBib_usuariosParameters() {
		if (bib_usuariosParameters == null) {
			try {
				bib_usuariosParameters = getBib_usuariosMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_usuariosParameters;
	}
	protected JDBCMediator getBib_usuariosMediator() {
		if (bib_usuariosMediator == null) {
			try {
				bib_usuariosMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_usuarios_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_usuarios_metadataFileName),
						bib_usuariosMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_usuariosMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_usuariosMediator;
	}
	/** 
	 * @action id=bib_usuarios
	 */
	public String doBib_usuariosFetchAction() {
		try {
			resolveParams(getBib_usuariosParameters(), bib_usuariosArgNames,
					bib_usuariosArgValues, "bib_usuarios_params_cache");
			DataObject graph = getBib_usuariosMediator().getGraph(
					getBib_usuariosParameters());
			bib_usuarios = graph.getList(0);
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
			if (bib_usuariosMediator != null) {
				bib_usuariosMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_usuarios.xml
	 * @methodEntry id=bib_usuarios/paramBean=bib_usuarios/action=bib_usuarios
	 * @action FILL
	 */
	public List getBib_usuarios() {
		if (bib_usuarios == null) {
			doBib_usuariosFetchAction();
		}
		return bib_usuarios;
	}
	protected HtmlScriptCollector getScriptCollector1() {
		if (scriptCollector1 == null) {
			scriptCollector1 = (HtmlScriptCollector) findComponentInRoot("scriptCollector1");
		}
		return scriptCollector1;
	}
	protected HtmlDataTableEx getTableEx1() {
		if (tableEx1 == null) {
			tableEx1 = (HtmlDataTableEx) findComponentInRoot("tableEx1");
		}
		return tableEx1;
	}
	protected UIColumnEx getColumnEx1() {
		if (columnEx1 == null) {
			columnEx1 = (UIColumnEx) findComponentInRoot("columnEx1");
		}
		return columnEx1;
	}
	protected HtmlOutputText getText1() {
		if (text1 == null) {
			text1 = (HtmlOutputText) findComponentInRoot("text1");
		}
		return text1;
	}
	protected HtmlOutputText getText2() {
		if (text2 == null) {
			text2 = (HtmlOutputText) findComponentInRoot("text2");
		}
		return text2;
	}
	protected HtmlOutputText getText3() {
		if (text3 == null) {
			text3 = (HtmlOutputText) findComponentInRoot("text3");
		}
		return text3;
	}
	protected HtmlOutputText getText4() {
		if (text4 == null) {
			text4 = (HtmlOutputText) findComponentInRoot("text4");
		}
		return text4;
	}
	protected HtmlOutputText getTextCarteirinha1() {
		if (textCarteirinha1 == null) {
			textCarteirinha1 = (HtmlOutputText) findComponentInRoot("textCarteirinha1");
		}
		return textCarteirinha1;
	}
	protected UIColumnEx getColumnEx2() {
		if (columnEx2 == null) {
			columnEx2 = (UIColumnEx) findComponentInRoot("columnEx2");
		}
		return columnEx2;
	}
	protected HtmlOutputText getTextNome1() {
		if (textNome1 == null) {
			textNome1 = (HtmlOutputText) findComponentInRoot("textNome1");
		}
		return textNome1;
	}
	protected UIColumnEx getColumnEx3() {
		if (columnEx3 == null) {
			columnEx3 = (UIColumnEx) findComponentInRoot("columnEx3");
		}
		return columnEx3;
	}
	protected HtmlOutputText getTextEmail1() {
		if (textEmail1 == null) {
			textEmail1 = (HtmlOutputText) findComponentInRoot("textEmail1");
		}
		return textEmail1;
	}
	protected UIColumnEx getColumnEx4() {
		if (columnEx4 == null) {
			columnEx4 = (UIColumnEx) findComponentInRoot("columnEx4");
		}
		return columnEx4;
	}
	protected HtmlOutputText getTextTelefone1() {
		if (textTelefone1 == null) {
			textTelefone1 = (HtmlOutputText) findComponentInRoot("textTelefone1");
		}
		return textTelefone1;
	}
	protected UIColumnEx getColumn1() {
		if (column1 == null) {
			column1 = (UIColumnEx) findComponentInRoot("column1");
		}
		return column1;
	}
	protected HtmlOutputText getText5() {
		if (text5 == null) {
			text5 = (HtmlOutputText) findComponentInRoot("text5");
		}
		return text5;
	}
	protected HtmlOutputLinkEx getLinkEx1() {
		if (linkEx1 == null) {
			linkEx1 = (HtmlOutputLinkEx) findComponentInRoot("linkEx1");
		}
		return linkEx1;
	}
	protected UIParameter getParam1() {
		if (param1 == null) {
			param1 = (UIParameter) findComponentInRoot("param1");
		}
		return param1;
	}
	protected HtmlCommandExButton getButtonAddUsr() {
		if (buttonAddUsr == null) {
			buttonAddUsr = (HtmlCommandExButton) findComponentInRoot("buttonAddUsr");
		}
		return buttonAddUsr;
	}
	protected HtmlForm getForm1() {
		if (form1 == null) {
			form1 = (HtmlForm) findComponentInRoot("form1");
		}
		return form1;
	}
	protected HtmlPanelGroup getGroup1() {
		if (group1 == null) {
			group1 = (HtmlPanelGroup) findComponentInRoot("group1");
		}
		return group1;
	}
	protected HtmlPanelDialog getDialog1() {
		if (dialog1 == null) {
			dialog1 = (HtmlPanelDialog) findComponentInRoot("dialog1");
		}
		return dialog1;
	}
	protected HtmlCommandExButton getButton1() {
		if (button1 == null) {
			button1 = (HtmlCommandExButton) findComponentInRoot("button1");
		}
		return button1;
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
	protected HtmlInputText getTextCarteirinha2() {
		if (textCarteirinha2 == null) {
			textCarteirinha2 = (HtmlInputText) findComponentInRoot("textCarteirinha2");
		}
		return textCarteirinha2;
	}
	protected HtmlInputText getTextNome2() {
		if (textNome2 == null) {
			textNome2 = (HtmlInputText) findComponentInRoot("textNome2");
		}
		return textNome2;
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
	protected HtmlInputText getTextEmail2() {
		if (textEmail2 == null) {
			textEmail2 = (HtmlInputText) findComponentInRoot("textEmail2");
		}
		return textEmail2;
	}
	protected HtmlInputText getTextObservacao1() {
		if (textObservacao1 == null) {
			textObservacao1 = (HtmlInputText) findComponentInRoot("textObservacao1");
		}
		return textObservacao1;
	}
	protected HtmlInputText getTextTelefone2() {
		if (textTelefone2 == null) {
			textTelefone2 = (HtmlInputText) findComponentInRoot("textTelefone2");
		}
		return textTelefone2;
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
	protected HtmlCommandExButton getButtonDoBib_criaUsuarioUpdateAction1() {
		if (buttonDoBib_criaUsuarioUpdateAction1 == null) {
			buttonDoBib_criaUsuarioUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_criaUsuarioUpdateAction1");
		}
		return buttonDoBib_criaUsuarioUpdateAction1;
	}

}
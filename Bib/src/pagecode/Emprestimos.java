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
import com.ibm.faces.component.html.HtmlCommandExButton;
import javax.faces.component.html.HtmlForm;
import com.ibm.faces.component.html.HtmlPanelDialog;
import javax.faces.component.html.HtmlPanelGroup;
import javax.faces.component.html.HtmlInputText;
import javax.faces.component.html.HtmlMessages;
import java.lang.String;
import com.ibm.faces.component.html.HtmlOutputLinkEx;
import javax.faces.component.UIParameter;

/**
 * @author Programador
 *
 */
public class Emprestimos extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject bib_emprestimosParameters;
	protected JDBCMediator bib_emprestimosMediator;
	private static final String bib_emprestimos_metadataFileName = "/WEB-INF/wdo/bib_emprestimos.xml";
	protected static final String[] bib_emprestimosArgNames = {};
	protected static final String[] bib_emprestimosArgValues = {};
	private static final int bib_emprestimosTargetPageSize = -1;
	protected List bib_emprestimos;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlDataTableEx tableEx1;
	protected UIColumnEx columnEx1;
	protected HtmlOutputText text1;
	protected HtmlOutputText text2;
	protected HtmlOutputText text3;
	protected HtmlOutputText text4;
	protected HtmlOutputText text5;
	protected HtmlOutputText textCodigo1;
	protected UIColumnEx columnEx2;
	protected HtmlOutputText textCarteirinha1;
	protected UIColumnEx columnEx3;
	protected HtmlOutputText textCodigoitem1;
	protected UIColumnEx columnEx4;
	protected HtmlOutputText textDevolverdia1;
	protected UIColumnEx columnEx5;
	protected HtmlOutputText textEmprestadodia1;
	protected HtmlForm form1;
	protected HtmlCommandExButton buttonCriaEmp;
	protected DataObject bib_criaItemParameters;
	protected JDBCMediator bib_criaItemMediator;
	private static final String bib_criaItem_metadataFileName = "/WEB-INF/wdo/bib_criaItem.xml";
	protected static final String[] bib_criaItemArgNames = {};
	protected static final String[] bib_criaItemArgValues = {};
	protected DataObject bib_criaItem;
	protected HtmlPanelDialog dialogCriaEmp;
	protected HtmlPanelGroup group1;
	protected HtmlCommandExButton button1;
	protected DataObject bib_criaEmpParameters;
	protected JDBCMediator bib_criaEmpMediator;
	private static final String bib_criaEmp_metadataFileName = "/WEB-INF/wdo/bib_criaEmp.xml";
	protected static final String[] bib_criaEmpArgNames = {};
	protected static final String[] bib_criaEmpArgValues = {};
	protected DataObject bib_criaEmp;
	protected HtmlInputText textCodigo2;
	protected HtmlInputText textCarteirinha2;
	protected HtmlInputText textCodigoitem2;
	protected HtmlInputText textDevolverdia2;
	protected HtmlInputText textEmprestadodia2;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_criaEmpUpdateAction1;
	protected UIColumnEx column1;
	protected DataObject edita_empParameters;
	protected JDBCMediator edita_empMediator;
	private static final String edita_emp_metadataFileName = "/WEB-INF/wdo/edita_emp.xml";
	protected DataObject edita_emp;
	protected String codigo;
	protected static final String[] edita_empArgNames = { "paramcodigo" };
	protected static final String[] edita_empArgValues = { "#{param.codigo}" };
	protected HtmlOutputText text6;
	protected HtmlOutputLinkEx linkEx1;
	protected UIParameter param1;
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
	 * @action id=bib_emprestimos
	 */
	public String doBib_emprestimosUpdateAction() {
		try {
			getBib_emprestimosMediator().applyChanges(
					getRootDataObject(getBib_emprestimos()));
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
			if (bib_emprestimosMediator != null) {
				bib_emprestimosMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_emprestimos
	 */
	public DataObject getBib_emprestimosParameters() {
		if (bib_emprestimosParameters == null) {
			try {
				bib_emprestimosParameters = getBib_emprestimosMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_emprestimosParameters;
	}
	protected JDBCMediator getBib_emprestimosMediator() {
		if (bib_emprestimosMediator == null) {
			try {
				bib_emprestimosMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_emprestimos_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_emprestimos_metadataFileName),
						bib_emprestimosMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_emprestimosMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_emprestimosMediator;
	}
	/** 
	 * @action id=bib_emprestimos
	 */
	public String doBib_emprestimosFetchAction() {
		try {
			resolveParams(getBib_emprestimosParameters(),
					bib_emprestimosArgNames, bib_emprestimosArgValues,
					"bib_emprestimos_params_cache");
			DataObject graph = getBib_emprestimosMediator().getGraph(
					getBib_emprestimosParameters());
			bib_emprestimos = graph.getList(0);
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
			if (bib_emprestimosMediator != null) {
				bib_emprestimosMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_emprestimos.xml
	 * @methodEntry id=bib_emprestimos/paramBean=bib_emprestimos/action=bib_emprestimos
	 * @action FILL
	 */
	public List getBib_emprestimos() {
		if (bib_emprestimos == null) {
			doBib_emprestimosFetchAction();
		}
		return bib_emprestimos;
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
	protected HtmlOutputText getText5() {
		if (text5 == null) {
			text5 = (HtmlOutputText) findComponentInRoot("text5");
		}
		return text5;
	}
	protected HtmlOutputText getTextCodigo1() {
		if (textCodigo1 == null) {
			textCodigo1 = (HtmlOutputText) findComponentInRoot("textCodigo1");
		}
		return textCodigo1;
	}
	protected UIColumnEx getColumnEx2() {
		if (columnEx2 == null) {
			columnEx2 = (UIColumnEx) findComponentInRoot("columnEx2");
		}
		return columnEx2;
	}
	protected HtmlOutputText getTextCarteirinha1() {
		if (textCarteirinha1 == null) {
			textCarteirinha1 = (HtmlOutputText) findComponentInRoot("textCarteirinha1");
		}
		return textCarteirinha1;
	}
	protected UIColumnEx getColumnEx3() {
		if (columnEx3 == null) {
			columnEx3 = (UIColumnEx) findComponentInRoot("columnEx3");
		}
		return columnEx3;
	}
	protected HtmlOutputText getTextCodigoitem1() {
		if (textCodigoitem1 == null) {
			textCodigoitem1 = (HtmlOutputText) findComponentInRoot("textCodigoitem1");
		}
		return textCodigoitem1;
	}
	protected UIColumnEx getColumnEx4() {
		if (columnEx4 == null) {
			columnEx4 = (UIColumnEx) findComponentInRoot("columnEx4");
		}
		return columnEx4;
	}
	protected HtmlOutputText getTextDevolverdia1() {
		if (textDevolverdia1 == null) {
			textDevolverdia1 = (HtmlOutputText) findComponentInRoot("textDevolverdia1");
		}
		return textDevolverdia1;
	}
	protected UIColumnEx getColumnEx5() {
		if (columnEx5 == null) {
			columnEx5 = (UIColumnEx) findComponentInRoot("columnEx5");
		}
		return columnEx5;
	}
	protected HtmlOutputText getTextEmprestadodia1() {
		if (textEmprestadodia1 == null) {
			textEmprestadodia1 = (HtmlOutputText) findComponentInRoot("textEmprestadodia1");
		}
		return textEmprestadodia1;
	}
	protected HtmlForm getForm1() {
		if (form1 == null) {
			form1 = (HtmlForm) findComponentInRoot("form1");
		}
		return form1;
	}
	protected HtmlCommandExButton getButtonCriaEmp() {
		if (buttonCriaEmp == null) {
			buttonCriaEmp = (HtmlCommandExButton) findComponentInRoot("buttonCriaEmp");
		}
		return buttonCriaEmp;
	}
	/** 
	 * @action id=bib_criaItem
	 */
	public String doBib_criaItemUpdateAction() {
		try {
			getBib_criaItemMediator().applyChanges(
					getRootDataObject(getBib_criaItem()));
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
			if (bib_criaItemMediator != null) {
				bib_criaItemMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_criaItem
	 */
	public DataObject getBib_criaItemParameters() {
		if (bib_criaItemParameters == null) {
			try {
				bib_criaItemParameters = getBib_criaItemMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_criaItemParameters;
	}
	protected JDBCMediator getBib_criaItemMediator() {
		if (bib_criaItemMediator == null) {
			try {
				bib_criaItemMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_criaItem_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_criaItem_metadataFileName),
						bib_criaItemMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_criaItemMediator
					.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_criaItemMediator;
	}
	/** 
	 * This method was created in order to create new data.  To retrieve existing data:
	 *   DataObject graph = getBib_criaItemMediator().getGraph( getBib_criaItemParameters() );
	 *   bib_criaItem = (DataObject)graph.getList(0).get(0);  
	 *
	 * @action id=bib_criaItem
	 */
	public String doBib_criaItemCreateAction() {
		try {
			resolveParams(getBib_criaItemParameters(), bib_criaItemArgNames,
					bib_criaItemArgValues, "bib_criaItem_params_cache");
			DataObject graph = getBib_criaItemMediator().getEmptyGraph();
			bib_criaItem = graph.createDataObject(0);
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
			if (bib_criaItemMediator != null) {
				bib_criaItemMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_criaItem.xml
	 * @methodEntry id=bib_criaItem/paramBean=bib_criaItem/action=bib_criaItem
	 * @action CREATE
	 */
	public DataObject getBib_criaItem() {
		if (bib_criaItem == null) {
			doBib_criaItemCreateAction();
		}
		return bib_criaItem;
	}
	protected HtmlPanelDialog getDialogCriaEmp() {
		if (dialogCriaEmp == null) {
			dialogCriaEmp = (HtmlPanelDialog) findComponentInRoot("dialogCriaEmp");
		}
		return dialogCriaEmp;
	}
	protected HtmlPanelGroup getGroup1() {
		if (group1 == null) {
			group1 = (HtmlPanelGroup) findComponentInRoot("group1");
		}
		return group1;
	}
	protected HtmlCommandExButton getButton1() {
		if (button1 == null) {
			button1 = (HtmlCommandExButton) findComponentInRoot("button1");
		}
		return button1;
	}
	/** 
	 * @action id=bib_criaEmp
	 */
	public String doBib_criaEmpUpdateAction() {
		try {
			getBib_criaEmpMediator().applyChanges(
					getRootDataObject(getBib_criaEmp()));
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
			if (bib_criaEmpMediator != null) {
				bib_criaEmpMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=bib_criaEmp
	 */
	public DataObject getBib_criaEmpParameters() {
		if (bib_criaEmpParameters == null) {
			try {
				bib_criaEmpParameters = getBib_criaEmpMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return bib_criaEmpParameters;
	}
	protected JDBCMediator getBib_criaEmpMediator() {
		if (bib_criaEmpMediator == null) {
			try {
				bib_criaEmpMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(bib_criaEmp_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(bib_criaEmp_metadataFileName),
						bib_criaEmpMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			bib_criaEmpMediator.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return bib_criaEmpMediator;
	}
	/** 
	 * This method was created in order to create new data.  To retrieve existing data:
	 *   DataObject graph = getBib_criaEmpMediator().getGraph( getBib_criaEmpParameters() );
	 *   bib_criaEmp = (DataObject)graph.getList(0).get(0);  
	 *
	 * @action id=bib_criaEmp
	 */
	public String doBib_criaEmpCreateAction() {
		try {
			resolveParams(getBib_criaEmpParameters(), bib_criaEmpArgNames,
					bib_criaEmpArgValues, "bib_criaEmp_params_cache");
			DataObject graph = getBib_criaEmpMediator().getEmptyGraph();
			bib_criaEmp = graph.createDataObject(0);
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
			if (bib_criaEmpMediator != null) {
				bib_criaEmpMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/bib_criaEmp.xml
	 * @methodEntry id=bib_criaEmp/paramBean=bib_criaEmp/action=bib_criaEmp
	 * @action CREATE
	 */
	public DataObject getBib_criaEmp() {
		if (bib_criaEmp == null) {
			doBib_criaEmpCreateAction();
		}
		return bib_criaEmp;
	}
	protected HtmlInputText getTextCodigo2() {
		if (textCodigo2 == null) {
			textCodigo2 = (HtmlInputText) findComponentInRoot("textCodigo2");
		}
		return textCodigo2;
	}
	protected HtmlInputText getTextCarteirinha2() {
		if (textCarteirinha2 == null) {
			textCarteirinha2 = (HtmlInputText) findComponentInRoot("textCarteirinha2");
		}
		return textCarteirinha2;
	}
	protected HtmlInputText getTextCodigoitem2() {
		if (textCodigoitem2 == null) {
			textCodigoitem2 = (HtmlInputText) findComponentInRoot("textCodigoitem2");
		}
		return textCodigoitem2;
	}
	protected HtmlInputText getTextDevolverdia2() {
		if (textDevolverdia2 == null) {
			textDevolverdia2 = (HtmlInputText) findComponentInRoot("textDevolverdia2");
		}
		return textDevolverdia2;
	}
	protected HtmlInputText getTextEmprestadodia2() {
		if (textEmprestadodia2 == null) {
			textEmprestadodia2 = (HtmlInputText) findComponentInRoot("textEmprestadodia2");
		}
		return textEmprestadodia2;
	}
	protected HtmlMessages getMessages1() {
		if (messages1 == null) {
			messages1 = (HtmlMessages) findComponentInRoot("messages1");
		}
		return messages1;
	}
	protected HtmlCommandExButton getButtonDoBib_criaEmpUpdateAction1() {
		if (buttonDoBib_criaEmpUpdateAction1 == null) {
			buttonDoBib_criaEmpUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_criaEmpUpdateAction1");
		}
		return buttonDoBib_criaEmpUpdateAction1;
	}
	protected UIColumnEx getColumn1() {
		if (column1 == null) {
			column1 = (UIColumnEx) findComponentInRoot("column1");
		}
		return column1;
	}
	/** 
	 * @action id=edita_emp
	 */
	public String doEdita_empUpdateAction() {
		try {
			getEdita_empMediator().applyChanges(
					getRootDataObject(getEdita_emp()));
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
			if (edita_empMediator != null) {
				edita_empMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @action id=edita_emp
	 */
	public String doEdita_empDeleteAction() {
		try {
			DataObject root = getRootDataObject(getEdita_emp());
			getEdita_emp().delete();
			getEdita_empMediator().applyChanges(root);
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
			if (edita_empMediator != null) {
				edita_empMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=edita_emp
	 */
	public DataObject getEdita_empParameters() {
		if (edita_empParameters == null) {
			try {
				edita_empParameters = getEdita_empMediator()
						.getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return edita_empParameters;
	}
	protected JDBCMediator getEdita_empMediator() {
		if (edita_empMediator == null) {
			try {
				edita_empMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(edita_emp_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(edita_emp_metadataFileName),
						edita_empMediator.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			edita_empMediator.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return edita_empMediator;
	}
	/** 
	 * This method was created in order to retrieve existing data.  To create new data:
	 *   DataObject graph = getEdita_empMediator().getEmptyGraph();
	 *   edita_emp = graph.createDataObject(0);  
	 *
	 * @action id=edita_emp
	 */
	public String doEdita_empFetchAction() {
		try {
			resolveParams(getEdita_empParameters(), edita_empArgNames,
					edita_empArgValues, "edita_emp_params_cache");
			DataObject graph = getEdita_empMediator().getGraph(
					getEdita_empParameters());
			edita_emp = (DataObject) graph.getList(0).get(0);
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
			if (edita_empMediator != null) {
				edita_empMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/edita_emp.xml
	 * @methodEntry id=edita_emp/paramBean=edita_emp/action=edita_emp
	 * @action FILL
	 */
	public DataObject getEdita_emp() {
		if (edita_emp == null) {
			doEdita_empFetchAction();
		}
		return edita_emp;
	}
	public String getCodigo() {
		if (codigo == null) {
			codigo = new String();
		}
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String doButton2Action() {
		// Digite o código Java que é executado quando o componente é clicado
		codigo = getBib_emprestimos().get(2).toString();
		System.out.println("aaa");
		// TODO: Retornar a saída correspondente a uma regra de navegação
		return "";
	}
	protected HtmlOutputText getText6() {
		if (text6 == null) {
			text6 = (HtmlOutputText) findComponentInRoot("text6");
		}
		return text6;
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

}
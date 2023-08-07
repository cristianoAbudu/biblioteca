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
import com.ibm.faces.component.html.HtmlOutputLinkEx;
import javax.faces.component.UIParameter;
import com.ibm.faces.component.html.HtmlPanelBox;
import com.ibm.faces.component.html.HtmlPagerGoto;
import com.ibm.faces.component.html.HtmlPagerWeb;

/**
 * @author Programador
 *
 */
public class Itens extends PageCodeBase {

	private static final String SDOConnection_name = "BIB";
	private ConnectionWrapper SDOConnectionWrapper;
	protected DataObject itensParameters;
	protected JDBCMediator itensMediator;
	private static final String itens_metadataFileName = "/WEB-INF/wdo/itens.xml";
	protected static final String[] itensArgNames = {};
	protected static final String[] itensArgValues = {};
	private static final int itensTargetPageSize = -1;
	protected List itens;
	protected HtmlScriptCollector scriptCollector1;
	protected HtmlDataTableEx tableEx1;
	protected UIColumnEx columnEx1;
	protected HtmlOutputText text1;
	protected HtmlOutputText text2;
	protected HtmlOutputText text3;
	protected HtmlOutputText text4;
	protected HtmlOutputText text5;
	protected HtmlOutputText text6;
	protected HtmlOutputText textCodigo1;
	protected UIColumnEx columnEx2;
	protected HtmlOutputText textTitulo1;
	protected UIColumnEx columnEx3;
	protected HtmlOutputText textAutor1;
	protected UIColumnEx columnEx4;
	protected HtmlOutputText textTipo1;
	protected UIColumnEx columnEx5;
	protected HtmlOutputText textIdioma1;
	protected UIColumnEx columnEx6;
	protected HtmlOutputText textEmprestado1;
	protected HtmlCommandExButton buttonCriaItem;
	protected HtmlForm form1;
	protected HtmlPanelDialog dialog1;
	protected HtmlPanelGroup group1;
	protected HtmlCommandExButton button1;
	protected DataObject bib_criaItemParameters;
	protected JDBCMediator bib_criaItemMediator;
	private static final String bib_criaItem_metadataFileName = "/WEB-INF/wdo/bib_criaItem.xml";
	protected static final String[] bib_criaItemArgNames = {};
	protected static final String[] bib_criaItemArgValues = {};
	protected DataObject bib_criaItem;
	protected HtmlInputText textCodigo2;
	protected HtmlInputText textTitulo2;
	protected HtmlInputText textAutor2;
	protected HtmlInputText textTipo2;
	protected HtmlInputText textIdioma2;
	protected HtmlInputText textEditora1;
	protected HtmlInputText textAno1;
	protected HtmlMessages messages1;
	protected HtmlCommandExButton buttonDoBib_criaItemUpdateAction1;
	protected UIColumnEx column1;
	protected HtmlOutputText text7;
	protected HtmlOutputLinkEx linkEx1;
	protected UIParameter param1;
	protected HtmlPanelBox box1;
	protected HtmlPagerGoto goto1;
	protected HtmlPagerWeb web1;
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
	 * @action id=itens
	 */
	public String doItensUpdateAction() {
		try {
			getItensMediator().applyChanges(getRootDataObject(getItens()));
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
			if (itensMediator != null) {
				itensMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @paramBean id=itens
	 */
	public DataObject getItensParameters() {
		if (itensParameters == null) {
			try {
				itensParameters = getItensMediator().getParameterDataObject();
			} catch (MediatorException e) {
				logException(e);
			}
		}
		return itensParameters;
	}
	protected JDBCMediator getItensMediator() {
		if (itensMediator == null) {
			try {
				itensMediator = JDBCMediatorFactory.soleInstance
						.createMediator(
								getResourceInputStream(itens_metadataFileName),
								getSDOConnectionWrapper());
				initSchema(getRealPath(itens_metadataFileName), itensMediator
						.getSchema());
			} catch (Throwable e) {
				logException(e);
			}
		} else {
			itensMediator.setConnectionWrapper(getSDOConnectionWrapper());
		}
		return itensMediator;
	}
	/** 
	 * @action id=itens
	 */
	public String doItensFetchAction() {
		try {
			resolveParams(getItensParameters(), itensArgNames, itensArgValues,
					"itens_params_cache");
			DataObject graph = getItensMediator()
					.getGraph(getItensParameters());
			itens = graph.getList(0);
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
			if (itensMediator != null) {
				itensMediator.setConnectionWrapper(null);
			}
		}
		return "";
	}
	/** 
	 * @mediatorFactory com.ibm.etools.sdo.rdb.datahandlers.RelationalDataFactory
	 * @mediatorProperties metadataFileName=/WEB-INF/wdo/itens.xml
	 * @methodEntry id=itens/paramBean=itens/action=itens
	 * @action FILL
	 */
	public List getItens() {
		if (itens == null) {
			doItensFetchAction();
		}
		return itens;
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
	protected HtmlOutputText getText6() {
		if (text6 == null) {
			text6 = (HtmlOutputText) findComponentInRoot("text6");
		}
		return text6;
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
	protected HtmlOutputText getTextTitulo1() {
		if (textTitulo1 == null) {
			textTitulo1 = (HtmlOutputText) findComponentInRoot("textTitulo1");
		}
		return textTitulo1;
	}
	protected UIColumnEx getColumnEx3() {
		if (columnEx3 == null) {
			columnEx3 = (UIColumnEx) findComponentInRoot("columnEx3");
		}
		return columnEx3;
	}
	protected HtmlOutputText getTextAutor1() {
		if (textAutor1 == null) {
			textAutor1 = (HtmlOutputText) findComponentInRoot("textAutor1");
		}
		return textAutor1;
	}
	protected UIColumnEx getColumnEx4() {
		if (columnEx4 == null) {
			columnEx4 = (UIColumnEx) findComponentInRoot("columnEx4");
		}
		return columnEx4;
	}
	protected HtmlOutputText getTextTipo1() {
		if (textTipo1 == null) {
			textTipo1 = (HtmlOutputText) findComponentInRoot("textTipo1");
		}
		return textTipo1;
	}
	protected UIColumnEx getColumnEx5() {
		if (columnEx5 == null) {
			columnEx5 = (UIColumnEx) findComponentInRoot("columnEx5");
		}
		return columnEx5;
	}
	protected HtmlOutputText getTextIdioma1() {
		if (textIdioma1 == null) {
			textIdioma1 = (HtmlOutputText) findComponentInRoot("textIdioma1");
		}
		return textIdioma1;
	}
	protected UIColumnEx getColumnEx6() {
		if (columnEx6 == null) {
			columnEx6 = (UIColumnEx) findComponentInRoot("columnEx6");
		}
		return columnEx6;
	}
	protected HtmlOutputText getTextEmprestado1() {
		if (textEmprestado1 == null) {
			textEmprestado1 = (HtmlOutputText) findComponentInRoot("textEmprestado1");
		}
		return textEmprestado1;
	}
	protected HtmlCommandExButton getButtonCriaItem() {
		if (buttonCriaItem == null) {
			buttonCriaItem = (HtmlCommandExButton) findComponentInRoot("buttonCriaItem");
		}
		return buttonCriaItem;
	}
	protected HtmlForm getForm1() {
		if (form1 == null) {
			form1 = (HtmlForm) findComponentInRoot("form1");
		}
		return form1;
	}
	protected HtmlPanelDialog getDialog1() {
		if (dialog1 == null) {
			dialog1 = (HtmlPanelDialog) findComponentInRoot("dialog1");
		}
		return dialog1;
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
	protected HtmlInputText getTextCodigo2() {
		if (textCodigo2 == null) {
			textCodigo2 = (HtmlInputText) findComponentInRoot("textCodigo2");
		}
		return textCodigo2;
	}
	protected HtmlInputText getTextTitulo2() {
		if (textTitulo2 == null) {
			textTitulo2 = (HtmlInputText) findComponentInRoot("textTitulo2");
		}
		return textTitulo2;
	}
	protected HtmlInputText getTextAutor2() {
		if (textAutor2 == null) {
			textAutor2 = (HtmlInputText) findComponentInRoot("textAutor2");
		}
		return textAutor2;
	}
	protected HtmlInputText getTextTipo2() {
		if (textTipo2 == null) {
			textTipo2 = (HtmlInputText) findComponentInRoot("textTipo2");
		}
		return textTipo2;
	}
	protected HtmlInputText getTextIdioma2() {
		if (textIdioma2 == null) {
			textIdioma2 = (HtmlInputText) findComponentInRoot("textIdioma2");
		}
		return textIdioma2;
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
	protected HtmlCommandExButton getButtonDoBib_criaItemUpdateAction1() {
		if (buttonDoBib_criaItemUpdateAction1 == null) {
			buttonDoBib_criaItemUpdateAction1 = (HtmlCommandExButton) findComponentInRoot("buttonDoBib_criaItemUpdateAction1");
		}
		return buttonDoBib_criaItemUpdateAction1;
	}
	protected UIColumnEx getColumn1() {
		if (column1 == null) {
			column1 = (UIColumnEx) findComponentInRoot("column1");
		}
		return column1;
	}
	protected HtmlOutputText getText7() {
		if (text7 == null) {
			text7 = (HtmlOutputText) findComponentInRoot("text7");
		}
		return text7;
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
	protected HtmlPanelBox getBox1() {
		if (box1 == null) {
			box1 = (HtmlPanelBox) findComponentInRoot("box1");
		}
		return box1;
	}
	protected HtmlPagerGoto getGoto1() {
		if (goto1 == null) {
			goto1 = (HtmlPagerGoto) findComponentInRoot("goto1");
		}
		return goto1;
	}
	protected HtmlPagerWeb getWeb1() {
		if (web1 == null) {
			web1 = (HtmlPagerWeb) findComponentInRoot("web1");
		}
		return web1;
	}

}
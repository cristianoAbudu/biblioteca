<%-- jsf:pagecode language="java" location="/src/pagecode/Emprestimos.java" --%><%-- /jsf:pagecode --%>
<%@taglib uri="http://java.sun.com/jsf/core" prefix="f"%>
<%@taglib uri="http://java.sun.com/jsf/html" prefix="h"%>
<%@taglib uri="http://www.ibm.com/jsf/html_extended" prefix="hx"%>
<f:view>
	<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<%-- tpl:insert page="/theme/JSP-F-02_blue.jtpl" --%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@taglib uri="http://www.ibm.com/siteedit/sitelib" prefix="siteedit"%>
<html>
<head>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"	pageEncoding="ISO-8859-1"%>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Content-Style-Type" content="text/css">
<%-- tpl:put name="headarea" --%>
<title>emprestimos</title>
<meta name="GENERATOR" content="Rational Application Developer">
<link rel="stylesheet" type="text/css" href="theme/stylesheet.css" title="Style">
<script type="text/javascript">
function func_1(thisObj, thisEvent) {
//Utilize 'thisObj' para se referir diretamente a esse componente, em vez da palavra-chave 'this'
//Utilize 'thisEvent' para se referir ao evento gerado, em vez da palavra-chave 'event'

}</script><%-- /tpl:put --%>

<LINK rel="stylesheet" href="/Bib/theme/F_master_blue.css" type="text/css">

<!--  Folha de estilo correspondente para componentes JSF. Utilize-a no lugar de 'stylesheet.css' ou remova a referência -->
<LINK rel="stylesheet" href="/Bib/theme/F_stylesheet_blue.css" type="text/css">

<link rel="stylesheet" type="text/css"
	href="/Bib/theme/vertical-menu1.css">
</head>

<body>
<script language="JavaScript" src="/Bib/hxclient_v2_1.js"
	type="text/javascript"></script>
<div class="pageBox"><table class="pageTable" width="100%" border="0" cellspacing="0" cellpadding="0"><tbody>
<!-- início da barra superior -->
<tr>
	<td colspan="3" class="topBarBox">
		<div class="topBarContent"></div>
	</td>
</tr>
<!-- término da barra superior -->

<!-- início da área de cabeçalho principal -->
<tr valign="top">
	<td colspan="3"><div class="topAreaBox">
		<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0"><tr valign="top">
			<td>
				<div class="topAreaLogo"><a class="topLogoColor" href="/your_project/index.jsp">Biblioteca WEB</a><a href="#navskip"><IMG src="/Bib/theme/1x1.gif" alt="pule para o conteúdo principal da página" border="0" width="1" height="1"></a> </div>
			</td>
			<td>
				<!-- Área de navegação de cabeçalho secundário opcional.  Para utilizar:
      1.  Defina um grupo no Mapa de Navegação do Site
      2.  Configure a barra de navegação a seguir para usar o grupo como Grupo de Destino -->
				<siteedit:navbar spec="/Bib/theme/nav_vertical_list_head.jsp" group="group2"></siteedit:navbar>
				<!--  Término da área de navegação de cabeçalho secundário -->
			</td>
		</tr></table>
	</div></td>
</tr>
<!-- término da área de cabeçalho principal -->

<!-- início da área de conteúdo principal -->
<tr>

	<!--  início da área de navegação esquerda -->
	<td align="left" valign="top"><div class="leftNavBk"><div class="leftNavBotBk"><siteedit:navmenu
				startGroup="group" includeTop="false" type="verticalMenu"
				keepSelection="false" depth="5" startLevel="" styleClass="vmenu1" groupname="false"/></div>
	</div></td>
	<!--  término da área de navegação esquerda -->
	
	<!--  início da área do corpo principal  -->
	<td align="center" valign="middle" width="100%" colspan="2"><a name="navskip"><IMG border="0" src="/Bib/theme/1x1.gif" width="1" height="1" alt="Início do conteúdo da página"></a><div class="main">
<%-- tpl:put name="bodyarea" --%>
						<hx:scriptCollector id="scriptCollector1">
							<h:form id="form1" styleClass="form">
								
								<hx:dataTableEx id="tableEx1"
									value="#{pc_Emprestimos.bib_emprestimos}"
									var="varbib_emprestimos" styleClass="dataTableEx"
									headerClass="headerClass" footerClass="footerClass"
									rowClasses="rowClass1, rowClass2" columnClasses="columnClass1"
									border="0" cellpadding="2" cellspacing="0">
									<hx:columnEx id="columnEx1">
										<f:facet name="header">
											<h:outputText styleClass="outputText"
												value="Codigo do empréstimo:" id="text1"></h:outputText>
										</f:facet>
										<h:outputText id="textCodigo1"
											value="#{varbib_emprestimos.CODIGO}" styleClass="outputText">
											<hx:convertNumber />
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx3">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Codigo do item:"
												id="text3"></h:outputText>
										</f:facet>
										<h:outputText id="textCodigoitem1"
											value="#{varbib_emprestimos.CODIGOITEM}"
											styleClass="outputText">
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx2">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Carteirinha:"
												id="text2"></h:outputText>
										</f:facet>
										<h:outputText id="textCarteirinha1"
											value="#{varbib_emprestimos.CARTEIRINHA}"
											styleClass="outputText">
											<hx:convertNumber />
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx4">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Devolver dia:"
												id="text4"></h:outputText>
										</f:facet>
										<h:outputText id="textDevolverdia1"
											value="#{varbib_emprestimos.DEVOLVERDIA}"
											styleClass="outputText">
											<hx:convertDateTime />
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx5">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Emprestado dia:"
												id="text5"></h:outputText>
										</f:facet>
										<h:outputText id="textEmprestadodia1"
											value="#{varbib_emprestimos.EMPRESTADODIA}"
											styleClass="outputText">
											<hx:convertDateTime />
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="column1">
										<f:facet name="header">
										</f:facet>
										<hx:outputLinkEx id="linkEx1" styleClass="outputLinkEx"
											value="editar_emprestimo.faces">
											<h:outputText id="text6" styleClass="outputText"
												value="Editar/Remover"></h:outputText>
											<f:param name="CODIGO" id="param1"
												value="#{varbib_emprestimos.CODIGO}"></f:param>
										</hx:outputLinkEx>
									</hx:columnEx>
								</hx:dataTableEx>
								<br>
								
								<hx:commandExButton type="submit" value="Novo Empréstimo"
									id="buttonCriaEmp" styleClass="commandExButton"></hx:commandExButton>
								<hx:panelDialog type="modal" id="dialogCriaEmp"
									styleClass="panelDialog" for="buttonCriaEmp">
									<table>
										<tbody>
											<tr>
												<td align="left">Codigo:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCodigo2"
													value="#{pc_Emprestimos.bib_criaEmp.CODIGO}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Carteirinha:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCarteirinha2"
													value="#{pc_Emprestimos.bib_criaEmp.CARTEIRINHA}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Codigo do item:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCodigoitem2"
													value="#{pc_Emprestimos.bib_criaEmp.CODIGOITEM}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Devolver dia:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textDevolverdia2"
													value="#{pc_Emprestimos.bib_criaEmp.DEVOLVERDIA}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Emprestado dia:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textEmprestadodia2"
													value="#{pc_Emprestimos.bib_criaEmp.EMPRESTADODIA}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
										</tbody>
									</table>
									<h:messages styleClass="messages" id="messages1"></h:messages>
									<br />
									<hx:commandExButton id="buttonDoBib_criaEmpUpdateAction1"
										styleClass="commandExButton" type="submit" value="Submeter"
										action="#{pc_Emprestimos.doBib_criaEmpUpdateAction}">
									</hx:commandExButton>
									<hx:commandExButton id="button1" styleClass="commandExButton"
										type="reset" value="Cancelar">
										<hx:behavior event="onclick" behaviorAction="hide;stop"
											targetAction="dialog1"></hx:behavior>
									</hx:commandExButton>
									
									
									
									<h:panelGroup id="group1" styleClass="panelDialog_Footer">
										
									</h:panelGroup>
								</hx:panelDialog>
								</h:form>
						</hx:scriptCollector>
					<%-- /tpl:put --%>
	</div></td>
	<!--  término da área do corpo principal  -->
</tr>
<!-- término da área de conteúdo principal -->

<!-- Área de rodapé opcional.  Para usar o rodapé:
  1.  Defina um grupo no Mapa de Navegação do Site
  2.  Configure a barra de navegação a seguir para usar o grupo como Grupo de Destino
  3.  Configure os Dados do Usuário da barra de navegação para incluir o nome da empresa, os dados de direitos autorais, etc. -->
<tr>
	<td colspan="3"><siteedit:navbar spec="/Bib/theme/nav_horizontal_text_foot.jsp" group="group" uservalue="&copy; 2005 $Company-Name" targetlevel=""></siteedit:navbar></td>
</tr>
<!-- término da área de rodapé -->
</tbody></table></div>
<script language="JavaScript">hX_4.onPageLoad();</script>
</body>
</html>

<%-- /tpl:insert --%>
</f:view>
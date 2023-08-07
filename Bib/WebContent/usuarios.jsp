<%-- jsf:pagecode language="java" location="/src/pagecode/Usuarios.java" --%><%-- /jsf:pagecode --%>
<%@taglib uri="http://java.sun.com/jsf/core" prefix="f"%>
<%@taglib uri="http://java.sun.com/jsf/html" prefix="h"%>
<%@taglib uri="http://www.ibm.com/jsf/html_extended" prefix="hx"%>
<f:view>
<%-- tpl:insert page="/theme/JSP-F-02_blue.jtpl" --%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@taglib uri="http://www.ibm.com/siteedit/sitelib" prefix="siteedit"%>
<html>
<head>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"	pageEncoding="ISO-8859-1"%>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Content-Style-Type" content="text/css">
<%-- tpl:put name="headarea" --%>
<title>usuarios</title>
<meta name="GENERATOR" content="Rational Application Developer">
<link rel="stylesheet" type="text/css" href="theme/stylesheet.css" title="Style">
<%-- /tpl:put --%>

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
									value="#{pc_Usuarios.bib_usuarios}" var="varbib_usuarios"
									styleClass="dataTableEx" headerClass="headerClass"
									footerClass="footerClass" rowClasses="rowClass1, rowClass2"
									columnClasses="columnClass1" border="0" cellpadding="2"
									cellspacing="0">
									<hx:columnEx id="columnEx1">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Carteirinha"
												id="text1"></h:outputText>
										</f:facet>
										<h:outputText id="textCarteirinha1"
											value="#{varbib_usuarios.CARTEIRINHA}"
											styleClass="outputText">
											<hx:convertNumber />
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx2">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Nome" id="text2"></h:outputText>
										</f:facet>
										<h:outputText id="textNome1" value="#{varbib_usuarios.NOME}"
											styleClass="outputText">
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx3">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="E-mail"
												id="text3"></h:outputText>
										</f:facet>
										<h:outputText id="textEmail1" value="#{varbib_usuarios.EMAIL}"
											styleClass="outputText">
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="columnEx4">
										<f:facet name="header">
											<h:outputText styleClass="outputText" value="Telefone"
												id="text4"></h:outputText>
										</f:facet>
										<h:outputText id="textTelefone1"
											value="#{varbib_usuarios.TELEFONE}" styleClass="outputText">
										</h:outputText>
									</hx:columnEx>
									<hx:columnEx id="column1">
										<hx:outputLinkEx id="linkEx1" styleClass="outputLinkEx"
											value="editar_usuario.faces">
											<h:outputText id="text5" styleClass="outputText"
												value="Editar/Excluir"></h:outputText>
											<f:param name="CARTEIRINHA" id="param1"
												value="#{varbib_usuarios.CARTEIRINHA}"></f:param>
										</hx:outputLinkEx>
										<f:facet name="header">
										</f:facet>
									</hx:columnEx>
								</hx:dataTableEx>
								<hx:commandExButton type="submit" value="Novo Usuário"
									id="buttonAddUsr" styleClass="commandExButton"></hx:commandExButton>
								<hx:panelDialog type="modal" id="dialog1"
									styleClass="panelDialog" for="buttonAddUsr">
									<table>
										<tbody>
											<tr>
												<td align="left">Carteirinha:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCarteirinha2"
													value="#{pc_Usuarios.bib_criaUsuario.CARTEIRINHA}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Nome:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textNome2"
													value="#{pc_Usuarios.bib_criaUsuario.NOME}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Sexo:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textSexo1"
													value="#{pc_Usuarios.bib_criaUsuario.SEXO}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Endereco:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textEndereco1"
													value="#{pc_Usuarios.bib_criaUsuario.ENDERECO}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Cidade:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCidade1"
													value="#{pc_Usuarios.bib_criaUsuario.CIDADE}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Estado:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textEstado1"
													value="#{pc_Usuarios.bib_criaUsuario.ESTADO}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Email:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textEmail2"
													value="#{pc_Usuarios.bib_criaUsuario.EMAIL}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Observacao:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textObservacao1"
													value="#{pc_Usuarios.bib_criaUsuario.OBSERVACAO}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Telefone:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textTelefone2"
													value="#{pc_Usuarios.bib_criaUsuario.TELEFONE}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Nascimento:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textNascimento1"
													value="#{pc_Usuarios.bib_criaUsuario.NASCIMENTO}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Diacadastro:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textDiacadastro1"
													value="#{pc_Usuarios.bib_criaUsuario.DIACADASTRO}"
													styleClass="inputText">
													<hx:convertNumber />
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Rg:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textRg1"
													value="#{pc_Usuarios.bib_criaUsuario.RG}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
											<tr>
												<td align="left">Cpf:</td>
												<td style="width:5px">&nbsp;</td>
												<td><h:inputText id="textCpf1"
													value="#{pc_Usuarios.bib_criaUsuario.CPF}"
													styleClass="inputText">
												</h:inputText></td>
											</tr>
										</tbody>
									</table>
									<h:messages styleClass="messages" id="messages1"></h:messages>
									<br />
									<hx:commandExButton id="buttonDoBib_criaUsuarioUpdateAction1"
										styleClass="commandExButton" type="submit" value="Submeter"
										action="#{pc_Usuarios.doBib_criaUsuarioUpdateAction}">
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
</f:view>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
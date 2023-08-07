<%-- jsf:pagecode language="java" location="/src/pagecode/Criar_usuario.java" --%><%-- /jsf:pagecode --%><%@taglib uri="http://java.sun.com/jsf/core" prefix="f"%><f:view>
	<%@taglib uri="http://java.sun.com/jsf/html" prefix="h"%>
	<%@taglib uri="http://www.ibm.com/jsf/html_extended" prefix="hx"%>
	<%-- tpl:insert page="/theme/JSP-F-02_blue.jtpl" --%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@taglib uri="http://www.ibm.com/siteedit/sitelib" prefix="siteedit"%>
<html>
<head>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"	pageEncoding="ISO-8859-1"%>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Content-Style-Type" content="text/css">
<%-- tpl:put name="headarea" --%>
			<title>$Nome da Empresa: $Nome da P�gina</title>
			<link rel="stylesheet" type="text/css" href="theme/stylesheet.css"
				title="Style">
		<%-- /tpl:put --%>

<LINK rel="stylesheet" href="/Bib/theme/F_master_blue.css" type="text/css">

<!--  Folha de estilo correspondente para componentes JSF. Utilize-a no lugar de 'stylesheet.css' ou remova a refer�ncia -->
<LINK rel="stylesheet" href="/Bib/theme/F_stylesheet_blue.css" type="text/css">

<link rel="stylesheet" type="text/css"
	href="/Bib/theme/vertical-menu1.css">
</head>

<body>
<script language="JavaScript" src="/Bib/hxclient_v2_1.js"
	type="text/javascript"></script>
<div class="pageBox"><table class="pageTable" width="100%" border="0" cellspacing="0" cellpadding="0"><tbody>
<!-- in�cio da barra superior -->
<tr>
	<td colspan="3" class="topBarBox">
		<div class="topBarContent"></div>
	</td>
</tr>
<!-- t�rmino da barra superior -->

<!-- in�cio da �rea de cabe�alho principal -->
<tr valign="top">
	<td colspan="3"><div class="topAreaBox">
		<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0"><tr valign="top">
			<td>
				<div class="topAreaLogo"><a class="topLogoColor" href="/your_project/index.jsp">Biblioteca WEB</a><a href="#navskip"><IMG src="/Bib/theme/1x1.gif" alt="pule para o conte�do principal da p�gina" border="0" width="1" height="1"></a> </div>
			</td>
			<td>
				<!-- �rea de navega��o de cabe�alho secund�rio opcional.  Para utilizar:
      1.  Defina um grupo no Mapa de Navega��o do Site
      2.  Configure a barra de navega��o a seguir para usar o grupo como Grupo de Destino -->
				<siteedit:navbar spec="/Bib/theme/nav_vertical_list_head.jsp" group="group2"></siteedit:navbar>
				<!--  T�rmino da �rea de navega��o de cabe�alho secund�rio -->
			</td>
		</tr></table>
	</div></td>
</tr>
<!-- t�rmino da �rea de cabe�alho principal -->

<!-- in�cio da �rea de conte�do principal -->
<tr>

	<!--  in�cio da �rea de navega��o esquerda -->
	<td align="left" valign="top"><div class="leftNavBk"><div class="leftNavBotBk"><siteedit:navmenu
				startGroup="group" includeTop="false" type="verticalMenu"
				keepSelection="false" depth="5" startLevel="" styleClass="vmenu1" groupname="false"/></div>
	</div></td>
	<!--  t�rmino da �rea de navega��o esquerda -->
	
	<!--  in�cio da �rea do corpo principal  -->
	<td align="center" valign="middle" width="100%" colspan="2"><a name="navskip"><IMG border="0" src="/Bib/theme/1x1.gif" width="1" height="1" alt="In�cio do conte�do da p�gina"></a><div class="main">
<%-- tpl:put name="bodyarea" --%>
						<hx:scriptCollector id="scriptCollector1">
							<h:form id="form1" styleClass="form">
								<table>
									<tbody>
										<tr>
											<td align="left">Carteirinha:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textCarteirinha1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.CARTEIRINHA}"
												styleClass="inputText">
												<hx:convertNumber />
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Nome:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textNome1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.NOME}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Sexo:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textSexo1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.SEXO}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Endereco:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textEndereco1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.ENDERECO}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Cidade:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textCidade1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.CIDADE}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Estado:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textEstado1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.ESTADO}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Email:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textEmail1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.EMAIL}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Observac�es:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputTextarea id="textareaObservacao1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.OBSERVACAO}"
												styleClass="inputTextarea">
											</h:inputTextarea></td>
										</tr>
										<tr>
											<td align="left">Telefone:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textTelefone1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.TELEFONE}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Nascimento:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textNascimento1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.NASCIMENTO}"
												styleClass="inputText">
												<hx:convertNumber />
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Dia de Cadastro:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textDiacadastro1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.DIACADASTRO}"
												styleClass="inputText">
												<hx:convertNumber />
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Rg:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textRg1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.RG}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
										<tr>
											<td align="left">Cpf:</td>
											<td style="width:5px">&nbsp;</td>
											<td><h:inputText id="textCpf1"
												value="#{pc_Criar_usu�rio.bib_criarUsuario.CPF}"
												styleClass="inputText">
											</h:inputText></td>
										</tr>
									</tbody>
								</table>
								<h:messages styleClass="messages" id="messages1"></h:messages>
								<br />
								<hx:commandExButton id="buttonDoBib_criarUsuarioUpdateAction1"
									styleClass="commandExButton" type="submit" value="Submeter"
									action="#{pc_Criar_usu�rio.doBib_criarUsuarioUpdateAction}">
								</hx:commandExButton>
							</h:form></hx:scriptCollector>
					<%-- /tpl:put --%>
	</div></td>
	<!--  t�rmino da �rea do corpo principal  -->
</tr>
<!-- t�rmino da �rea de conte�do principal -->

<!-- �rea de rodap� opcional.  Para usar o rodap�:
  1.  Defina um grupo no Mapa de Navega��o do Site
  2.  Configure a barra de navega��o a seguir para usar o grupo como Grupo de Destino
  3.  Configure os Dados do Usu�rio da barra de navega��o para incluir o nome da empresa, os dados de direitos autorais, etc. -->
<tr>
	<td colspan="3"><siteedit:navbar spec="/Bib/theme/nav_horizontal_text_foot.jsp" group="group" uservalue="&copy; 2005 $Company-Name" targetlevel=""></siteedit:navbar></td>
</tr>
<!-- t�rmino da �rea de rodap� -->
</tbody></table></div>
<script language="JavaScript">hX_4.onPageLoad();</script>
</body>
</html>

<%-- /tpl:insert --%>
</f:view>

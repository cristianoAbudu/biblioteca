<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:useBean id="sitenav" type="com.ibm.etools.siteedit.sitelib.core.SiteNavBean" scope="request"/>
<%@ page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8" %>
<HTML>
<BODY>
<table border="0" cellspacing="0" cellpadding="0" class="${sitenav.navclass}"><tbody>
<c:forEach var="item" items="${sitenav.items}" begin="0" step="1" varStatus="status">
	<c:choose>
		<c:when test="${item.self || (item.ancestor && !status.first)}">
			<tr valign="middle"><td class="${sitenav.navclass}TD_sel" style="${sitenav.navstyle}"><c:out value='<a href="${item.href}">${item.label}</a>' escapeXml='false'/></td></tr>
		</c:when>
		<c:when test="${item.group}">
			<tr valign="middle"><td class="${sitenav.navclass}TD" style="${sitenav.navstyle}"><c:out value='<span> ${item.label}:</span>' escapeXml='false'/></td></tr>
		</c:when>
		<c:otherwise>
			<tr valign="middle"><td class="${sitenav.navclass}TD" style="${sitenav.navstyle}"><c:out value='<a href="${item.href}">${item.label}</a>' escapeXml='false'/></td></tr>
		</c:otherwise>
	</c:choose>
</c:forEach>
</tbody></table>
</BODY>
</HTML>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:useBean id="sitenav" type="com.ibm.etools.siteedit.sitelib.core.SiteNavBean" scope="request"/>
<%@ page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8" %>
<HTML>
<BODY>
<c:forEach var="top" items="${sitenav.tops}">
	<c:if test="${!top.item.self}">
		<table border="0" cellspacing="0" cellpadding="0" class="${sitenav.navclass}"><tbody>
		<c:forEach var="node" items="${top.children}">
			<c:if test="${node.item.ancestor}">
				<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_root"><span style="${sitenav.navstyle}">${node.item.label}</span></td></tr>' escapeXml='false'/>
			</c:if>
			<c:if test="${0 < node.childcount}">
				<c:forEach var="node1" items="${node.children}">
					<c:choose>
						<c:when test="${node1.item.group}">
							<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L2"><span style="${sitenav.navstyle}"><b>${node1.item.label}</b></span></td></tr>' escapeXml='false'/>
						</c:when>
						<c:otherwise>
							<c:choose>
								<c:when test="${node1.item.self}">
									<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L2"><a href="${node1.item.href}" style="${sitenav.navstyle}"><span class="${sitenav.navclass}TD_Selected">${node1.item.label}&nbsp;&#0187;</span></a></td></tr>' escapeXml='false'/>
								</c:when>
								<c:otherwise>
									<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L2"><a href="${node1.item.href}" style="${sitenav.navstyle}">${node1.item.label}</a></td></tr>' escapeXml='false'/>
								</c:otherwise>
							</c:choose>
							<c:if test="${0 < node1.childcount && !node.item.self}">
								<c:forEach var="node2" items="${node1.children}">
									<c:choose>
										<c:when test="${node2.item.group}">
											<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L3"><span style="${sitenav.navstyle}"><b>${node2.item.label}</b></span></td></tr>' escapeXml='false'/>
										</c:when>
										<c:otherwise>
											<c:choose>
												<c:when test="${node2.item.self}">
													<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L3"><a href="${node2.item.href}" style="${sitenav.navstyle}"><span class="${sitenav.navclass}TD_Selected">${node2.item.label}&nbsp;&#0187;</span></a></td></tr>' escapeXml='false'/>
												</c:when>
												<c:otherwise>
													<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L3"><a href="${node2.item.href}" style="${sitenav.navstyle}">${node2.item.label}</a></td></tr>' escapeXml='false'/>
												</c:otherwise>
											</c:choose>
											<c:if test="${0 < node2.childcount && !node1.item.self}">
												<c:forEach var="node3" items="${node2.children}">
													<c:choose>
														<c:when test="${node3.item.group}">
															<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L4"><span style="${sitenav.navstyle}"><b>${node3.item.label}</b></span></td></tr>' escapeXml='false'/>
														</c:when>
														<c:otherwise>
															<c:choose>
																<c:when test="${node3.item.self}">
																	<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L4"><a href="${node3.item.href}" style="${sitenav.navstyle}"><span class="${sitenav.navclass}TD_Selected">${node3.item.label}&nbsp;&#0187;</span></a></td></tr>' escapeXml='false'/>
																</c:when>
																<c:otherwise>
																	<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L4"><a href="${node3.item.href}" style="${sitenav.navstyle}">${node3.item.label}</a></td></tr>' escapeXml='false'/>
																</c:otherwise>
															</c:choose>
															<c:if test="${0 < node3.childcount && !node2.item.self}">
																<c:forEach var="node4" items="${node3.children}">
																	<c:choose>
																		<c:when test="${node4.item.group}">
																			<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L5"><span style="${sitenav.navstyle}"><b>${node4.item.label}</b></span></td></tr>' escapeXml='false'/>
																		</c:when>
																		<c:when test="${node4.item.self}">
																			<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L5"><a href="${node4.item.href}" style="${sitenav.navstyle}"><span class="${sitenav.navclass}TD_Selected">${node4.item.label}&nbsp;&#0187;</span></a></td></tr>' escapeXml='false'/>
																		</c:when>
																		<c:otherwise>
																			<c:out value='<tr valign="middle"><td class="${sitenav.navclass}TD_L5"><a href="${node4.item.href}" style="${sitenav.navstyle}">${node4.item.label}</a></td></tr>' escapeXml='false'/>
																		</c:otherwise>
																	</c:choose>
																</c:forEach>
															</c:if>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</c:if>
										</c:otherwise>
									</c:choose>
								</c:forEach>
							</c:if>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</c:if>
		</c:forEach>
		</tbody></table>
	</c:if>
</c:forEach>
</BODY>
</HTML>

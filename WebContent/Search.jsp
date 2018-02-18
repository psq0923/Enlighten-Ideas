<%@page import="com.opensymphony.xwork2.ActionContext"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="com.bbm.util.*,java.sql.*"%>
<%@ page import=" java.util.ArrayList"%>
<%@ page import=" java.util.List"%>
<%@ page import=" com.bbm.bean.ei_ideas"%>
<%@ page import=" com.bbm.util.DBconnection"%>
<%@ page import=" com.bbm.bean.ei_idea_area"%>
<%@ page import=" java.util.Map;"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>作品搜索</title>
</head>
<body>

<%
	String s=request.getParameter("searchtext"); 
	ActionContext actionContext =ActionContext.getContext();
	//Map<String,Object> requestMap=(Map<String,Object> actionContext.get("request"));
	System.out.println(s);
%>
	<%-- <div class="covers" >
								<%
								
									List<ei_ideas> list = new ArrayList<ei_ideas>();
									String sql = "select * from ei_ideas where Ideas_name like '%"+s+"%'";
									ResultSet rs = DBconnection.executeQuery(sql);
								%>
								<%
									while (rs.next()) {
								%>
								<div
									class="js-item cover-block project-cover js-project-cover editable cfix"
									data-id="46320309" data-ordinal="2">
									<div class="cover-img">
										<a href="#" class="cover-img-link"> <img
											src=" <%=rs.getString("Work_uri")%>"
											alt="The Warsaw University of Technology – visual identity"
											title="The Warsaw University of Technology – visual identity"
											class="cover-img-el" data-pin-nopin="nopin">
										</a>
									</div>


									<div class="cover-info-stats">
										<div class="cover-info">
											<div class="cover-name">
												<a
													href="#"
													class="projectName cover-name-link"><%=rs.getString("Ideas_name")%></a>
											</div>
											<div class="cover-by-wrap">
												<div class="cover-by-link text-ellipsis ">
													<span class="cover-by">作者</span> <a
														class="single-owner-link"
														href="#"> <span
														class="js-mini-profile multiple-owner-display-name"
														data-id="707992"><%=rs.getString("User_ID")%></span>
													</a>

												</div>
											</div>
										</div>
										<div class="cover-stat-fields-wrap">
											<div class="cover-stat-wrap">
												<span
													class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb "
													data-timestamp="1481640228"><%=rs.getInt("Thumbs_up_count")%></span>
												<span
													class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone"><%=rs2.getInt("view_times")%></span>
												<div
													class="featured tooltipi-container beicons-pre beicons-pre-featured-small">
													<div class="tooltipi">
														推荐日期: <strong class="js-format-date"
															data-date="12/18/2016"><%=rs.getInt("publish_time")%></strong>
													</div>
												</div>
												<!-- .featured -->
											</div>
											<!-- .cover-stat-wrap -->
											<div class="cover-fields">
												<a href="https://www.behance.net/search?field=5"
													title="艺术指导" class="field-link">艺术指导</a>, <a
													href="https://www.behance.net/search?field=109"
													title="品牌推广" class="field-link">品牌推广</a>, <a
													href="https://www.behance.net/search?field=44" title="图形设计"
													class="field-link">图形设计</a>
											</div>
											<!-- .cover-fields -->
										</div>
										<!-- .cover-info -->
									</div>
									<!-- #cover-stat-fields-wrap -->
								</div>
								<%
									}
									DBconnection.close();
								%>
								<div
									class="js-item cover-block project-cover js-project-cover editable cfix"
									data-id="45668523" data-ordinal="72">
									<div class="cover-img">
										<a
											href="https://www.behance.net/gallery/45668523/Metrin-Skincare"
											class="cover-img-link"> <img
											src="https://mir-s3-cdn-cf.behance.net/projects/202/6e5bf545668523.Y3JvcCwxMDI1LDgwMiwxNTEsMA.jpg"
											srcset="https://mir-s3-cdn-cf.behance.net/projects/202/6e5bf545668523.Y3JvcCwxMDI1LDgwMiwxNTEsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/6e5bf545668523.Y3JvcCwxMDI1LDgwMiwxNTEsMA.jpg 2x"
											alt="Metrin Skincare" title="Metrin Skincare"
											class="cover-img-el" data-pin-nopin="nopin">
										</a>
									</div>


									<div class="cover-info-stats">
										<div class="cover-info">
											<div class="cover-name">
												<a
													href="https://www.behance.net/gallery/45668523/Metrin-Skincare"
													class="projectName cover-name-link">Metrin Skincare</a>
											</div>
											<div class="cover-by-wrap">
												<div class="cover-by-link multiple-cover-by">
													<span class="cover-by">作者</span> <span
														class="multiple-owners-list tooltip--container">
														多个所有者
														<ul class="tooltip--main">
															<li><a class="multiple-owner-link"
																href="https://www.behance.net/samlane"> <span
																	class="multiple-owner-image-container"> <img
																		class="multiple-owner-image js-mini-profile"
																		data-id="899601"
																		src="https://mir-s3-cdn-cf.behance.net/user/50/b065f6899601.57a31e695ffce.jpg">
																</span> <span
																	class="js-mini-profile multiple-owner-display-name"
																	data-id="899601">Sam Lane</span>
															</a></li>
															<li><a class="multiple-owner-link"
																href="https://www.behance.net/workbyalphabet"> <span
																	class="multiple-owner-image-container"> <img
																		class="multiple-owner-image js-mini-profile"
																		data-id="16257453"
																		src="https://mir-s3-cdn-cf.behance.net/user/50/a5b9be16257453.5763f852e77c3.png">
																</span> <span
																	class="js-mini-profile multiple-owner-display-name"
																	data-id="16257453">Alphabet .</span>
															</a></li>
															<li><a class="multiple-owner-link"
																href="https://www.behance.net/abbasmushtaq"> <span
																	class="multiple-owner-image-container"> <img
																		class="multiple-owner-image js-mini-profile"
																		data-id="683638"
																		src="https://mir-s3-cdn-cf.behance.net/user/50/629801683638.57a34a585b747.jpg">
																</span> <span
																	class="js-mini-profile multiple-owner-display-name"
																	data-id="683638">Abbas Mushtaq</span>
															</a></li>
															<li><a class="multiple-owner-link"
																href="https://www.behance.net/_SebastianNeedler"> <span
																	class="multiple-owner-image-container"> <img
																		class="multiple-owner-image js-mini-profile"
																		data-id="1880373"
																		src="https://mir-s3-cdn-cf.behance.net/user/50/53ad971880373.56edd6c15d3ce.jpg">
																</span> <span
																	class="js-mini-profile multiple-owner-display-name"
																	data-id="1880373">Sebastian Needler</span>
															</a></li>
														</ul>
													</span>
												</div>
											</div>
										</div>
										<div class="cover-stat-fields-wrap">
											<div class="cover-stat-wrap">
												<span
													class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb "
													data-timestamp="1480671901">1126</span> <span
													class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">19367</span>
												<div
													class="featured tooltipi-container beicons-pre beicons-pre-featured-small">
													<div class="tooltipi">
														推荐日期: <strong class="js-format-date" data-date="12/6/2016">2016-12-06</strong>
													</div>
												</div>
												<!-- .featured -->
											</div>
											<!-- .cover-stat-wrap -->
											<div class="cover-fields">
												<a href="https://www.behance.net/search?field=109"
													title="品牌推广" class="field-link">品牌推广</a>, <a
													href="https://www.behance.net/search?field=44" title="图形设计"
													class="field-link">图形设计</a>, <a
													href="https://www.behance.net/search?field=66" title="包装"
													class="field-link">包装</a>
											</div>
											<!-- .cover-fields -->
										</div>
										<!-- .cover-info -->
									</div>
									<!-- #cover-stat-fields-wrap -->
								</div>
								</div> --%>
</body>
</html>
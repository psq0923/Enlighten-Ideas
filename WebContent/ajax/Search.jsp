<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="com.bbm.util.*,java.sql.*"%>
<%@ page import=" java.util.ArrayList"%>
<%@ page import=" java.util.List"%>
<%@ page import=" com.bbm.bean.ei_ideas"%>
<%@ page import=" com.bbm.util.DBconnection"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>人物</title>
</head>
<body>
	<% 
		String s=request.getParameter("s"); 
		System.out.println(s);
	%>
<div class="covers" >
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
										<a href="works_detail.jsp" class="cover-img-link"> <img
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
													class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone"><%=rs.getInt("view_times")%></span>
												<div
													class="featured tooltipi-container beicons-pre beicons-pre-featured-small">
													<div class="tooltipi">
														推荐日期: <strong class="js-format-date"
															data-date="12/18/2016"><%=rs.getDate("publish_time")%></strong>
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
						
								</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ page import="com.bbm.util.*,java.sql.*"%>
<%@ page import=" java.util.ArrayList"%>
<%@ page import=" java.util.List"%>
<%@ page import=" com.bbm.bean.ei_ideas"%>
<%@ page import=" com.bbm.util.DBconnection"%>
<%@ page import=" java.text.SimpleDateFormat"%>
<%@ page import=" java.util.Date"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>填写留言</title>
<link rel="stylesheet" type="text/css" href="./style/css/addmessage.css"/>
</head>
<body >

<div class="main">
     <div class="bg"></div>
     <div class="nav">
      <div >

              <div class="row"> <img src="./style/img/ae636b0f623792081b77838920fee109.png"></div>
		      <div class="action03">Adob ID</div>
              
              <div class="action02">Behance</div>
                      <div >
                        <img src="./style/img/ae636b0f623792081b77838920fee109.png" data-component="responsive_image">
                     </div>
                <br/><br/>
        <div class="navmain">
		<form action="add">
		    <table border="0" cellspacing="0" cellpadding="0" class="navtable">
		    <tr class="navtr">
			<td>评论作者:</td>
			<td>
			<input class="navinput checkname"  type="text"  name="reviewer_ID" />
			<div id="passwdno" style="position: absolute;color: red;font-size: 12px; visibility: hidden;"></div>
			</td>
			</tr>
			<% 
			   String id = null;
	           id = session.getAttribute("work_id").toString();
			 //  String works_id = request.getParameter("works_id");
		    //	System.out.print(works_id);
				List <ei_ideas> list = new ArrayList <ei_ideas>();
		        String sql="select  * from ei_ideas  where ID= "+id;
			    ResultSet rs = DBconnection.executeQuery(sql);
		%>
		        
	  <%
				while (rs.next()) {
			%>
			<tr class="navtr">
			<td>被评论作者:</td>
			<td>
			<input class="navinput checkpasswd" type="text"  value=" <%=rs.getInt("User_ID")%>" readonly name="Author_ID" />
			 <div id="passwdno" style="position: absolute;color: red;font-size: 12px; visibility: hidden;"></div>
			</td>
			</tr>
			<tr class="navtr">
			<td>评论作品:</td>
			<td>
			<input class="navinput ctrlpd" type="text"  value=" <%=rs.getInt("ID")%>" readonly name="Work_id" />
			<div id="resetpd" style="position: absolute;color: red;font-size: 12px;visibility: hidden;"></div>
			</td>
            </tr>
			<%
	}
          DBconnection.close();
		
%>
            <tr class="navtr">
			<td>评论时间:</td>
			<td>
			<input class="navinput checkphone" type="text"  value="<%
		  
			
			Date date=new Date();
			SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			System.out.println(sdf.format(date)); 
			out.println(sdf.format(date));
				
            %> " readonly name="comment_time" />
             <div id="phone" style="position: absolute;color: red;font-size: 12px;visibility: hidden;" ></div>
            </td>
            </tr>
			
			<tr class="navtr">
		    <td> 状态量:</td>
			<td>
			<input class="navinput checkqq" type="text"  value="1 " readonly name="Status" />
			<div id="ctrlqq" style="position: absolute;color: red;font-size: 12px;visibility: hidden;" ></div>
			</td>
			</tr>
			<%-- 被评论作者:
			<s:hidden name="message.title" />
			<br>
			评论作品:
			<s:hidden name="message.title" />
			<br>
			评论时间:
			<s:hidden name="message.title" />
			<br>
			状态量:
			<s:hidden name="message.title" />--%>
			<tr class="navtr">
			<td>评论内容:</td>
			<td>
			<s:textarea name="comment" cols="40" rows="20" 
			class="navinput checkemail"   />
             <div id="email" style="position: absolute;color: red;font-size: 12px;visibility: hidden;" ></div>
			</td>
			</tr>
			<%-- <s:textarea name="comment" cols="40" rows="20" />
			<br> --%>
		<%-- 	<s:hidden name="message.id" />
			<br> --%>
			
			<%-- <s:submit value="留言" align="left" /> --%>
			<s:submit class="sub" value="提交评论"/>
			</table>
		</form>
		</div>
	  </div>
	</div>
  </div>

	</body>
</html>
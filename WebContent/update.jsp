<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@ page import="com.bbm.action.*"%>
<%@taglib prefix="s" uri="/struts-tags" %>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8" />
<title>注册</title>
<link rel="stylesheet" type="text/css" href="./style/css/new_file.css" />
<script type="text/javascript">
function regist(){
	tagetForm=document.forms
}
</script>
</head>
<body>
	<div class="nav">
		<div class="row">
			<img src="./style/img/a.png">
		</div>
		<div class="action03">&nbsp;&nbsp;update</div>
		<div class="navmain">
			<form action="update">
				<table border="0" cellspacing="0" cellpadding="0" class="navtable">
					<s:iterator value="#session.User" var="user">
					<tr class="navtr">
						<td>用户名</td>
						<td><input class="navinput checkname" type="text"
							name="username" id="username" value='<s:property value="#user.Username"/>'placeholder="用户名/手机号" />
							<div id="nameno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>密码</td>
						<td><input class="navinput checkpasswd" type="password"
							name="password" value='<s:property value="#user.Password"/>' placeholder="请输入你的密码" />
							<div id="passwdno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>性别</td>
						<td>
						<s:if test="#user.Sex=='男'">
							<input name="sex" type="radio" value='<s:property value="#user.Sex"/>' checked />男 
							<input name="sex" type="radio" value='<s:property value="#user.Sex"/>'/>女
						</s:if>
						<s:else>
							<input name="sex" type="radio" value='<s:property value="#user.Sex"/>' />男 
							<input name="sex" type="radio" value='<s:property value="#user.Sex"/>' checked/>女
						</s:else>
						</td>
					</tr>
					<tr class="navtr">
						<td>年龄</td>
						<td><input class="navinput checkqq" type="number" name="age"
							id="age" value='<s:property value="#user.Age"/>' placeholder="请输入你的年龄" />
							
						</td>
					</tr>
					<tr class="navtr">
						<td>邮箱</td>
						<td><input class="navinput checkemail" type="email"
							name="email" id="" value='<s:property value="#user.Email"/>' placeholder="请输入你的邮箱" />
							<div id="email"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>地址</td>
						<td><input class="navinput checkaddress" type="text" name="address"
							id="address" value='<s:property value="#user.Address"/>' placeholder="请输入你的地址" />
							<div id="address"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td colspan="3"><input class="sub" type="submit" value="修改个人信息" onclick="regist();"/>
						</td>
					</tr>
					</s:iterator>
				</table>
			</form>
		</div>
	</div>
	<script src="./style/js/jquery-2.2.4.min.js" type="text/javascript"
		charset="utf-8"></script>
	<script src="./style/js1/update.js" type="text/javascript"
		charset="utf-8"></script>
</body>
</html>

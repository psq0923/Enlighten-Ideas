<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>修改密码</title>
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
			<img src="./style/img/a.png" data-component="responsive_image">
		</div>
		<div class="action03">ChangePassword</div>
		<div class="navmain">
			<form action="changepassword1">
				<table border="0" cellspacing="0" cellpadding="0" class="navtable">
					<tr class="navtr">
							<td>用户名</td>
							<td>
								<input class="navinput checkname" type="text" name="username" placeholder="用户名/手机号" />
<div id="nameno" style="position: absolute;color: red;font-size: 12px;visibility: hidden;"></div>
							</td>
						</tr>
					<tr class="navtr">
						<td>密保问题</td>
						<td><input class="navinput checkquestion" type="text" name="question" id="question"
							value='<s:property value="#question"/>' placeholder="请输入你的密保问题" />
							<div id="questionno" style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>密保答案</td>
						<td><input class="navinput checkanswer" type="text" name="answer" id="answer"
							value="" placeholder="请输入你的密保答案" />
							<div id="answerno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>新密码</td>
						<td><input class="navinput checkpasswd" type="password"
							name="password" placeholder="请输入你的密码" />
							<div id="passwdno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>确定密码</td>
						<td><input class="navinput ctrlpd" type="password"
							name="password1" id="" value="" placeholder="确定你的密码" />
							<div id="resetpd"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td colspan="3"><input class="sub" type="submit" value="立即登录" />
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<script src="./style/js/jquery-2.2.4.min.js" type="text/javascript"
		charset="utf-8"></script>
	<script src="./style/js/index.js" type="text/javascript"
		charset="utf-8"></script>
</body>
</html>
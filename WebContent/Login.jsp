<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8" />
<title>登录</title>
<link rel="stylesheet" type="text/css" href="./style/css/new_file.css"/>
</head>
<body>
		<div class="bg"></div>
		<div class="nav">
		    <div>
              <div class="row"> <img src="./style/img/a.png" data-component="responsive_image"></div>
		      <div class="action03">&nbsp;&nbsp;login</div>
                <div class="navmain">
				<form action="login" method="post">
					<table border="0" cellspacing="0" cellpadding="0" class="navtable">
						<tr class="navtr">
							<td>用户名</td>
							<td>
								<input class="navinput checkname" type="text" name="username" placeholder="用户名/手机号" />
<div id="nameno" style="position: absolute;color: red;font-size: 12px;visibility: hidden;"></div>
							</td>
						</tr>
						<tr class="navtr">
							<td>密码</td>
							<td>
								<input class="navinput checkpasswd" type="password" name="password" placeholder="请输入你的密码" />
<div id="passwdno" style="position: absolute;color: red;font-size: 12px; visibility: hidden;"></div>							
							</td>
						</tr>
						<tr class="navtr">
						<td  colspan="2">
                    <div class="grid_2">
                   
            <a href="ChangePassword.jsp">忘记了密码？</a> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='Register.jsp'>去注册</a></div>
   </td>	
   </tr>					
						<tr class="navtr">
							<td colspan="3">
								<input class="sub" type="submit" value="登录"/>
							</td>
						</tr>
					</table>
				</form>			
			</div>
		</div>
	</div>
	<script src="./style/js/jquery-2.2.4.min.js" type="text/javascript"
		charset="utf-8"></script>
	<script src="./style/js1/index.js" type="text/javascript"
		charset="utf-8"></script>
</body>
</html>
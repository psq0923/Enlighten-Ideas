<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8" />
<title>注册</title>
<link rel="stylesheet" type="text/css" href="./style/css/new_file.css" />
<Script type="text/javascript">  
function CheckUsername(username){  
    var request;  
    var span;  
    //span=document.getElementById("result");  
    if(window.XMLHttpRequest){  
         request=new  XMLHttpRequest();//其他非ie浏览器支持  
    }  
    else if(window.ActiveXObject)  
        {  
        request=new ActiveXObject("Microsoft.XMLHTTP");//微软的ie浏览器支持       
        }  
      
    request.onreadystatechange = function press() {  
         if(request.readyState < 4) {  
        	 document.getElementById("span").style.color = "blue";  
        	 document.getElementById("span").innerHTML="正在检测";  
         }  
         if(request.readyState == 4) {  
             if(request.status == 200) { 
            	 //alert(request.responseText)
				 if(request.responseText =="用户名不能为空"){
					 document.getElementById("span").style.color = "red";  
                	 document.getElementById("span").innerHTML="用户名不能为空";
                	 document.getElementById("password").disabled=true;
                	 document.getElementById("password1").disabled=true;
                	 document.getElementById("sex").disabled=true;
                	 document.getElementById("age").disabled=true;
                	 document.getElementById("email").disabled=true;
                	 document.getElementById("address").disabled=true;
                	 document.getElementById("question").disabled=true;
                	 document.getElementById("answer").disabled=true;
                	 document.getElementById("button").disabled=true;
				 }
				 else if(request.responseText == "用户名必须是中文名字且长度2-4位!"){
					 document.getElementById("span").style.color = "red";  
                	 document.getElementById("span").innerHTML="用户名必须是中文名字且长度2-4位!";
                	 document.getElementById("password").disabled=true;
                	 document.getElementById("password1").disabled=true;
                	 document.getElementById("sex").disabled=true;
                	 document.getElementById("age").disabled=true;
                	 document.getElementById("email").disabled=true;
                	 document.getElementById("address").disabled=true;
                	 document.getElementById("question").disabled=true;
                	 document.getElementById("answer").disabled=true;
                	 document.getElementById("button").disabled=true;
				 }
				 else if(request.responseText == "用户名已存在") {  
                	 document.getElementById("span").style.color = "red";  
                	 document.getElementById("span").innerHTML="用户已存在";
                	 document.getElementById("password").disabled=true;
                	 document.getElementById("password1").disabled=true;
                	 document.getElementById("sex").disabled=true;
                	 document.getElementById("age").disabled=true;
                	 document.getElementById("email").disabled=true;
                	 document.getElementById("address").disabled=true;
                	 document.getElementById("question").disabled=true;
                	 document.getElementById("answer").disabled=true;
                	 document.getElementById("button").disabled=true;
                 }else {  
                	 document.getElementById("span").style.color = "green";  
                	 document.getElementById("span").innerHTML="可以使用哦~";
                	 document.getElementById("password").disabled=false;
                	 document.getElementById("password1").disabled=false;
                	 document.getElementById("sex").disabled=false;
                	 document.getElementById("age").disabled=false;
                	 document.getElementById("email").disabled=false;
                	 document.getElementById("address").disabled=false;
                	 document.getElementById("question").disabled=false;
                	 document.getElementById("answer").disabled=false;
                	 document.getElementById("button").disabled=false;
                 }              
             }  
         }  
    };  
    request.open("get", "isExists.action?username="+username.value, true);  
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
    request.send("");  
      
     }  
</Script>  
</head>

<body>
	<div class="nav">
		<div class="row">
			<img src="./style/img/a.png">
		</div>
		<div class="action03">&nbsp;&nbsp;register</div>
		<div class="navmain">
			<form action="register1">
				<table border="0" cellspacing="0" cellpadding="0" class="navtable">
					<tr class="navtr">
						<td>用户名</td>
						<td><input class="navinput checkname" type="text"
							name="username" id="username" value="" maxlength="20" onblur="CheckUsername(this)" placeholder="用户名/手机号" required="required"/>
							<span id="span"></span>
							<div id="nameno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"><span id="flag"></span></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>密码</td>
						<td><input class="navinput checkpasswd" type="password" id="password"
							name="password" placeholder="请输入你的密码" />
							<div id="passwdno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"><span id="f"></span></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>确定密码</td>
						<td><input class="navinput ctrlpd" type="password"
							name="password1" id="password1" value="" placeholder="确定你的密码" />
							<div id="resetpd"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"><span id="tishi"></span></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>性别</td>
						<td> 
						<label><input id="sex" name="sex" type="radio" value="男" />男</label> 
						<label><input id="sex" name="sex" type="radio" value="女" />女 </label>
						 </td>
					</tr>
					<tr class="navtr">
						<td>年龄</td>
						<td><input class="navinput checkqq" type="number" name="age"
							id="age" value="" placeholder="请输入你的年龄" />
							
						</td>
					</tr>
					<tr class="navtr">
						<td>邮箱</td>
						<td><input class="navinput checkemail" type="email"
							name="email" id="email" value="" placeholder="请输入你的邮箱" />
							<div id="email"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td>地址</td>
						<td><input class="navinput checkaddress" type="text" name="Address"
							id="address" value="" placeholder="请输入你的地址" />
						</td>
					</tr>
					<tr class="navtr">
						<td>密保问题</td>
						<td><input class="navinput checkquestion" type="text" name="question" id="question"
							value="" placeholder="请输入你的密保问题" />
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
						<td colspan="3"><input class="sub" id="button" type="submit" value="立即注册" onclick="regist();"/>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<script src="./style/js/jquery-2.2.4.min.js" type="text/javascript"
		charset="utf-8"></script>
	<script src="./style/js1/index.js" type="text/javascript"
		charset="utf-8"></script>
</body>
</html>

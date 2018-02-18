<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@ taglib prefix="s" uri="/struts-tags" %>
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
		<div class="action03">&nbsp;&nbsp;发布作品</div>
		<div class="navmain">
			<form action="imgupload" method="post" enctype="multipart/form-data" >
			<table border="0" cellspacing="0" cellpadding="0" class="navtable">
          <tr class="navtr">
    	  <s:file name="logoimg" label="上传logo"/>
         	</tr>
					<tr class="navtr">
						<td>作品名称</td>
						<td><input class="navinput checkname" type="text"
							name="ideas_name" id="ideasname" value="" placeholder="作品名称" />
							<div id="nameno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
			<!-- 		</tr> 
				<tr class="navtr">
						<td>作者名</td>
						<td><input class="navinput checkpasswd" type="text"
							name="Username" placeholder="请输入您的名字"/>
							<div id="passwdno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>   -->
					<tr class="navtr">
						<%-- <td>领域名</td>
						<td><input type="checkbox" name="checkbox" value="插图">插图</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input type="checkbox"name="checkbox" value="人物设计" >人物设计</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input  type="checkbox"name="checkbox" value="动画设计" >动画设计</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input type="checkbox"name="checkbox" value="数码艺术"  >数码艺术</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input  type="checkbox"name="checkbox" value="印刷设计">印刷设计</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input  type="checkbox"name="checkbox" value="绘图" >绘图</input><%="&nbsp&nbsp&nbsp&nbsp"%>
						    <input type="checkbox"name="checkbox" value="游戏设计" >游戏设计</input><%="&nbsp&nbsp&nbsp&nbsp"%>
							<input type="checkbox"name="checkbox" value="全选"  >全选</input>
		                    <input type="checkbox"name="checkbox" value="全选"  >取消</input> --%>
							<div id="passwdno"
								style="position: absolute; color: red; font-size: 12px; visibility: hidden;"></div>
						</td>
					</tr>
					<tr class="navtr">
						<td colspan="3"><input class="sub" type="submit" value="发布作品" onclick="regist();"/>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	<script src="./style/js/jquery-2.2.4.min.js" type="text/javascript"
		charset="utf-8"></script>
	<script src="./style/js1/index1.js" type="text/javascript"
		charset="utf-8"></script>
</body>
</html>



$('.checkpasswd').each(function(){
	var string = $(this).attr('placeholder');
	borderCss($(this));
	$(this).blur(function(){
		if($(this).val()==''){
			navCss($('#passwdno'),'*密码不能为空');
		}else {
			var reg = /^(?=.*[a-z])(?=.*\d)(?=.*_)\w{6,16}$/;
			check(reg,$('#passwdno'),$(this),'*密码是由6-16字母,数字,下划线组成!!')
		}
		$(this).css('border','1px solid rgb(169,169,169)');
	})
});
$('.ctrlpd').each(function(){
	var string = $(this).attr('placeholder');
	borderCss($(this));
	$(this).blur(function(){
		if($(this).val()==''){
			navCss($('#resetpd'),'*密码不能为空');
		}else {
			var reg = /^(?=.*[a-z])(?=.*\d)(?=.*_)\w{6,16}$/;
			 if(!reg.test($(this).val())){
			 	$('#resetpd').css('visibility','visible');
			 	$('#resetpd').text('*密码是由6-16字母,数字,下划线组成!');
			 }else {
			 	if($('.checkpasswd').val()!=$(this).val()){
			 		$('#resetpd').css('visibility','visible');
			 		$('#resetpd').text('*前后密码不一致!');
			 	}else {
			 		$('#resetpd').css('visibility','hidden');
			 	}
			 }
		}
		$(this).css('border','1px solid rgb(169,169,169)');
	})
});
$('.checkemail').each(function(){
	var string = $(this).attr('placeholder');
	borderCss($(this));
	$(this).blur(function(){
		if($(this).val()==''){
			navCss($('#email'),'*email不能为空');
		}else {
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			check(reg,$('#email'),$(this),'*email号格式不正确!');
		}
		$(this).css('border','1px solid rgb(169,169,169)');
	})
});
$('.checkquestion').each(function(){
	var string = $(this).attr('placeholder');	
	borderCss($(this));
	$(this).blur(function(){
		if($(this).val()==''){
			navCss($('#questionno'),'*密保问题不能为空')
		}else {
			 var reg = /^[\u4E00-\u9FA5]{2,20}$/;
			 check(reg,$('#questionno'),$(this),'*密保问题必须是中文且长度2-20位!')
		}
		$(this).css('border','1px s2olid rgb(169,169,169)');
	})
});
$('.checkanswer').each(function(){
	var string = $(this).attr('placeholder');
	borderCss($(this));
	$(this).blur(function(){
		if($(this).val()==''){
			navCss($('#answerno'),'*密保答案不能为空');
		}else {
			var reg = /^[\u4E00-\u9FA5]{2,20}$/;
			 check(reg,$('#answerno'),$(this),'*密保答案必须是中文且长度2-20位!')
		}
		$(this).css('border','1px solid rgb(169,169,169)');
	})
});
function check(reg,obj,objone,tet){
	if(!reg.test(objone.val())){
		obj.text(tet);
	 	obj.css('visibility','visible');
	 }else {
	 	obj.css('visibility','hidden');
	 }
}
function navCss(obj,tet){
	obj.text(tet);
	obj.css('visibility','visible');
}
function borderCss(checkStyle){
	checkStyle.focus(function(){
		 checkStyle.attr('placeholder','');
		 checkStyle.css('border','2px solid #d20000');
	})
}

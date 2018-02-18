package com.bbm.action;

import com.bbm.bean.ChangePassword;
import com.bbm.dao.impl.ChangePasswordImpl;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class ChangePasswordAction extends ActionSupport {
	private String question;
	private String answer;
	private String password;
	private String password1;
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPassword1() {
		return password1;
	}
	public void setPassword1(String password1) {
		this.password1 = password1;
	}
	ChangePasswordImpl cpi=new ChangePasswordImpl();
	ChangePassword cp;
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		cp=new ChangePassword();
		ActionContext ac=ActionContext.getContext();
		cp=(ChangePassword) ac.getSession().get("username");
		
		return super.execute();
	}
}

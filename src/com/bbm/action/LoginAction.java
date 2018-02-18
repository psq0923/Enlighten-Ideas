package com.bbm.action;

import com.bbm.bean.Login;
import com.bbm.dao.impl.LoginDaoImpl;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
	
	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	LoginDaoImpl ldi=new LoginDaoImpl();
	Login login;
	//���崦���û������execute����
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		login = new Login();
		
		login.setUsername(username);
		login.setPassword(password);
		boolean find = ldi.find(login);
		System.out.println(find);
		if (find) {
			return SUCCESS;
		} else {
			return ERROR;
		}
	}
}

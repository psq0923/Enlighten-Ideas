package com.bbm.action;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.UpdateUser;
import com.bbm.dao.impl.SelectUserByIdImpl;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class selectUserByIdAction2 extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String username;
	private String password;
	private String sex;
	private int age;
	private String email;
	private String address;
	int id;
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
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String execute() throws Exception{
		SelectUserByIdImpl impl;
		UpdateUser updateUser;
	impl=new SelectUserByIdImpl();
	HttpServletRequest req=ServletActionContext.getRequest();
	   HttpSession session=req.getSession();
	/*ActionContext ac=ActionContext.getContext();
	 HttpSession  session=(HttpSession) ac.getSession();*/
	   updateUser = new UpdateUser();
	   id=  Integer .parseInt(session.getAttribute("id").toString().trim());
	   updateUser=	impl.selectUserByName(id);
	   session.setAttribute("User",  updateUser);
	   System.out.println(updateUser);
	return SUCCESS;
}
}

package com.bbm.action;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas;
import com.bbm.dao.impl.UpdateUserImpl;
import com.bbm.util.DBconnection;
import com.opensymphony.xwork2.ActionSupport;

public class updateAction extends ActionSupport {
	private String username;
	private String password;
	private String sex;
	private int age;
	private String email;
	private String address;
	
	
	UpdateUserImpl impl;
	UpdateUser updateUser;
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
	
	//定义处理用户请求的execute方法
	public String execute() throws Exception{
		
		updateUser=new UpdateUser();
		username = new String(username.getBytes("iso8859-1"),"utf-8");  
		updateUser.setUsername(username);
		updateUser.setPassword(password);
		sex = new String(sex.getBytes("iso8859-1"),"utf-8");  
		updateUser.setSex(sex);
		System.out.println("提示："+sex);
		updateUser.setAge(age);
		updateUser.setEmail(email);
		address = new String(address.getBytes("iso8859-1"),"utf-8");
		updateUser.setAddress(address);
		/*register.setQuestion(question);
		register.setAnswer(answer);
		register.setApplication_time(application_time);*/
		System.out.println(username);
		System.out.println(password);
		System.out.println(sex);
		System.out.println(age);
		System.out.println(email);
		System.out.println(address);
		//System.out.println(answer);
		
		   impl=new UpdateUserImpl();
	       impl.update(updateUser);
		return SUCCESS;
		
	}
}

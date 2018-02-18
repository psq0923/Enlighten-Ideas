package com.bbm.action;

import java.util.Date;

import com.bbm.bean.Register;
import com.bbm.dao.impl.RegisterDaoImpl;
import com.opensymphony.xwork2.ActionSupport;

public class RegisterAction1 extends ActionSupport {
	private String username;
	private String password;
	private String password1;
	private String sex;
	private int age;
	private String email;
	private String address;
	private String question;
	private String answer;
	private static Date date;
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
	public String getPassword1() {
		return password1;
	}
	public void setPassword1(String password1) {
		this.password1 = password1;
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
	RegisterDaoImpl rdi=new RegisterDaoImpl();
    Register register;
	//定义处理用户请求的execute方法
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		register=new Register();
		//username = new String(username.getBytes("iso8859-1"),"utf-8");
		register.setUsername(username);
		register.setPassword(password);
		//sex = new String(sex.getBytes("iso8859-1"),"utf-8");
		register.setSex(sex);
		register.setAge(age);
		register.setEmail(email);
		//address = new String(address.getBytes("iso8859-1"),"utf-8");
		register.setAddress(address);
		//question = new String(question.getBytes("iso8859-1"),"utf-8");
		//answer = new String(answer.getBytes("iso8859-1"),"utf-8");
		register.setQuestion(question);
		register.setAnswer(answer);
		
		System.out.println(username);
		System.out.println(sex);
		
		
			rdi.addRegister(register);
			return LOGIN;
	}
}

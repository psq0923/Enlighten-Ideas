package com.bbm.action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import java.util.Date;


import com.bbm.bean.Register;
import com.bbm.dao.impl.RegisterDaoImpl;

public class RegisterAction extends ActionSupport {
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
		
		//定义处理用户请求的execute方法
		@Override
		public String execute() throws Exception {
			// TODO Auto-generated method stub
			  // 集合Ajax，前台验证用户id是否已存在  
	        System.out.println("检测用户名是否存在");  
	        HttpServletRequest request = ServletActionContext.getRequest();  
	        HttpServletResponse respons = ServletActionContext.getResponse();  
	        String username = request.getParameter("username");
	        String sendString = ""; 
	        if(username==""){
	        	sendString = "用户名不能为空";  
	        }else if(username=="/^[\u4E00-\u9FA5]{2,4}$/"){
	        	sendString ="用户名必须是中文名字且长度2-4位!";
	        }
	        System.out.println(username);
	        respons.setContentType("text/html;charset=utf-8");  
	        
	        RegisterDaoImpl rdi=new RegisterDaoImpl();
	        boolean flag = rdi.checkUsername(username);
	        System.out.println(flag);
	        // flag true为该用户名已存在，false为该用户名可以使用  
	        if (flag==true) {  
	            sendString = "用户名已存在";  
	            respons.getWriter().print(sendString);  
	        } else {  
	            sendString = "该用户名可用！";  
	            System.out.println(sendString);
	            respons.getWriter().print(sendString);  
	        }  
	        return null;  
			}
		}

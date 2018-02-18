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
		
		//���崦���û������execute����
		@Override
		public String execute() throws Exception {
			// TODO Auto-generated method stub
			  // ����Ajax��ǰ̨��֤�û�id�Ƿ��Ѵ���  
	        System.out.println("����û����Ƿ����");  
	        HttpServletRequest request = ServletActionContext.getRequest();  
	        HttpServletResponse respons = ServletActionContext.getResponse();  
	        String username = request.getParameter("username");
	        String sendString = ""; 
	        if(username==""){
	        	sendString = "�û�������Ϊ��";  
	        }else if(username=="/^[\u4E00-\u9FA5]{2,4}$/"){
	        	sendString ="�û������������������ҳ���2-4λ!";
	        }
	        System.out.println(username);
	        respons.setContentType("text/html;charset=utf-8");  
	        
	        RegisterDaoImpl rdi=new RegisterDaoImpl();
	        boolean flag = rdi.checkUsername(username);
	        System.out.println(flag);
	        // flag trueΪ���û����Ѵ��ڣ�falseΪ���û�������ʹ��  
	        if (flag==true) {  
	            sendString = "�û����Ѵ���";  
	            respons.getWriter().print(sendString);  
	        } else {  
	            sendString = "���û������ã�";  
	            System.out.println(sendString);
	            respons.getWriter().print(sendString);  
	        }  
	        return null;  
			}
		}

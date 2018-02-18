package com.bbm.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.catalina.core.ApplicationContext;
import org.apache.struts2.ServletActionContext;

import com.bbm.bean.Login;
import com.bbm.dao1.LoginDao;
import com.bbm.util.DBconnection;
import com.opensymphony.xwork2.ActionContext;

public class LoginDaoImpl implements LoginDao{

	@Override
	/*public boolean find(Login login) {
		// TODO Auto-generated method stub
		String sql="select password,id from ei_user where username=?";
		String username=login.getUsername();
		String password=login.getPassword();
		Object obj[]=new Object[1];
		obj[0]=username;
		ResultSet rs=DBconnection.executeQuery(sql, obj);
		try{
			while(rs.next()){
				int id = rs.getInt("id");
				System.out.println(id);
				String password1 = rs.getString("password");
				System.out.println(password+"^"+password1);
				if(password.equals(password1)){
					System.out.println(id);
				HttpServletRequest request = null ;
				HttpSession session = request.getSession();
				session.setAttribute("id", id);
					DBconnection.close();
					return true;//密码存在
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			return true;
		}
		return false;
	}*/
	public boolean find(Login login) {
		String sql="select password,id from ei_user where username=?";
		String username=login.getUsername();
		System.out.println(username);
		ResultSet rs=DBconnection.executeQuery(sql, username);
		try{
			while (rs.next()) {
				System.out.println("提示");
				int id = rs.getInt("id");
				System.out.println(id);
				HttpServletRequest req = ServletActionContext.getRequest();
				HttpSession session = req.getSession();
				/*
				 * ActionContext ac=ActionContext.getContext();
				 * ac.getSession().put("id", id);
				 */

				if (session.getAttribute("id") != null) {
					System.out.println("session" + session.getAttribute("id"));
					session.removeAttribute("id");

				}
				System.out.println("session  123" + session.getAttribute("id"));
				session.setAttribute("id", id);

				// System.out.println(abc);
				int n = rs.getInt(1);
				System.out.println(n);
				if (n > 0) {
					return true;// 密码存在
				} else {
					System.out.println(123);
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;
	}

}

package com.bbm.dao.impl;

import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.ChangePassword;
import com.bbm.dao1.ChangePasswordDao;
import com.bbm.util.DBconnection;
import com.opensymphony.xwork2.ActionContext;

public class ChangePasswordImpl implements ChangePasswordDao {

	@Override
	public boolean find(ChangePassword cp) {
		// TODO Auto-generated method stub
		ActionContext ac=ActionContext.getContext();
		String username = (String)ac.getSession().get("username");
		String sql="select question,answer from ei_user where username=?";
		
		String question=cp.getQuestion();
		String answer=cp.getAnswer();
		
		System.out.println(question);
		
		 HttpServletRequest req=ServletActionContext.getRequest();
		   HttpSession session=req.getSession();
		   session.setAttribute("question", question);
		   
		ResultSet rs=DBconnection.executeQuery(sql, answer);
		try{
			while(rs.next()){
				int n = rs.getInt(1);
				if(n>0){
				return true;//»Ø´ðÕýÈ·
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;
	}
	

	@Override
	public void addRegister(ChangePassword cp) {
		// TODO Auto-generated method stub
		try{
			String sql="update ei_user set password=? where username=?";
			Object[] obj=new Object[1];
			obj[0]=cp.getPassword();
			
			DBconnection.executeUpdate(sql,obj);
			
			}catch(Exception e){
				e.printStackTrace();
			}
	}

}

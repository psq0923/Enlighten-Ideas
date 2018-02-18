package com.bbm.dao.impl;

import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.eclipse.jdt.internal.compiler.ast.AllocationExpression;

import com.bbm.bean.Register;
import com.bbm.dao1.RegisterDao;
import com.bbm.util.DBconnection;

public class RegisterDaoImpl implements RegisterDao{
	@Override
	public void addRegister(Register register) {
		// TODO Auto-generated method stub
		SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Date date=new Date();
		String datestr=sdf.format(date);
		try{
		String sql="insert into ei_user(username,password,sex,age,email,address,question,answer,application_time)values(?,?,?,?,?,?,?,?,?)";
		Object[] obj=new Object[9];
		obj[0]=register.getUsername();
		obj[1]=register.getPassword();
		obj[2]=register.getSex();
		obj[3]=register.getAge();
		obj[4]=register.getEmail();
		obj[5]=register.getAddress();
		obj[6]=register.getQuestion();
		obj[7]=register.getAnswer();
		obj[8]=datestr;
		DBconnection.executeUpdate(sql,obj);
		
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}

	@Override
	public boolean find(Register register) {
		// TODO Auto-generated method stub
		String sql="select id from ei_user where username=?";
		Object obj[]=new Object[1];
		obj[0]=register.getUsername();
		ResultSet rs=DBconnection.executeQuery(sql, obj);
		//把查到存到结果集中
		try{
			while(rs.next()){
				int n = rs.getInt(1);
				if(n>0){
				return true;//用户名已存在
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;
	}

	@Override
	public boolean checkUsername(String username) {
		// TODO Auto-generated method stub
		System.out.println(username);
	
		String sql="select id from ei_user where username=?";
		Object obj[]=new Object[1];
		obj[0]=username;
		ResultSet rs=DBconnection.executeQuery(sql, obj);
		//把查到的用户名存到结果集中
		try{
			while(rs.next()){
				int n = rs.getInt(1);
				if(n>0){
				return true;//用户名已存在
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;	
		
	}

}

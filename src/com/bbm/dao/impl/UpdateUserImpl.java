package com.bbm.dao.impl;

import java.sql.ResultSet;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas1;
import com.bbm.dao1.RegisterDao1;
import com.bbm.util.DBconnection;

public class UpdateUserImpl implements RegisterDao1{

	@Override
	public void update(UpdateUser updateUser) {
		try{
			
			String sql = "update ei_user set Username=?,Password=?,Sex=?,Age=?,Email=?,Address=? where Username=?";
					
			//String sql="insert into ei_user(username,password,sex,age,email,address,question,answer,application_time)values(?,?,?,?,?,?,?,?,?)";
			Object[] obj=new Object[7];
			obj[0]=updateUser.getUsername();
			obj[1]=updateUser.getPassword();
			obj[2]=updateUser.getSex();
			obj[3]=updateUser.getAge();
			obj[4]=updateUser.getEmail();
			obj[5]=updateUser.getAddress();
			obj[6]=updateUser.getUsername();
			DBconnection.executeUpdate(sql,obj);
			
			}catch(Exception e){
				e.printStackTrace();
			}
			
	}

	@Override
	public List<ei_ideas1> geteiideas() {
		// TODO Auto-generated method stub
		return null;
	}

	public UpdateUser selectUserByName(int id) {
		return null;
		
	}
	@Override
	public boolean find(UpdateUser user) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void publishWorks(ei_ideas1 ideas) {
		// TODO Auto-generated method stub
		
	}		
}

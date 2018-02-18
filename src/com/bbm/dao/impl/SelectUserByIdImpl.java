package com.bbm.dao.impl;

import java.sql.ResultSet;
import java.util.List;

import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas1;
import com.bbm.dao1.RegisterDao1;
import com.bbm.util.DBconnection;

public class SelectUserByIdImpl implements RegisterDao1{

	@Override
	public void update(UpdateUser updateUser) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ei_ideas1> geteiideas() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UpdateUser selectUserByName(int id) {
		 String sql="select Username,Password,Sex,Age,Email,Address from ei_user where id=id";
		   ResultSet rs = DBconnection.executeQuery(sql);
		   UpdateUser updateUser = null;
		   try{
			   while(rs.next()){
				   updateUser =new UpdateUser();
				   
				   updateUser.setUsername(rs.getString("Username"));;
				   updateUser.setPassword(rs.getString("Password"));
				   updateUser.setSex(rs.getString("Sex"));
				   updateUser.setAge(rs.getInt("age"));
				   updateUser.setEmail(rs.getString("Email"));
				   updateUser.setAddress(rs.getString("Address"));
				  System.out.println(updateUser);
			   }
		   }
		   catch(Exception e){
				e.printStackTrace();
		   }
		   DBconnection.close();	
		   return updateUser;
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

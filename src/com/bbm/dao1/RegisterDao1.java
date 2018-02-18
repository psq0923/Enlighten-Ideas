package com.bbm.dao1;

import java.sql.ResultSet;
import java.util.List;


import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas1;
import com.bbm.util.DBconnection;

public interface RegisterDao1 {
	
	/*
	 * 更新用户
	 * */
	public void update(UpdateUser updateUser);
	/*
	 * 
	 * 根据类别查看创意
	 * */
	  public List<ei_ideas1> geteiideas();
	/*
	 * 添加用户作品
	 * */
	// public void addRegisterWorks(Register register);
	/*
	 * 注册验证
	 * */public UpdateUser selectUserByName(int id);

		/*
		 * 添加作品
		 * */
		 public void publishWorks(ei_ideas1 ideas);
	/*
		 * 查询所有
		 * */
		 public boolean find(UpdateUser user);
		//public List<Register> getFindALL();
	
	//public Register register(String username,String password,String password1,
	//String sex,int age,String email,String address,String question,String answer);
	/*
	 * 查询所有
	 * */
	 //public boolean find(Register register);
	//public List<Register> getFindALL();
	/*
	 * 删除用户
	 * */
	//public void delRegister(int id);
	
	/*
	 * 根据ID查询某条用户
	 * */
	//public Register getFindById(int id);
	

}

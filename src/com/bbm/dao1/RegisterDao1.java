package com.bbm.dao1;

import java.sql.ResultSet;
import java.util.List;


import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas1;
import com.bbm.util.DBconnection;

public interface RegisterDao1 {
	
	/*
	 * �����û�
	 * */
	public void update(UpdateUser updateUser);
	/*
	 * 
	 * �������鿴����
	 * */
	  public List<ei_ideas1> geteiideas();
	/*
	 * ����û���Ʒ
	 * */
	// public void addRegisterWorks(Register register);
	/*
	 * ע����֤
	 * */public UpdateUser selectUserByName(int id);

		/*
		 * �����Ʒ
		 * */
		 public void publishWorks(ei_ideas1 ideas);
	/*
		 * ��ѯ����
		 * */
		 public boolean find(UpdateUser user);
		//public List<Register> getFindALL();
	
	//public Register register(String username,String password,String password1,
	//String sex,int age,String email,String address,String question,String answer);
	/*
	 * ��ѯ����
	 * */
	 //public boolean find(Register register);
	//public List<Register> getFindALL();
	/*
	 * ɾ���û�
	 * */
	//public void delRegister(int id);
	
	/*
	 * ����ID��ѯĳ���û�
	 * */
	//public Register getFindById(int id);
	

}

package com.bbm.dao1;

import java.util.List;
import com.bbm.bean.Register;

public interface RegisterDao {
	/*
	 * ����û�
	 * */
	 public void addRegister(Register register);
	/*
	 * ע����֤
	 * */
	//public Register register(String username,String password,String password1,
	//String sex,int age,String email,String address,String question,String answer);
	/*
	 * ��ѯ����
	 * */
	 public boolean find(Register register);
	 /*
		 * ��ѯ�û���
		 * */
		 public boolean checkUsername(String username);
	//public List<Register> getFindALL();
	/*
	 * ɾ���û�
	 * */
	//public void delRegister(int id);
	/*
	 * �����û�
	 * */
	//public void updRegister(Register register);
	/*
	 * ����ID��ѯĳ���û�
	 * */
	//public Register getFindById(int id);

}

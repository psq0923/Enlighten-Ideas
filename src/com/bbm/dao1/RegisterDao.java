package com.bbm.dao1;

import java.util.List;
import com.bbm.bean.Register;

public interface RegisterDao {
	/*
	 * 添加用户
	 * */
	 public void addRegister(Register register);
	/*
	 * 注册验证
	 * */
	//public Register register(String username,String password,String password1,
	//String sex,int age,String email,String address,String question,String answer);
	/*
	 * 查询所有
	 * */
	 public boolean find(Register register);
	 /*
		 * 查询用户名
		 * */
		 public boolean checkUsername(String username);
	//public List<Register> getFindALL();
	/*
	 * 删除用户
	 * */
	//public void delRegister(int id);
	/*
	 * 更新用户
	 * */
	//public void updRegister(Register register);
	/*
	 * 根据ID查询某条用户
	 * */
	//public Register getFindById(int id);

}

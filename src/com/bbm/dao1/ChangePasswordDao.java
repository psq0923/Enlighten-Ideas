package com.bbm.dao1;

import com.bbm.bean.ChangePassword;
import com.bbm.bean.Register;

public interface ChangePasswordDao {
	/*
	 * 查询所有
	 * */
	 public boolean find(ChangePassword cp);
	 /*
		 * 添加
		 * */
		 public void addRegister(ChangePassword cp);
}

package com.bbm.dao1;

import com.bbm.bean.ChangePassword;
import com.bbm.bean.Register;

public interface ChangePasswordDao {
	/*
	 * ��ѯ����
	 * */
	 public boolean find(ChangePassword cp);
	 /*
		 * ���
		 * */
		 public void addRegister(ChangePassword cp);
}

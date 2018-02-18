package com.bbm.dao.impl;







import com.bbm.bean.ei_work_comment;

import com.bbm.dao1.liuyandao;
import com.bbm.util.DBconnection;


public class liuyandaoImpl implements liuyandao {
	/*private HttpServletRequest request;*/
	public void addliuyan (ei_work_comment ewc){
		try{
		String sql="insert into ei_comment (reviewer_ID,Author_ID,Work_id,comment_time,Status,comment)values(?,?,?,?,?,?);";
		Object[] obj=new Object[6];
		obj[0]=ewc.getReviewer_ID();
		obj[1]=ewc.getAuthor_ID();
		obj[2]=ewc.getWork_id();
		obj[3]=ewc.getComment_time();
		obj[4]=ewc.getStatus();
		obj[5]=ewc.getComment();
		DBconnection.executeUpdate(sql,obj);
		}catch(Exception e){
			e.printStackTrace();
		}
  }
	
}
package com.bbm.dao.impl;




import com.bbm.util.DBconnection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.ei_ideas;
import com.bbm.dao1.dianzandao;


public class dianzandaoImpl implements dianzandao{
	
	
	public int updianzan(ei_ideas dz) {
	    int i = 0;
		try {
			 HttpServletRequest request = ServletActionContext.getRequest();
			 HttpSession  session=request.getSession();
			 String works_id = session.getAttribute("work_id").toString();
			// request.setAttribute("works_id",works_id);
			 System.out.println(789+"-----------"+works_id);
			String sql = "update ei_ideas set thumbs_up_count= ?+1 where ID="+works_id;
			
			
			 Object[] objs = new Object[1];
			
			
			 objs[0] = dz.getThumbs_up_count();
			 System.out.println( "123456"+objs[0]);
			 i = DBconnection.executeUpdate(sql,objs);
		     System.out.println(i);
		} catch (Exception e) {
			e.printStackTrace();
		}
		//DBconnection.close();
		return i;
		
	}


	
}

package com.bbm.dao.impl;

import java.sql.ResultSet;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas1;
import com.bbm.bean.ideasAera;
import com.bbm.dao1.RegisterDao1;
import com.bbm.dao.impl.LoginDaoImpl;
import com.bbm.util.DBconnection;

public class eiideasdaoImpl implements RegisterDao1 {
   public List<ei_ideas1> geteiideas(){
	   List<ei_ideas1> list = new ArrayList<ei_ideas1>();
	   String sql="select * from ei_ideas ";
	   ResultSet rs = DBconnection.executeQuery(sql);
	   try{
		   while(rs.next()){
			   ei_ideas1 e =new ei_ideas1();
			   e.setWork_uri(rs.getString("Work_uri"));
			   e.setUser_ID(rs.getInt("User_ID"));
			   e.setIdeas_name(rs.getString("Ideas_name"));
			   e.setIdeas_area_id(rs.getInt("Idea_area_id"));
			   e.setGroup_id(rs.getInt("group_id"));
			   e.setPublic_time(rs.getInt("publish_time"));
			   e.setThumbers_up_count(rs.getInt("Thumbs_up _count"));
			   e.setAss_count(rs.getInt("ass_count"));
			   e.setView_times(rs.getInt("view_times"));
			   e.setStatus(rs.getInt("Status"));
			   list.add(e);
		   }
	   }
	   catch(Exception e){
			e.printStackTrace();
	   }
	   DBconnection.close();
	   return list;
   }

   @Override
   public void publishWorks(ei_ideas1 ideas) {
	   int id;
	   HttpServletRequest req=ServletActionContext.getRequest();
	   HttpSession session=req.getSession();
	   id=  (int) session.getAttribute("id");
	   System.out.println("发布作品获取用户id："+id);
	   try{
			String sql="insert into ei_ideas(Work_uri,Ideas_name,publish_time,User_ID,Idea_area_id,group_id)values(?,?,getDate(),"+id+",1,1)";
			Object[] obj=new Object[2];
			obj[0]=ideas.getWork_uri();
			/*obj[1]=ideas.getUser_ID();*/
			obj[1]=ideas.getIdeas_name();
			System.out.println(""+ideas.getWork_uri()+ideas.getIdeas_name());
			/*obj[3]=ideas.getIdeas_area_id();*/
			DBconnection.executeUpdate(sql,obj);
			
			}catch(Exception e){
				e.printStackTrace();
			}		  	
   }
   
   
   
   
   /*public void insertBook(String Work_uri, String username, String Ideas_name,
		   String Idea_area) {
		
		
		int id = 0;
		int ideas_id = 0;
		String sq = "select ID from ei_user where Username='" + username + "'";
		ResultSet rs = DBconnection.executeQuery(sq);
		try {
			while (rs.next()) {
				id = rs.getInt("ID");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		String sql = "select ID from ei_idea_area where Name='" + Idea_area + "'";
		ResultSet rs1 = DBconnection.executeQuery(sql);
		try {
			while (rs.next()) {
				ideas_id= rs.getInt("ID");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		String sq2 = "ei_ideas(Work_uri,User_ID,Ideas_name,publish_time,Idea_area_id)values('"
				+ Work_uri
				+ "','"
				+id
				+ "','"
				+ Ideas_name
				+ "','"
				+ "getDate()"
				+ "','"
				+ ideas_id "')'";
		System.out.print(sq2);
		DBconnection.executeUpdate(sql,obj);
		
		
		
	}
   */
   
   
   
   public boolean find(UpdateUser user) {
	   String sql="select id from ei_user where username=?";
		Object obj[]=new Object[1];
		obj[0]=user.getUsername();
		ResultSet rs=DBconnection.executeQuery(sql, obj);
		try{
			while(rs.next()){
				int n = rs.getInt(1);
				if(n>0){
				return true;//用户名已存在
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;
   }
   
   public boolean findArea(ideasAera area) {
	   String sql="select id from ei_user where username=?";
		Object obj[]=new Object[1];
		obj[0]=area.getName();
		ResultSet rs=DBconnection.executeQuery(sql, obj);
		try{
			while(rs.next()){
				int n = rs.getInt(1);
				if(n>0){
				return true;//领域名已存在
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		return false;
   }
   
@Override
public void update(UpdateUser updateUser) {
	// TODO Auto-generated method stub
	
}
@Override
public UpdateUser selectUserByName(int id) {
	// TODO Auto-generated method stub
	return null;
}




}

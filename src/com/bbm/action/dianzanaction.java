package com.bbm.action;

import com.bbm.dao.impl.dianzandaoImpl;


import com.opensymphony.xwork2.ActionContext;

import com.opensymphony.xwork2.ActionSupport;

import java.util.Date;

import com.bbm.bean.ei_ideas;

public class dianzanaction extends ActionSupport{
	ActionContext context = ActionContext.getContext();
	
	  private String Work_uri;
	   private int User_ID;
	   private String ideas_name;
	   private int ideas_area_id;
	   private int group_id;
	   private Date public_time;
	   private int Thumbers_up_count;
	   private int ass_count;
	   private int view_times;
	   private int Status;
	public String getWork_uri() {
		return Work_uri;
	}
	public void setWork_uri(String work_uri) {
		Work_uri = work_uri;
	}
	public int getUser_ID() {
		return User_ID;
	}
	public void setUser_ID(int user_ID) {
		User_ID = user_ID;
	}
	public String getIdeas_name() {
		return ideas_name;
	}
	public void setIdeas_name(String ideas_name) {
		this.ideas_name = ideas_name;
	}
	public int getIdeas_area_id() {
		return ideas_area_id;
	}
	public void setIdeas_area_id(int ideas_area_id) {
		this.ideas_area_id = ideas_area_id;
	}
	public int getGroup_id() {
		return group_id;
	}
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
	public Date getPublic_time() {
		return public_time;
	}
	public void setPublic_time(Date public_time) {
		this.public_time = public_time;
	}
	public int getThumbers_up_count() {
		return Thumbers_up_count;
	}
	public void setThumbers_up_count(int thumbers_up_count) {
		Thumbers_up_count = thumbers_up_count;
	}
	public int getAss_count() {
		return ass_count;
	}
	public void setAss_count(int ass_count) {
		this.ass_count = ass_count;
	}
	public int getView_times() {
		return view_times;
	}
	public void setView_times(int view_times) {
		this.view_times = view_times;
	}
	public int getStatus() {
		return Status;
	}
	public void setStatus(int status) {
		Status = status;
	}
	
    dianzandaoImpl dadl= new dianzandaoImpl();
	ei_ideas dz;
	//定义处理用户请求的execute方法
	public String execute() throws Exception{
	
	dz=new ei_ideas();
	
	
	dz.setThumbs_up_count(Thumbers_up_count);
	System.out.println(Thumbers_up_count);
	dadl.updianzan(dz);
	//DBconnection.close();
	 return "SUCCESS";

    }
}
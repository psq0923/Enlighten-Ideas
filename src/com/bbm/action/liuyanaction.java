package com.bbm.action;

import com.opensymphony.xwork2.ActionContext;



import com.opensymphony.xwork2.ActionSupport;


import com.bbm.dao.impl.liuyandaoImpl;

import java.sql.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.swing.text.html.HTMLEditorKit.HTMLTextAction;
import javax.websocket.Session;

import org.apache.logging.log4j.core.appender.SyslogAppender;
import org.apache.struts2.ServletActionContext;

import com.bbm.bean.ei_work_comment;

public class liuyanaction extends ActionSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	ActionContext context = ActionContext.getContext();
	 private int reviewer_ID;
	 private int Author_ID;
	 private int Work_id;
	 private Date comment_time;
	 private String comment;
	 private int Status;
	 private String works_id;
	 
	public String getWorks_id() {
		return works_id;
	}
	public void setWorks_id(String works_id) {
		this.works_id = works_id;
	}
	public ActionContext getContext() {
		return context;
	}
	public void setContext(ActionContext context) {
		this.context = context;
	}
	public int getReviewer_ID() {
		return reviewer_ID;
	}
	public void setReviewer_ID(int reviewer_ID) {
		this.reviewer_ID = reviewer_ID;
	}
	public int getAuthor_ID() {
		return Author_ID;
	}
	public void setAuthor_ID(int author_ID) {
		Author_ID = author_ID;
	}
	public int getWork_id() {
		return Work_id;
	}
	public void setWork_id(int work_id) {
		Work_id = work_id;
	}
	public Date getComment_time() {
		return comment_time;
	}
	public void setComment_time(Date comment_time) {
		this.comment_time = comment_time;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getStatus() {
		return Status;
	}
	public void setStatus(int status) {
		Status = status;
	}

	 liuyandaoImpl lydi=new liuyandaoImpl();
	 ei_work_comment ewc;
	 public String execute() throws Exception{
		 HttpServletRequest request = ServletActionContext.getRequest();
		 HttpSession  session=request.getSession();
		 String works_id = session.getAttribute("work_id").toString();
		// request.setAttribute("works_id",works_id);
		 System.out.println(123123+"-----------"+works_id);
		ewc = new ei_work_comment();
		ewc.setReviewer_ID(reviewer_ID);
		session.setAttribute("Author_ID", Author_ID);
		ewc.setAuthor_ID(Author_ID);
		ewc.setWork_id(Work_id);
		ewc.setComment_time(comment_time);
		ewc.setStatus(Status);
		//comment = new String(comment.getBytes("iso8859-1"),"utf-8");
		ewc.setComment(comment);
		lydi.addliuyan(ewc);
		 return "SUCCESS";
	 }
	 
}

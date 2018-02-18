package com.bbm.bean;

import java.util.Date;

public class ei_work_comment {
 private int reviewer_ID;
 private int Author_ID;
 private int Work_id;
 private Date comment_time;
 private String comment;
 private int Status;
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
public int getStatus() {
	return Status;
}
public void setStatus(int status) {
	Status = status;
}
public String getComment() {
	return comment;
}
public void setComment(String comment) {
	this.comment = comment;
}
 
}

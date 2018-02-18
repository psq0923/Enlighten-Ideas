package com.bbm.bean;

public class ei_ideas {
private String Work_uri;//作品地址
private int User_ID;//作者ID
private String Ideas_name;//作品名称
private int Idea_area_id;//领域ID
private int group_id;//作品组ID
private int publish_time;//发布时间
private int Thumbs_up_count;//点赞量
private int ass_coun;//评论量
private int view_times;//浏览量
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
	return Ideas_name;
}
public void setIdeas_name(String ideas_name) {
	Ideas_name = ideas_name;
}
public int getIdea_area_id() {
	return Idea_area_id;
}
public void setIdea_area_id(int idea_area_id) {
	Idea_area_id = idea_area_id;
}
public int getGroup_id() {
	return group_id;
}
public void setGroup_id(int group_id) {
	this.group_id = group_id;
}
public int getPublish_time() {
	return publish_time;
}
public void setPublish_time(int publish_time) {
	this.publish_time = publish_time;
}
public int getThumbs_up_count() {
	return Thumbs_up_count;
}
public void setThumbs_up_count(int thumbs_up_count) {
	Thumbs_up_count = thumbs_up_count;
}
public int getAss_coun() {
	return ass_coun;
}
public void setAss_coun(int ass_coun) {
	this.ass_coun = ass_coun;
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
}

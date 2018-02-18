package com.bbm.action;
import java.io.*;
import java.sql.ResultSet;

import org.apache.struts2.ServletActionContext;

import com.bbm.bean.UpdateUser;
import com.bbm.bean.ei_ideas;
import com.bbm.bean.ei_ideas1;
import com.bbm.dao.impl.eiideasdaoImpl;
import com.bbm.util.DBconnection;
import com.opensymphony.xwork2.ActionSupport;

public class imguploadAction extends ActionSupport {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String Work_uri;
	private String ideas_name;//这个的getset在哪里？
	//private int ideas_area_id;
	 
	
	private File logoimg;//封装文件的属性
	private String logoimgFileName;//封装文件名的属性
	private String logoimgContentType;//封装文件属性的Action属性
	private String savePath;//封装文件存储的路径
	private String logoimgFirstName;
	private String logoimgSuffixName;
	private int ideaAreaId;
	private int groupId;
	public int getIdeaAreaId() {
		return ideaAreaId;
	}
	public void setIdeaAreaId(int ideaAreaId) {
		this.ideaAreaId = 1;
	}
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = 1;
	}
	public String getIdeas_name() {
		return ideas_name;
	}
	public void setIdeas_name(String ideas_name) {
		this.ideas_name = ideas_name;
	}
	public String getWork_uri() {
		return Work_uri;
	}
	public void setWork_uri(String work_uri) {
		Work_uri = work_uri;
	}
	public void setSavePath(String savePath){
		this.savePath=savePath;
	}
	public String getSavePath(){
		return ServletActionContext.getServletContext().getRealPath(savePath);		
	}
	
	
	public File getLogoimg() {
		return logoimg;
	}
	public void setLogoimg(File logoimg) {
		this.logoimg = logoimg;
	}
	public String getLogoimgFileName() {
		return logoimgFileName;
	}
	public void setLogoimgFileName(String logoimgFileName) {
		this.logoimgFileName = logoimgFileName;
	}
	public String getLogoimgContentType() {
		return logoimgContentType;
	}
	public void setLogoimgContentType(String logoimgContentType) {
		this.logoimgContentType = logoimgContentType;
	}
	ei_ideas1 ei=new ei_ideas1();
	
	/*public ei_ideas getEi() {
		return ei;
	}
	public void setEi(ei_ideas ei) {
		this.ei = ei;
	}*/
	@Override
	public String execute() throws Exception {
		System.out.println(123);
		
		FileInputStream fis = new FileInputStream(getLogoimg());
		
		//获取后缀名
		int pointPos = getLogoimgFileName().lastIndexOf(".");//bc.aaa.jpg
		logoimgSuffixName = getLogoimgFileName().substring(pointPos);
		System.out.println(122343);
		
		//获取当前时间
		long time = System.currentTimeMillis();
		String newFilename = time+logoimgSuffixName;
	    /*ei_ideas ideas=new ei_ideas();
		
		ideas.setWork_uri(getSavePath());
		ideas.setIdeas_name(ideas_name);*/
		//ideas.setIdeas_name(ideas_name);
		
		ei.setWork_uri("img/"+newFilename);
		ei.setIdeas_name(ideas_name);
		
		
		eiideasdaoImpl impl=new eiideasdaoImpl();
		impl.publishWorks(ei);/**/
		File file = new File(getSavePath(),newFilename);
		FileOutputStream fos = new FileOutputStream(file);
		System.out.println("文件名:"+getLogoimgFileName());
		System.out.println("文件名:"+newFilename );
		System.out.println("后缀名:"+logoimgSuffixName);
		byte[] buffer = new byte[2048];
		int len=0;
		//if(logoimgSuffixName.equals(".bmp")){
			while((len=fis.read(buffer))>0){
				fos.write(buffer, 0, len);
			}
			fos.close();
			return SUCCESS;
	}
	
	
	   
	
	
}

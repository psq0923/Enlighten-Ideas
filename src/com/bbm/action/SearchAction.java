package com.bbm.action;

import com.bbm.bean.Search;
import com.bbm.dao.impl.SearchImpl;
import com.opensymphony.xwork2.ActionSupport;

public class SearchAction extends ActionSupport {
    String search;

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}
	
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		SearchImpl si=new SearchImpl();
		Search s=new Search();
		s.setSearch(search);
		
		System.out.println(s);
		
		/*HttpServletRequest request = ServletActionContext.getRequest();
		String se = request.getParameter(search);
		
		System.out.println(se);
		
		SearchDao sdao = new SearchImpl();
		List<Search> list = new ArrayList<Search>();
		list = sdao.getFindALL(se);
		request.setAttribute("se", se);*/
		
		return super.execute();
	}
}

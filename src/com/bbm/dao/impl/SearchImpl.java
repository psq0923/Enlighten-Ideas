package com.bbm.dao.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.bbm.action.SearchAction;
import com.bbm.bean.Search;
import com.bbm.dao1.SearchDao;
import com.bbm.util.DBconnection;

public class SearchImpl implements SearchDao{
	@Override
	public List<Search> getFindALL(Search s) {
		// TODO Auto-generated method stub
		List<Search> list = new ArrayList<Search>();
		try {
			String se =s.getSearch();
			System.out.println(se);
			
			String sql = "select * from ei_ideas where Ideas_name like '%"+se+"%'";
			
		}catch(Exception e){
			e.printStackTrace();
		}
		DBconnection.close();
		
		return list;
	}
}

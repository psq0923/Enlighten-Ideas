package com.bbm.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBconnection {
    protected static String dbClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    protected static String dbUrl = "jdbc:sqlserver://localhost:1433;" + "DatabaseName=EI_db";
    protected static String dbUser = "sa";
    protected static String dbPwd = "123";
    private static Connection conn = null;
    /*
     * 
     */
    public DBconnection() {// 获得数据库连接
        try {
            if (conn == null) {
                Class.forName(dbClassName).newInstance();
                conn = DriverManager.getConnection(dbUrl, dbUser, dbPwd);
            } else
                return;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

   /* static ResultSet executeQuery(String sql) {// 执行查询操作
        try {
            if (conn == null)
                new DBconnection();
            return conn.createStatement().executeQuery(sql);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }*/
    public static ResultSet executeQuery(String sql,Object... objects ) {// 
		try {
			if (conn == null) 
				new DBconnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			if(objects !=null && objects.length>0){
				for(int i=0;i<objects.length;i++){
					ps.setObject(i+1, objects[i]);
				}
			}
			return ps.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}

    
    /*static public int executeUpdate(String sql) {// 执行其他操作

        try {
            if (conn == null)
                new DBconnection();
            return conn.createStatement().executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        }
    }*/
    
    public static int executeUpdate(String sql, Object... objects) {//

		try {
			if (conn == null)
				new DBconnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			if(objects !=null && objects.length>0){
				for(int i=0;i<objects.length;i++){
					ps.setObject(i+1, objects[i]);
				}
			}
			return ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			return -1;
		}
	}

    public static void close() {// 关闭连接
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            conn = null;
        }
    } 
}
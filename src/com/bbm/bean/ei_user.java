package com.bbm.bean;



public class ei_user {
   private int ID;
   private String Username;
   private String Icon_uri;
   private String Password;
   private String Sex;
   private int Age;
   private String Email;
   private String Address;
   private String Qusetion;
   private String Answer;
   private String Hint;
   private int Status;
   private int Application_time;
public int getID() {
	return ID;
}
public void setID(int iD) {
	ID = iD;
}
public String getUsername() {
	return Username;
}
public void setUsername(String username) {
	Username = username;
}
public String getIcon_uri() {
	return Icon_uri;
}
public void setIcon_uri(String icon_uri) {
	Icon_uri = icon_uri;
}
public String getPassword() {
	return Password;
}
public void setPassword(String password) {
	Password = password;
}
public String getSex() {
	return Sex;
}
public void setSex(String sex) {
	Sex = sex;
}
public int getAge() {
	return Age;
}
public void setAge(int age) {
	Age = age;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}
public String getAddress() {
	return Address;
}
public void setAddress(String address) {
	Address = address;
}
public String getQusetion() {
	return Qusetion;
}
public void setQusetion(String qusetion) {
	Qusetion = qusetion;
}
public String getAnswer() {
	return Answer;
}
public void setAnswer(String answer) {
	Answer = answer;
}
public String getHint() {
	return Hint;
}
public void setHint(String hint) {
	Hint = hint;
}
public int getStatus() {
	return Status;
}
public void setStatus(int status) {
	Status = status;
}
public int getApplication_time() {
	return Application_time;
}
public void setApplication_time(int application_time) {
	Application_time = application_time;
}
@Override
public String toString() {
	return "ei_user [ID=" + ID + ", Username=" + Username + ", Icon_uri=" + Icon_uri + ", Password=" + Password
			+ ", Sex=" + Sex + ", Age=" + Age + ", Email=" + Email + ", Address=" + Address + ", Qusetion=" + Qusetion
			+ ", Answer=" + Answer + ", Hint=" + Hint + ", Status=" + Status + ", Application_time=" + Application_time
			+ "]";
}
   
  }

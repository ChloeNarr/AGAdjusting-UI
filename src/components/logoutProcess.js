// logoutProcess.js

export function AppLogout(){
  	// clear session variables and redirect to the /
  	
  	sessionStorage.setItem('username', "");
  	alert(sessionStorage.getItem('username'));
  
  	// alert(sessionStorage.getItem('username'));
}
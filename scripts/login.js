"use strict";
function login() {
	if ( document.myform.username.value === "Developer"  && document.myform.pword.value ==="PasDev"){				
		location.href = "Home.html";
		document.myform.username.value = "";
		document.myform.pword.value = "";
		return true;
	}else{
		alert ("Invalid User Name and/or password.");
		document.myform.username.value = "";
		document.myform.pword.value = "";
		return false;
	}
	return false;
};

function logout() {
location.href = "Login.html";
};
"use strict";

var profile = { name:undefined, age:undefined, phone:undefined, email:undefined, address:undefined, profilePic:undefined};

var profileData;

function Profile(name, age, phone, email, address, profilePic) {
	this.name = name;
	this.age = age;
	this.phone = phone;
	this.email = email;
	this.address = address;
	this.profilePic = profilePic;
};                          


function saveProfile() {
	try {	
			profileData = new Profile(document.getElementById("name").value,
			document.getElementById("age").value,
			document.getElementById("phone").value,
			document.getElementById("email").value,
			document.getElementById("address").value,
			document.getElementById("profilePic").value);	
			console.log(profileData);			
	}catch (e) {
		console.log(e);
	}			
};

function loadProfile(){	
	try {	
		document.getElementById("profileDetails").style.display="block";
		document.getElementById("feedDetails").style.display="none";
		document.getElementById("saveProfile").disabled = true;   
		if(profileData != undefined || profileData != null) {
			document.getElementById("name").value = profileData.name;
			document.getElementById("age").value = profileData.age;
			document.getElementById("phone").value = profileData.phone;
			document.getElementById("email").value = profileData.email;
			document.getElementById("address").value = profileData.address;
			document.getElementById("profilePic").value = profileData.profilePic;
		}
	}catch (e) {
		console.log(e);
	}	
};

function SetButtonStatus(sender, target) {      
    document.getElementById("saveProfile").disabled = true;  
	var isNameValid = validateField(document.getElementById("name").value);
	var isageValid = validateField(document.getElementById("age").value);
	var isPhoneValid = validateField(document.getElementById("phone").value);
	var isemailValid = validateField(document.getElementById("email").value);
	var isaddValid = validateField(document.getElementById("address").value);
	//var ispicValid = validateField(document.getElementById("profilePic").value);
	
	if(isNameValid && isageValid && isPhoneValid && isemailValid && isaddValid ){	
	 document.getElementById("saveProfile").disabled = false;  
	}
};

function validateField(fieldValue){
    if (fieldValue==null || fieldValue=="") {      
        return false;
    }
	return true;
};

function showProfilePicture(pic){
		var files = pic.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img=document.getElementById("profilePicture");
            img.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
};
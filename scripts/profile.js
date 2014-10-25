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

function showProfilePicture(file){


};
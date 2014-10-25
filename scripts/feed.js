"use strict";
var feedList ;
var feed = { _id:undefined, _type:undefined, _time:undefined};
var feedCount = 0;

Feed.protype = {
	getId: function() { return this._id;},
	getType: function() { return this._type;}
};

function Feed(id, type, time) {
	this._id = id;
	this._type = type;
	this._time = time;
}

function init(){	
	try {
	   	document.getElementById("profileDetails").style.display="none";
		loadFeeds();
	}catch(err) {
		console.log(err.message);
	}	
};

function logout() {
	location.href = "Login.html";
};


function loadFeeds(){
	try {
		resetViewAndTable();
		 if(feedList){
			for (var i = 0; i < feedList.length; i++) {
				var currentFeed = feedList[i];
				var table = document.getElementById("myTableData");
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);			
				row.insertCell(0).innerHTML='<img src="../images/back.png" alt="Smiley face" height="30" width="30">';		
				row.insertCell(1).innerHTML= currentFeed.content;
				row.insertCell(2).innerHTML= currentFeed._time;
				row.insertCell(3).innerHTML= '<input type="button" class ="deletebutton" onClick="Javacsript:deleteFeed(this)">';	
			}
		  }
    }catch(err) {
		console.log(err.message);
	}	
};

function resetViewAndTable(){
	document.getElementById("profileDetails").style.display="none";
	document.getElementById("feedDetails").style.display="block";
	document.getElementById("feedValue").value = ""; 	
	var table = document.getElementById("myTableData");
	table.innerHTML = "";
};



function addRow() {		 
	var feedValue = document.getElementById("feedValue").value;
	
	if(feedValue.length == 0){
	 alert("Please Provide the Feed Value");
	 return false;
	}
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	var currentTime = new Date();	
	var createdTime = currentTime.getMonth() + 1+"/"+currentTime.getDate()+"/"+currentTime.getFullYear()+" "+convertTimeByDate(currentTime);
	row.insertCell(0).innerHTML='<img src="../images/back.png" alt="" height="30" width="30">';		
	row.insertCell(1).innerHTML= feedValue;
	row.insertCell(2).innerHTML= createdTime;
	row.insertCell(3).innerHTML= '<input type="button" class ="deletebutton"  onClick="Javacsript:deleteFeed(this)">';	
	
	var feedObjectType ="text";
	var feedObject;
	
	if(isValidUrlText(feedValue)) {
	 feedObjectType ="url";
	}	
	feedCount++;		
	var feed = new Feed(feedCount, feedObjectType, createdTime)
	feedObject = Object.create(feed);
	feedObject.content = feedValue;
	createFeed(feedObject);
  
};

function createFeed(feed) {
	feedList = feedList || [];
	feedList.push(feed);
	document.getElementById("feedValue").value = ""; 		
};

function deleteFeed(obj) {	 
	var index = obj.parentNode.parentNode.rowIndex;
	var table = document.getElementById("myTableData");
	feedList.splice(index, 1);	
	table.deleteRow(index);
};

function deleteAllRows(){
  try {
	  var table = document.getElementById("myTableData");
	  var rowCount = table.rows.length;
	  for (var i = 0; i < rowCount; i++) {
		table.deleteRow(i);
	  }  
  }catch(err) {
	console.log(err.message);
  }	 
}



function isValidUrlText(feedValue) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(feedValue)) {
    return false;
  } else {
    return true;
  }
}

function convertTimeByDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};


var login = document.getElementById("login");
var register = document.getElementById("register");
var id = document.getElementById("id");
var password = document.getElementById("password");
var ids = [];
var pws = [];
var lr = document.getElementById("lr");
var user = document.getElementById("user");
var off = document.getElementById("offline");
var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");

id.onblur = function(){
	if (id.value.length < 8 || id.value.length > 11) {
		tip1.style.display = "block";
	}
}

password.onblur = function(){
	if (password.value.length < 8) {
		tip2.style.display = "block";
	}
}

register.onclick = function(){
	document.getElementById("lfaile").style.display = "none";
	var i = 0;
	for (; i < ids.length&&ids[i] != id.value; ) {
		i++;
	}
	if (i < ids.length || tip1.style.display == "block" || tip2.style.display == "block") {
		document.getElementById("rfaile").style.display = "block";
	}
	else if(i == ids.length){
		document.getElementById("vregister").style.display = "block";
		ids.push(id.value);
		pws.push(password.value);
	}
	id.value = "";
	password.value = "";
}

login.onclick = function(){
	document.getElementById("rfaile").style.display = "none";
	document.getElementById("vregister").style.display = "none";
	var i = 0;
	for (; i < ids.length&&ids[i] != id.value; ) {
		i++;
	}
	if (i < ids.length&&password.value == pws[i]) {
		user.innerHTML = id.value+"用户";
		lr.style.display = "none";
		welcome.style.display = "block";
	}
	else{
		document.getElementById("lfaile").style.display = "block";
	}
	id.value = "";
	password.value = "";
}

id.onfocus = function(){
	document.getElementById("rfaile").style.display = "none";
	document.getElementById("vregister").style.display = "none";
	document.getElementById("lfaile").style.display = "none";
	tip1.style.display = "none";
	tip2.style.display = "none";
}

password.onfocus = function(){
	document.getElementById("rfaile").style.display = "none";
	document.getElementById("vregister").style.display = "none";
	document.getElementById("lfaile").style.display = "none";
	tip2.style.display = "none";
}

off.onclick = function(){
	welcome.style.display = "none";
	lr.style.display = "block";
}
// JavaScript Document

//copy the value of input text to input password
function change() {
	var src= document.getElementById('usrlogin');
	var dest=document.getElementById('pswlogin');
	dest.value=src.value;
}
//script for enabling disabling voucher login and member login
let pswlogin1 = document.querySelector(".pswlogin");
let ishow = true;
function toggle() {
	if(ishow) {
	document.getElementById('entervup').innerHTML = "Enter username and password";
	var input = document.getElementById ("usrlogin");
	input.placeholder = "Username";
	document.getElementById('usrlogin').value = "";
	document.getElementById('pswlogin').value = "";
	document.getElementById('usrlogin').setAttribute("onKeyup", "");
	document.getElementById('pswlogin').style.display="block";
	const collection = document.getElementsByClassName("btnsub2");
	collection[0].style.backgroundImage = "url('img/voucher-login.svg')";
	ishow = false;
} else {
	document.getElementById('entervup').innerHTML = "Enter voucher code";
	var input = document.getElementById ("usrlogin");
	input.placeholder = "Voucher";
	document.getElementById('usrlogin').setAttribute("onKeyup", "change()");
	document.getElementById('pswlogin').value = "";
	document.getElementById('usrlogin').value = "";
	document.getElementById('pswlogin').style.display="none";
	const collection = document.getElementsByClassName("btnsub2");
	collection[0].style.backgroundImage = "url('img/member-login.svg')";

	ishow= true;	
}
}
//open rate modal
function openRate() {
		var x = document.getElementById("modal_container");
		x.style.opacity="1";
		x.style.pointerEvents="auto";
		document.body.style.overflow = "hidden";
		document.body.style.userSelect = "none";
}
//close rate modal
function closeratetoggle() {
		var x= document.getElementById("modal_container");
		x.style.opacity="0";
		x.style.pointerEvents="none";
		document.body.style.overflow = "auto";
		document.body.style.userSelect = "auto";

}
//open how
function openhowto() {
	var x = document.getElementById("modal_container2");
		x.style.opacity="1";
		x.style.pointerEvents="auto";
		document.body.style.overflow = "hidden";
		document.body.style.userSelect = "none";

}
//close
function btnhowto() {
    var x = document.getElementById("modal_container2");
    if (x.style.display == "block") {
        x.style.opacity="0";
		x.style.pointerEvents="none";
		document.body.style.overflow = "auto";
		document.body.style.userSelect = "auto";
    } else {
		document.body.style.overflow = "auto";
		document.body.style.userSelect = "auto";
        x.style.opacity="0";
		x.style.pointerEvents="none";
    }
}








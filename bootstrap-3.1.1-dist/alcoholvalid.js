$(document).ready(function (){
var form = $("#reg_form");
var name = $("#name");
var nameDetails = $("#nameDetails");
var email = $("#email");
var emailDetails = $("#emailDetails");
var Password1 = $("#Password1");
var Password1Details = $("#Password1Details");
var Password2 = $("#Password2");
var Password2Details = $("#Password2Details");
var message = $("#message");
var button = $("#send");
var sday = $("#sday");
var messageDetails = $("#messageDetails");
var name2 = $("#name2");
var nameDetails2 = $("#nameDetails2");
var sdayDetails = $("#sdayDetails");
var smonth = $("#smonth");
var smonthDetails = $("#smonthDetails");
var syear = $("#syear");
var syearDetails = $("#syearDetails");


name.blur(validateName);
name2.blur(validateName2);
email.blur(validateEmail);
Password1.blur(validatePassword1);
Password2.blur(validatePassword2);
message.blur(validateMessage);
sday.blur(validateSday);
smonth.blur(validateSmonth);
syear.blur(validateSyear);
name.keyup(validateName);
name2.keyup(validateName2);
email.keyup(validateEmail);
Password1.keyup(validatePassword1);
Password2.keyup(validatePassword2);
message.keyup(validateMessage);
sday.keyup(validateSday);
smonth.keyup(validateSmonth);
syear.keyup(validateSyear);


form.submit(function(e){
	
	e.preventDefault();
	

	if (validateName() & validateName2() & validateEmail() & validatePassword1() & validatePassword2() & validateMessage() & validateSday() & validateSmonth() & validateSyear()) {
		return true;
	} else {
		return false;
	}
});
	function validateName(){
		if(name.val().length < 5){
			name.addClass("error");
			nameDetails.text("Your name is too short.Make it 5 characters or more");
			nameDetails.addClass("error");
			return false;
		} else {
			name.removeClass("error");
			nameDetails.text("OK");
			nameDetails.removeClass("error");
			return true;
		}
	}
	
	function validateName2(){
		if(name2.val().length < 5){
			name2.addClass("error");
			nameDetails2.text("Your name is too short.Make it 5 characters or more");
			nameDetails2.addClass("error");
			return false;
		} else {
			name2.removeClass("error");
			nameDetails2.text("OK");
			nameDetails2.removeClass("error");
			return true;
		}
	}
	
	function validateSday(){
	if(sday.val()=='-1'){
		sday.addClass("error");
		sdayDetails.text("Please select");
		sdayDetails.addClass("error");
		return false;
	} else {
		sday.removeClass("error");
		sdayDetails.text("OK");
		sdayDetails.removeClass("error");
		return true;
	}
	
	}
	
	function validateSmonth(){
	if(smonth.val()=='-1'){
		smonth.addClass("error");
		smonthDetails.text("Please select");
		smonthDetails.addClass("error");
		return false;
	} else {
		smonth.removeClass("error");
		smonthDetails.text("OK");
		smonthDetails.removeClass("error");
		return true;
	}
	
	}
	
	function validateSyear(){
	if(syear.val()=='-1'){
		syear.addClass("error");
		syearDetails.text("Please select");
		syearDetails.addClass("error");
		return false;
	} else {
		syear.removeClass("error");
		syearDetails.text("OK");
		syearDetails.removeClass("error");
		return true;
	}
	
	}
	
	function validateEmail(){
		var a = email.val();
		var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		
		if(regexp.test(a)){
			email.removeClass("error");
			emailDetails.text("So I can get back to you");
			emailDetails.removeClass("error");
			return true;
		} else {
			email.addClass("error");
			emailDetails.text("Enter a valid email address");
			emailDetails.addClass("error");
			return false;
		}
	}	
	
	function validatePassword1(){
		if(Password1.val().length < 8){
			Password1.addClass("error");
			Password1Details.text("8 characters or more");
			Password1Details.addClass("error");
			return false;
		} else {
			Password1.removeClass("error");
			Password1Details.text("success");
			Password1Details.removeClass("error");
			return true;
		}
	}
	function validatePassword2(){
		if(Password2.val().length < 1){
			Password2.addClass("error");
			Password2Details.text("No text entered");
			Password2Details.addClass("error");
			return false;
		}
		if(Password1.val() !== Password2.val()){
			Password2.addClass("error");
			Password2Details.text("Password do not match");
			Password2Details.addClass("error");
			return false;
		} else {
			Password2.removeClass("error");
			Password2Details.text("success");
			Password2Details.removeClass("error");
			return true;
		}
	}
	function validateMessage() {
		if(message.val().length < 30){
			message.addClass("error");
			messageDetails.addClass("error");
			messageDetails.text("It's too short.");
			return false;
		} else {
			message.removeClass("error");
			messageDetails.removeClass("error");
			messageDetails.text("OK");
			return true;
		}
	}
	
});
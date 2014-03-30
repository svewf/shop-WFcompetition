$(document).ready(function (){

var form = $("#reg_formTwo");
var name = $("#name");
var nameDetails = $("#nameDetails");
var email = $("#email");
var emailDetails = $("#emailDetails");
var message = $("#message");
var button = $("#send");


name.blur(validateName);
email.blur(validateEmail);
message.blur(validateMessage);
name.keyup(validateName);
email.keyup(validateEmail);
message.keyup(validateMessage);

form.submit(function(e){
	
	e.preventDefault();
	

	if (validateName() & validateEmail() & validateMessage()) {
		true;
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
	
function validateEmail(){
		var a = email.val();
		var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		
		if(regexp.test(a)){
			email.removeClass("error");
			emailDetails.text("Success");
			emailDetails.removeClass("error");
			return true;
		} else {
			email.addClass("error");
			emailDetails.text("Enter a valid email address");
			emailDetails.addClass("error");
			return false;
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
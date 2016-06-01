$(document).ready(function(){

console.log("Js is HERE!!!!!!!!!!!!!");

var FirstName_var;
var LastName_var;
var email_var;
var phoneNumber_var;
var Address_var;
var city_var;
var state_var;
var zip_var;
var country_var;
var cardName_var;
var cardNumber_var;
var expDateM_var;
var expDateY_var;
var cardCVV_var;
var amount_var;




var FirstName_valid=false;
var LastName_valid=false;
var email_valid=false;
var phoneNumber_valid=false;
var Address_valid=false;
var city_valid=false;
var state_valid=false;
var zip_valid=false;
var country_valid=false;
var cardName_valid=false;
var cardNumber_valid=false;
var expDateM_valid=false;
var expDateY_valid=false;
var cardCVV_valid=false;
var amount_valid=false;



$("#donateBtn").click(function(){
	console.log("donateBtn is clicked");


	FirstName_var=$("#FirstName").val();
	LastName_var=$("#LastName").val();
	email_var=$("#email").val();
	Address_var=$("#address").val();
	city_var=$("#city").val();
	state_var=$("#state").val();
	zip_var=$("#zip").val();
	country_var=$("#country").val();
	cardNumber_var=$("#card-number").val();
	cardName_var=$("#card-holder-name").val();
	expDateM_var=$("#expiry-month").val();
	expDateY_var=$("#expiry-year").val();
	cardCVV_var=$("#cvv").val();
	amount_var=$("#money").val();

if(FirstName_var==""){
	$("#FirstName").css("border", "solid 1px red");
}else{
	FirstName_valid=validate("normalString", FirstName_var);
}

if(LastName_var==""){
	$("#LastName").css("border", "solid 1px red");
}else{
	LastName_valid=validate("normalString",LastName_var);
}

if(email_var==""){
	$("#email").css("border", "solid 1px red");
}else{
	email_valid=validate("emailAddress",email_var);
}

if(Address_var==""){
	$("#address").css("border", "solid 1px red");
}else{
	Address_valid=validate("normalString", Address_var);
}

if(city_var==""){
	$("#city").css("border", "solid 1px red");
}else{
	city_valid=validate("normalString", city_var);
}

if(state_var==""){
	$("#state").css("border", "solid 1px red");
}else{
	state_valid=validate("normalString", state_var);
}

if(zip_var==""){
	$("#zip").css("border", "solid 1px red");
}else{
	zip_valid=validate("number", zip_var);
}

if(country_var==""){
	$("#country").css("border", "solid 1px red");
}else{
	country_valid=validate("normalString", country_var);
}

if(cardName_var==""){
	$("#card-holder-name").css("border", "solid 1px red");
}else{
	cardName_valid=validate("normalString", cardName_var);
}

if(cardNumber_var==""){
	$("#card-number").css("border", "solid 1px red");
}else{
	cardNumber_valid=validate("cardNumer", cardNumber_var);
}

if(expDateM_var==""){
	$("#expiry-month").css("border", "solid 1px red");
}else{
	expDateM_valid=validate("normalString", expDateM_var);
}

if(expDateY_var==""){
	$("#expiry-year").css("border", "solid 1px red");
}else{
	expDateY_valid=validate("normalString", expDateY_var);
}

if(cardCVV_var==""){
	$("#cvv").css("border", "solid 1px red");
}else{
	cardCVV_valid=validate("cvv", cardCVV_var);
}

if(amount_var==""){
	$("#money").css("border", "solid 1px red");
}else{
	amount_valid=validate("number", amount_var);
}


if(FirstName_valid && LastName_valid && email_valid && Address_valid && city_valid && state_valid && zip_valid && country_valid && cardName_valid && cardNumber_valid && expDateM_valid && expDateY_valid && cardCVV_valid && amount_valid){
	alert("Form is ready");
	$("#donForm".submit());
}else{
	alert( "Please make sure your form is complete properly!");
}
});











$("#submitBtn").click(function(){
	console.log("submitBtn is clicked");

		FirstName_var=$("#FirstName").val();
		LastName_var=$("#LastName").val();
		email_var=$("#email").val();
		phoneNumber_var=$("#phoneNumber").val();




if(FirstName_var==""){
	$("#FirstName").css("border", "solid 1px red");
}else{
	FirstName_valid=validate("normalString", FirstName_var);
}

if(LastName_var==""){
	$("#LastName").css("border", "solid 1px red");
}else{
	LastName_valid=validate("normalString",LastName_var);
}

if(email_var==""){
	$("#email").css("border", "solid 1px red");
}else{
	email_valid=validate("emailAddress",email_var);
}

if(phoneNumber_var==""){
	$("#phoneNumber").css("border", "solid 1px red");
}else{
	phoneNumber_valid=validate("number",phoneNumber_var)
}

if(FirstName_valid && LastName_valid && email_valid && phoneNumber_valid){
	alert("Form is ready");
	$("#volForm".submit());
}else{
	alert( "Please make sure your form is complete properly!");
}
});









function validate( inputType, userInput ){
		var valid = false;
		switch( inputType ){
			case 'normalString':
					console.log( "Validating a String" );
					userInput = cleanUp( userInput );
					valid = true;
				break;		


			
			case 'emailAddress':
					console.log( "Validating Email Address");
					userInput=cleanUp(userInput);
					if( userInput.indexOf("@") >= 0){
						//valid so far...
						if( userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
				break;
			case 'cardNumer':
				console.log("Validating CC");
				userInput=cleanUp(userInput);
				if(isNaN(userInput)){
					valid=false;
				}else{
					valid=true;
				}
				break;

				case 'cvv':
				console.log("Validating CVV");
				userInput=cleanUp(userInput);
				if(userInput.length==3){
					valid=true;
				}else{
					valid=false;
				}



		
			case "number":
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
						valid = true;
					}
				break;		
		}

	return valid;
	}



function cleanUp( userInput ){
		console.log("cleanUp() initiated...")
		var temp = userInput;
		temp = temp.replace(/-/g, "");
		temp = temp.replace("<", "&lt;");
		temp = temp.replace(">", "&gt;");
		temp = temp.replace("SELECT", "");
		temp = temp.replace("DELETE", "");
		temp = temp.replace("INSERT", "");
		temp = temp.replace("alert()", "");
		return temp;
	}
});
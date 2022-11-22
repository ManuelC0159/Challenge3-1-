// Assignment code here
var chars = "abcdefghijklmopqestuvwxyz";
var charsNum = "0123456789";
var charsSpecial= "!@#$%^&*()";
var charsUpper = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
var charsAll ="0123456789abcdefghijklmopqestuvwxyz!@#$%^&*()ABCDEFGHIJKLMOPQRSTUVWXYZ";


function generatePassword() {
  window.alert("Please Select Password Criteria");
  var loopBreak = 0;
  var pwLength = 0;
  var pass = '';
  var charSelect = "0";

  while(loopBreak ==0){
    var userOption = window.prompt("1.Password Length\n2.Which Character Types\n3.All\nPlease enter 1, 2, or 3");
    if(userOption == 1 ){
      pwLength = pwLengthFind();

      for(var i=0; i < pwLength; i++){
        var randomNumber = Math.floor(Math.random()*charsAll.length);
        pass += charsAll.charAt(randomNumber);
      }
      loopBreak =1;
    }
    else if(userOption == 2){
      charSelect = charFind();
      for(var i=0; i < 8; i++){
        var randomNumber = Math.floor(Math.random()*charSelect.length+1);
        pass += charSelect.charAt(randomNumber);
      }
      loopBreak =1;
    }
    else if(userOption == 3){
      pwLength = pwLengthFind();
      charSelect = charFind();
      loopBreak =1;
      for(var i=0; i < pwLength; i++){
        var randomNumber = Math.floor(Math.random()*charSelect.length+1);
        pass += charSelect.charAt(randomNumber);
      }
    }
    else{
      window.alert("test failed");
    }
    return pass;
  }


}

function pwLengthFind(){
  var loopBreak= 0;
  while(loopBreak == 0){
    var howlong= window.prompt("How many characters would you like the password to be, between 8 and 128");
    if(howlong >= 8 && howlong <=128){
      return howlong;
    }
  }
}

function charFind(){
  //4 special characters user can mix and match from
    var selectType = undefined;
    var lowerSelect = window.confirm("Use lowercase lettters?");
    if(lowerSelect){
      selectType = chars;
    }
    var upperSelect = window.confirm("Use uppercase letters?");
    if(upperSelect){
      selectType += charsUpper;
    }
    var numSelect = window.confirm("User numeric characters?");
    if(numSelect){
      selectType += numSelect;
    }
    var speSelect = window.confirm("Use special characters?"); 
    if(speSelect){
      selectType += charsSpecial;
    }
    return selectType;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


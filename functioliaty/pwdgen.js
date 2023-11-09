
function generatePassword(pass_length, word_one, word_two) {
// Your password generation logic here
// Example logic that creates a password based on input values
var password = '';
//first get the length of word one and wordtwo (if applicable), then allocate space for those words, then add random characters for a secure high entropy password



// Generate password based on entered words and specified length
// This is a simple example, you can create a more sophisticated password generation algorithm

return password;
}

function lengthError(){
  alert('Password length should be between 10 and 30 characters.'); // Display an alert message
  var pass_box = document.getElementById("password_length");
  pass_box.style.borderColor = "red";

}

function wordError(){
  alert('Please fill in all required fields.'); // Display an alert message
  var word_one_box = document.getElementById("word_one");
  word_one_box.style.borderColor = "red";

}

document.getElementById('generateBtn').addEventListener('click', function(event) {

  var pass_length = document.getElementById("password_length").value; // either empty string if no value inputted, or a number
  var word_one = document.getElementById("word_one").value;
  var word_two = document.getElementById("word_two").value;

  
  if ((pass_length == "" || pass_length < 10 || pass_length > 30) && word_one.length == 0){ // length is empty or not eough AND word is empty
    document.getElementById("password_length").style.borderColor = "";
    document.getElementById("word_one").style.borderColor = "";
    
    console.log("first error");
    lengthError();
    wordError();

    return; // Stop further execution

    }
  else if((pass_length == "" || pass_length < 10 || pass_length > 30) && word_one.length != 0){ // length is empty or not enough but word is good
    document.getElementById("password_length").style.borderColor = "";
    document.getElementById("word_one").style.borderColor = "";
    console.log("second error");
    lengthError();
    return;
  }
  
  else if((pass_length != "" || pass_length > 10 || pass_length <= 30) && word_one.length == 0) {  // lenght is good but word not good
    document.getElementById("password_length").style.borderColor = "";
    document.getElementById("word_one").style.borderColor = "";
    console.log("thurd error");
    wordError();
    return;
  }





  

  generated_pass = "!23"
  


  document.getElementById("generated_password").innerText = "Generated Password: " + generated_pass;
  
}
)



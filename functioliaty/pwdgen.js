function getRandomChar(){
    // Define a character set
    const characters = '!@#$%^&*()_+';
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * characters.length);
  
    // Get the character at the random index
    const randomCharacter = characters.charAt(randomIndex);
  
    return randomCharacter;
  }

function generatePassword(pass_length, word_one, word_two) {
// Your password generation logic here
// Example logic that creates a password based on input values
var password = word_two; /// have it so that it is word_two + random cahracters + word_one characters, then + a symbol
var random_string = "";
random_string += (Math.floor(Math.random())).toString();

//first get the length of word one and wordtwo (if applicable), then allocate space for those words, then add random characters for a secure high entropy password
word_one_len = word_one.length;
word_two_len = word_two.length;
for(let i = 0; i < word_one_len; i++){
  if (i == 0){
    random_string += getRandomChar() + word_one[i].toUpperCase();
  }
  else{
  random_string += getRandomChar() + word_one[i].toLowerCase(); 
  }
}

password += random_string + getRandomChar();

remaining = password.length - pass_length;
if (remaining < 0){ // needs to be longer because length min not reached!!!
  password = password.slice(0, -1);
  for(let i = 0; i < Math.abs(remaining); i++){
    password += getRandomChar();
  }
}


// Generate password based on entered words and specified length
// This is a simple example, you can create a more sophisticated password generation algorithm

return password;
}

function lengthError() {
  alert('Password length should be between 10 and 30 characters.'); // Display an alert message
  var pass_box = document.getElementById("password_length");
  pass_box.style.borderColor = "red";
}

function wordError(word) {
  alert('Please fill in all required fields.'); // Display an alert message
  var word_box = document.getElementById(word);
  word_box.style.borderColor = "red";
}

document.getElementById('generateBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var pass_length = document.getElementById("password_length").value; // either an empty string if no value inputted, or a number
  var word_one = document.getElementById("word_one").value;
  var word_two = document.getElementById("word_two").value;

  function resetBorderColors() {
      document.getElementById("password_length").style.borderColor = "";
      document.getElementById("word_one").style.borderColor = "";
      document.getElementById("word_two").style.borderColor = "";
  }

  // Main logic
  if ((pass_length === "" || pass_length < 15) && (word_one === "" || word_two === "")) { // length is empty or less than min, AND word lengths are empty
      resetBorderColors();
      lengthError();
      if (word_one.length === 0) {
          wordError("word_one");
      }
      if (word_two.length === 0) {
          wordError("word_two");
      }
  } else if ((pass_length === "" || pass_length < 15) && word_one !== "") { // length is empty or less than min, AND word one is non empty aka good
      resetBorderColors();
      lengthError();
      if (word_two.length === 0) {
          wordError("word_two");
      }
  } else if ((pass_length !== "" || pass_length >= 15) && (word_one === "" || word_two === "")) { // length is good, but one of the words are empty
      resetBorderColors();
      if (word_one.length === 0) {
          wordError("word_one");
      }
      if (word_two.length === 0) {
          wordError("word_two");
      }
  } else {
      // Input values are valid
      resetBorderColors();
      generated_pass = generatePassword(pass_length, word_one, word_two);
      document.getElementById("generated_password").innerText = "Generated Password: " + generated_pass;
  }
});

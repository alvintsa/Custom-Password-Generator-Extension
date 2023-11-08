
function generatePassword(length, wordOne, wordTwo) {
// Your password generation logic here
// Example logic that creates a password based on input values
var password = '';

// Generate password based on entered words and specified length
// This is a simple example, you can create a more sophisticated password generation algorithm

return password;
}

document.getElementById('generateBtn').addEventListener('click', function(event) {

  // event.preventDefault(); // Prevent the default form submission

  var pass_length = document.getElementById("password_length").value;
  var word_one = document.getElementById("word_one").value;
  var word_two = document.getElementById("word_two").value;

  

  if (pass_length.toString == "" || word_one == ""){
    
    alert('Please fill in all required fields.'); // Display an alert message
    var pass_box = document.getElementById("password_length");
    var word_one_box = document.getElementById("word_one");
    pass_box.style.borderColor = "red";
    word_one_box.style.borderColor = "red";
    showWarning('pass_length', 'word_one');


    return; // Stop further execution
  }

  document.getElementById('pass_gen_form').submit();
  
}
)



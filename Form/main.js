function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");
  
    if (password != confirmPassword) {
      passwordError.innerText = "Passwords do not match.";
      return false;
    }
  
    passwordError.innerText = ""; // clear the error message if passwords match
    return true;
  }
